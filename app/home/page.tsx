"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | CompressImages.net",
  description: "CompressImages.net home page. Compress JPEG, PNG, WebP, SVG and GIF images online for free. Reduce file size while maintaining quality. No registration required."
}

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  }, [router])

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 text-center">
      <p>Redirecting to home page...</p>
    </div>
  )
} 