"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features | CompressImages.net",
  description: "Discover the features of CompressImages.net. Free unlimited compression, browser-based processing for privacy, multiple format support, and easy-to-use interface with no registration required."
}

export default function FeaturesPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/#features")
  }, [router])

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 text-center">
      <p>Redirecting to features section...</p>
    </div>
  )
}