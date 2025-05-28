import { FileUploader } from "@/components/file-uploader"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compress Images Online | Reduce File Size Without Quality Loss | CompressImages.net",
  description: "Compress your images online for free. Reduce file size by up to 80% while maintaining quality. Fast, secure browser-based tool supports JPEG, PNG, GIF, WebP and SVG formats. No registration needed."
}

export default function CompressPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Compress Images</h1>
        <p className="text-gray-600 mb-8">
          Upload your images and compress them to reduce file size while maintaining quality. Our tool processes
          everything in your browser, ensuring your files remain private and secure.
        </p>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <FileUploader />
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">How to compress images</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Click the "Upload Files" button or drag and drop your images into the upload area.</li>
            <li>Wait for the compression process to complete.</li>
            <li>Download your compressed images individually or all at once.</li>
            <li>Enjoy your optimized images with smaller file sizes!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
