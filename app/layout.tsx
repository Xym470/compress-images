import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ImageCompress-Compress Images Online Without Losing Quality",
  description:
    "Free online image compression tool. Reduce file size while maintaining quality for JPEG, PNG, and WebP images. No registration required.",
  generator: 'v0.dev',
  metadataBase: new URL('https://compressimages.net'),
  alternates: {
    canonical: '/',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
