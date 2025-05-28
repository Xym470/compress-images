"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

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