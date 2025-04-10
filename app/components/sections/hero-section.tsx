"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="container px-4 md:px-6 py-20 md:py-32 flex flex-col justify-center min-h-[calc(100vh-3.5rem)]">
      <div className="space-y-6 animate-fade-in">
        <p className="text-teal-400 font-mono">Hi, my name is</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
          Bharath Bhaskar.
        </h1>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-gray-400">
          Software Development Engineer & Cloud Architect
        </h2>
        <p className="max-w-[600px] text-gray-400 text-lg">
          Building scalable cloud solutions and microservices architecture. AWS Certified Solutions Architect
          specializing in containerization technologies.
        </p>
        <div className="flex space-x-4 pt-4">
          <Link href="https://github.com/bharathbhaskr" target="_blank">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 hover:border-teal-400 hover:text-teal-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/bharathbhaskar99" target="_blank">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 hover:border-teal-400 hover:text-teal-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:bharathbr12@gmail.com">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 hover:border-teal-400 hover:text-teal-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
