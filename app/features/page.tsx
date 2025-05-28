"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

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