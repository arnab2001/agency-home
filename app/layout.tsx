import type React from "react"
import type { Metadata } from 'next'
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'ArnabDev - Web Development Agency in Bagnan',
  description: 'Professional web development services in Bagnan. Expert web developers creating modern, SEO-friendly websites for local businesses.',
  keywords: 'Bagnan web development, web development agency Bagnan, website development Bagnan',
  authors: [{ name: 'Arnab Chatterjee' }],
  metadataBase: new URL('https://your-domain.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ArnabDev",
              "description": "Web Development Agency in Bagnan",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bagnan",
                "addressRegion": "West Bengal",
                "addressCountry": "IN"
              },
              "url": "https://your-domain.com",
              "telephone": "8617818763"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
