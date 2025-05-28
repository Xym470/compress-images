import Image from "next/image"
import Link from "next/link"
import { FileUploader } from "@/components/file-uploader"
import { FeatureCard } from "@/components/feature-card"
import { FaqAccordion } from "@/components/faq-accordion"
import { CloudIcon, LockIcon, ClockIcon, EditIcon, MonitorIcon, MousePointerIcon, ImageIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-center py-4 mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="ImageCompress Logo" width={24} height={24} className="h-6 w-6" />
            <span className="text-lg font-semibold text-sky-700">ImageCompress</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <Link href="https://compressimages.net/home" className="text-sm font-medium">
              Home
            </Link>
            <Link href="https://compressimages.net/compress" className="text-sm font-medium">
              Compress
            </Link>
            <Link href="https://compressimages.net/features" className="text-sm font-medium">
              Features
            </Link>
            <Link href="https://compressimages.net/faq" className="text-sm font-medium">
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="bg-sky-200 py-16 text-center">
          <div className="container px-4 md:px-6 mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 pt-8">Compress images</h1>
            <p className="text-white uppercase tracking-wider text-sm">COMPRESS IMAGES WITHOUT LOSING QUALITY</p>
          </div>
        </section>

        {/* File Upload Section */}
        <section id="compress" className="py-8">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="bg-white rounded-lg shadow-sm border p-6 max-w-3xl mx-auto">
              <FileUploader />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Why Use ImageCompress?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<CloudIcon className="h-6 w-6 text-sky-600" />}
                title="Free & Unlimited"
                description="Compress as many images as you want without any limitations. No registration or subscription required."
              />

              <FeatureCard
                icon={<LockIcon className="h-6 w-6 text-sky-600" />}
                title="Secure & Private"
                description="Your images are processed in your browser. We never upload your files to any server, keeping your data completely private."
              />

              <FeatureCard
                icon={<ClockIcon className="h-6 w-6 text-sky-600" />}
                title="Fast Processing"
                description="Our advanced compression algorithms work quickly to reduce your image size without unnecessary delay."
              />

              <FeatureCard
                icon={<EditIcon className="h-6 w-6 text-sky-600" />}
                title="Quality Control"
                description="Adjust compression settings to find the perfect balance between file size and image quality for your needs."
              />

              <FeatureCard
                icon={<MonitorIcon className="h-6 w-6 text-sky-600" />}
                title="Multiple Formats"
                description="Support for all popular image formats including JPEG, PNG, WebP, and more. Convert between formats as needed."
              />

              <FeatureCard
                icon={<MousePointerIcon className="h-6 w-6 text-sky-600" />}
                title="Easy to Use"
                description="Simple, intuitive interface that makes image compression accessible to everyone, regardless of technical expertise."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-semibold mb-4 text-gray-800">ImageCompress</h3>
              <p className="text-sm text-gray-600">
                Free online tool to compress and optimize your images while maintaining quality.
              </p>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://compressimages.net/home" className="text-gray-600 hover:text-sky-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="https://compressimages.net/compress" className="text-gray-600 hover:text-sky-600">
                    Compress Images
                  </Link>
                </li>
                <li>
                  <Link href="https://compressimages.net/features" className="text-gray-600 hover:text-sky-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="https://compressimages.net/faq" className="text-gray-600 hover:text-sky-600">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-4 text-gray-800">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://compressimages.net/privacy-policy" className="text-gray-600 hover:text-sky-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://compressimages.net/terms-of-service" className="text-gray-600 hover:text-sky-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
            © {new Date().getFullYear()} ImageCompress. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
