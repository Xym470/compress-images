"use client"

interface CompressionResult {
  blob: Blob
  url: string
}

export async function compressImage(file: File, quality = 0.7): Promise<CompressionResult> {
  // 如果是SVG文件，我们直接返回原始文件，因为SVG是矢量格式，不需要压缩
  if (file.type === "image/svg+xml") {
    return {
      blob: file,
      url: URL.createObjectURL(file)
    }
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      const img = new Image()

      img.onload = () => {
        // 创建Canvas
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")

        if (!ctx) {
          reject(new Error("Could not get canvas context"))
          return
        }

        // 设置Canvas尺寸 - 对大图片进行适当的缩放
        let width = img.width
        let height = img.height
        
        // 如果图片太大，适当缩放
        const MAX_WIDTH = 1920
        const MAX_HEIGHT = 1080
        
        if (width > MAX_WIDTH) {
          const ratio = MAX_WIDTH / width
          width = MAX_WIDTH
          height = height * ratio
        }
        
        if (height > MAX_HEIGHT) {
          const ratio = MAX_HEIGHT / height
          height = MAX_HEIGHT
          width = width * ratio
        }
        
        canvas.width = width
        canvas.height = height

        // 绘制图像到Canvas
        ctx.drawImage(img, 0, 0, width, height)

        // 获取文件扩展名
        const extension = file.name.split(".").pop()?.toLowerCase() || "jpeg"

        // 确定MIME类型
        let mimeType = "image/jpeg"
        let outputQuality = quality

        if (extension === "png") {
          mimeType = "image/png"
          // PNG通常不需要太多压缩，保持较高质量
          outputQuality = Math.max(0.8, quality)
        } else if (extension === "gif") {
          mimeType = "image/gif"
        } else if (extension === "webp") {
          mimeType = "image/webp"
          // WebP格式可以使用更激进的压缩
          outputQuality = quality * 0.9
        }

        // 将Canvas转换为Blob
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Could not create blob"))
              return
            }

            // 创建Object URL用于预览
            const url = URL.createObjectURL(blob)

            resolve({
              blob,
              url,
            })
          },
          mimeType,
          outputQuality,
        )
      }

      img.onerror = () => {
        reject(new Error("Failed to load image"))
      }

      // 设置图像源
      img.src = event.target?.result as string
    }

    reader.onerror = () => {
      reject(new Error("Failed to read file"))
    }

    // 读取文件为数据URL
    reader.readAsDataURL(file)
  })
}

// 压缩多个图像的函数
export async function compressImages(files: File[], quality = 0.7): Promise<CompressionResult[]> {
  const promises = files.map((file) => compressImage(file, quality))
  return Promise.all(promises)
}
