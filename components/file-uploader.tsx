"use client"

import { useState, useCallback, useRef } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { compressImage } from "@/lib/image-compressor"

type FileWithPreview = {
  file: File
  id: string
  preview: string
  status: "uploading" | "compressing" | "done" | "error"
  originalSize: number
  compressedSize?: number
  compressedBlob?: Blob
}

type FormatType = "image/jpeg" | "image/png" | "image/gif" | "image/webp" | "image/svg+xml"

export function FileUploader() {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState<FormatType | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substring(2, 9),
      preview: URL.createObjectURL(file),
      status: "uploading" as const,
      originalSize: file.size,
    }))

    setFiles((prev) => [...prev, ...newFiles])

    // Start compression for each file
    newFiles.forEach((fileWithPreview) => {
      processFile(fileWithPreview)
    })
  }, [])

  const processFile = async (fileWithPreview: FileWithPreview) => {
    setIsProcessing(true)

    try {
      // Update status to compressing
      setFiles((prev) => prev.map((f) => (f.id === fileWithPreview.id ? { ...f, status: "compressing" as const } : f)))

      // Compress the image
      const result = await compressImage(fileWithPreview.file)

      // Update the file with compressed data
      setFiles((prev) =>
        prev.map((f) =>
          f.id === fileWithPreview.id
            ? {
                ...f,
                status: "done" as const,
                compressedSize: result.blob.size,
                compressedBlob: result.blob,
              }
            : f,
        ),
      )
    } catch (error) {
      console.error("Error compressing image:", error)

      // Update status to error
      setFiles((prev) => prev.map((f) => (f.id === fileWithPreview.id ? { ...f, status: "error" as const } : f)))
    } finally {
      setIsProcessing(false)
    }
  }

  const formats = {
    "image/jpeg": "JPEG",
    "image/png": "PNG",
    "image/gif": "GIF",
    "image/webp": "WebP",
    "image/svg+xml": "SVG"
  }

  const handleFormatClick = (format: FormatType) => {
    setSelectedFormat(format)
    if (fileInputRef.current) {
      fileInputRef.current.accept = format
      fileInputRef.current.click()
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: selectedFormat ? { [selectedFormat]: [] } : {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
  })

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const filtered = prev.filter((f) => f.id !== id)
      return filtered
    })
  }

  const clearQueue = () => {
    // Revoke object URLs to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview))
    setFiles([])
  }

  const downloadFile = (file: FileWithPreview) => {
    if (!file.compressedBlob) return

    const link = document.createElement("a")
    link.href = URL.createObjectURL(file.compressedBlob)

    // Get file extension
    const extension = file.file.name.split(".").pop()

    // Create download name
    link.download = `compressed-${file.file.name}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadAll = () => {
    files.forEach((file) => {
      if (file.status === "done" && file.compressedBlob) {
        downloadFile(file)
      }
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const calculateSavings = (original: number, compressed?: number) => {
    if (!compressed) return 0
    return Math.round(((original - compressed) / original) * 100)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex gap-2 mb-4 flex-wrap">
          {(Object.entries(formats) as [FormatType, string][]).map(([mimeType, label]) => (
            <button
              key={mimeType}
              onClick={() => handleFormatClick(mimeType)}
              className="px-2 py-1 text-xs font-medium bg-gray-100 rounded hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 mt-2 w-full">
          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <Upload className="h-4 w-4" />
            UPLOAD FILES
          </Button>

          <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50" onClick={clearQueue}>
            <X className="h-4 w-4" />
            CLEAR QUEUE
          </Button>
        </div>
      </div>

      {files.length === 0 && (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} id="file-input" ref={fileInputRef} />
          <p className="text-gray-500">Drop Your Files Here</p>
        </div>
      )}

      {files.length > 0 && (
        <div className="space-y-4">
          {files.map((file) => (
            <div key={file.id} className="border rounded-lg p-4 flex items-center gap-4">
              <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={file.preview || "/placeholder.svg"}
                  alt={file.file.name}
                  className="h-full w-full object-cover"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview)
                  }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{file.file.name}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                  <span>Original: {formatFileSize(file.originalSize)}</span>
                  {file.compressedSize && (
                    <>
                      <span>Compressed: {formatFileSize(file.compressedSize)}</span>
                      <span className="text-green-600">
                        Saved {calculateSavings(file.originalSize, file.compressedSize)}%
                      </span>
                    </>
                  )}
                </div>

                {file.status === "compressing" && <Progress value={50} className="h-1 mt-2" />}
              </div>

              <div className="flex items-center gap-2">
                {file.status === "done" && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-green-600 hover:text-green-700 hover:bg-green-50"
                    onClick={() => downloadFile(file)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                )}

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => removeFile(file.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {files.some((file) => file.status === "done") && (
            <div className="flex justify-center mt-6">
              <Button variant="outline" className="border-gray-300" onClick={downloadAll}>
                <Download className="h-4 w-4" />
                DOWNLOAD ALL
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
