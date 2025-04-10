import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"
import type React from "react"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bharath Bhaskar - Software Development Engineer & Cloud Architect",
  description:
    "Portfolio of Bharath Bhaskar, Software Development Engineer & Cloud Architect specializing in cloud solutions and microservices architecture.",
  keywords: [
    "Software Engineer",
    "Cloud Architect",
    "AWS",
    "Java",
    "Spring Boot",
    "Microservices",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Bharath Bhaskar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bharath.dev",
    title: "Bharath Bhaskar - Software Development Engineer & Cloud Architect",
    description: "Portfolio of Bharath Bhaskar, Software Development Engineer & Cloud Architect",
    siteName: "Bharath.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharath Bhaskar - Software Development Engineer & Cloud Architect",
    description: "Portfolio of Bharath Bhaskar, Software Development Engineer & Cloud Architect",
    creator: "@bharathbhaskar",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", firaCode.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'