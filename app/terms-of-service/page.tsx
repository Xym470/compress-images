import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | CompressImages.net",
  description: "Read the Terms of Service for CompressImages.net. Learn about the rules and regulations for using our free online image compression tool, intellectual property rights, and limitations of liability."
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
      
      <div className="max-w-3xl mx-auto prose prose-sky">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
        <p>
          Welcome to CompressImages.net. These terms and conditions outline the rules and regulations for the use of our website.
          By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use 
          CompressImages.net if you do not accept all of the terms and conditions stated on this page.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">License to Use Website</h2>
        <p>
          Unless otherwise stated, CompressImages.net and/or its licensors own the intellectual property rights for all material on 
          CompressImages.net. All intellectual property rights are reserved. You may view and/or print pages from our website for 
          your own personal use subject to restrictions set in these terms and conditions.
        </p>
        
        <p>You must not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Republish material from this website</li>
          <li>Sell, rent, or sub-license material from this website</li>
          <li>Reproduce, duplicate, or copy material from this website</li>
          <li>Redistribute content from CompressImages.net (unless content is specifically made for redistribution)</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Service Description</h2>
        <p>
          CompressImages.net provides an online tool for compressing images. All compression is performed client-side, directly 
          in your browser. Your images are not uploaded to our servers, and we do not store any copies of your images.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitations</h2>
        <p>
          In no event shall CompressImages.net be liable for any damages (including, without limitation, damages for loss of data or profit, 
          or due to business interruption) arising out of the use or inability to use the materials on our website, even if 
          CompressImages.net or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Accuracy of Materials</h2>
        <p>
          The materials appearing on our website could include technical, typographical, or photographic errors. 
          CompressImages.net does not warrant that any of the materials on its website are accurate, complete, or current.
          CompressImages.net may make changes to the materials contained on its website at any time without notice.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Links</h2>
        <p>
          CompressImages.net has not reviewed all of the sites linked to its website and is not responsible for the contents of 
          any such linked site. The inclusion of any link does not imply endorsement by CompressImages.net of the site. 
          Use of any such linked website is at the user's own risk.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Modifications</h2>
        <p>
          CompressImages.net may revise these terms of service for its website at any time without notice. By using this website, 
          you are agreeing to be bound by the then current version of these terms of service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws and you 
          irrevocably submit to the exclusive jurisdiction of the courts in that location.
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