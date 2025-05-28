"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | CompressImages.net",
  description: "Find answers to frequently asked questions about using CompressImages.net. Learn how our image compression works, supported formats, privacy features, and tips for choosing optimal compression settings."
}

export default function FaqPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/#faq")
  }, [router])

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 text-center">
      <p>Redirecting to FAQ section...</p>
    </div>
  )
} 