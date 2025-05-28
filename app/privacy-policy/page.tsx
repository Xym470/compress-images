import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | CompressImages.net",
  description: "Learn how CompressImages.net handles your data. We process all images directly in your browser, ensuring complete privacy and security. No images are ever uploaded to our servers."
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="max-w-3xl mx-auto prose prose-sky">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p>
          At CompressImages.net, we respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you about how we look after your personal data when you visit our website 
          and tell you about your privacy rights and how the law protects you.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Process Your Images</h2>
        <p>
          Our image compression service processes all images directly in your browser. 
          Your images are never uploaded to our servers, ensuring complete privacy and security of your content.
          The compression process happens entirely on your device using client-side technologies.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>
          We collect minimal information required to provide our service:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Usage data (e.g., how you interact with our website)</li>
          <li>Technical data (e.g., browser type, device type)</li>
          <li>We use cookies to enhance your experience on our website</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and improve our services</li>
          <li>Monitor and analyze usage patterns</li>
          <li>Detect and prevent technical issues</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions about this privacy policy or our privacy practices, please contact us at:
          <a href="mailto:easycompress5@gmail.com" className="text-sky-600 ml-1">
            easycompress5@gmail.com
          </a>
        </p>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-sky-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 