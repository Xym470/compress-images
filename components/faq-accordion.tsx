"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left">How does image compression work?</AccordionTrigger>
        <AccordionContent>
          Image compression works by reducing the file size of an image while trying to maintain its visual quality.
          There are two main types of compression: lossless (which preserves all data) and lossy (which removes some
          data to achieve smaller file sizes). Our tool uses advanced algorithms to analyze images and remove
          unnecessary data while preserving visual quality as much as possible.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left">Is there a limit to how many images I can compress?</AccordionTrigger>
        <AccordionContent>
          No, there are no limits. You can compress as many images as you want, completely free. We don't require
          registration or subscription for any of our services.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left">Are my images uploaded to your servers?</AccordionTrigger>
        <AccordionContent>
          No, all processing happens directly in your browser. Your images are never uploaded to our servers, ensuring
          complete privacy and security of your data. This also means the compression speed depends on your device's
          processing power.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left">What image formats are supported?</AccordionTrigger>
        <AccordionContent>
          We support all popular image formats including JPEG, PNG, GIF, WebP, and SVG. 
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-left">How do I choose the right compression level?</AccordionTrigger>
        <AccordionContent>
          The ideal compression level depends on your specific needs. Higher compression levels result in smaller file
          sizes but may reduce image quality. Lower compression preserves more quality but results in larger files. Our
          default settings provide a good balance, but you can adjust the quality slider to find the perfect balance for
          your specific use case.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
