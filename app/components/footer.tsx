import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
        <div className="flex space-x-4">
          <Link
            href="https://github.com/bharathbhaskr"
            target="_blank"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/bharathbhaskar99"
            target="_blank"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:bharathbr12@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Bharath.dev. All rights reserved.</p>
        <p className="text-xs text-gray-500">Built with React, Next.js, and Tailwind CSS</p>
      </div>
    </footer>
  )
}
