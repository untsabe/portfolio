import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation" // Your navigation component
import "./globals.css"

export const metadata: Metadata = {
  title: "Umenelisi - Full Stack Developer",
  description: "Portfolio of Umenelisi, a full-stack developer specializing in building exceptional digital experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="relative flex min-h-screen">
          {/* Navigation component handles both desktop and mobile */}
          <Navigation />
          
          {/* Main content with responsive padding */}
          <main className="flex-1 lg:ml-20">
            <Suspense fallback={
              <div className="flex h-screen items-center justify-center">
                <div className="text-lg">Loading...</div>
              </div>
            }>
              {children}
            </Suspense>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
