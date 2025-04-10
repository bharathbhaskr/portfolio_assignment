"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur border-b border-gray-800" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link className="text-xl font-bold text-white" href="/">
            <span className="text-teal-400">B</span>harath.dev
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} />
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
                Resume
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button className="ml-2 text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <NavLinks scrollToSection={scrollToSection} />
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
                Resume
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLinks({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
  const links = [
    { href: "about", label: "About", number: "01" },
    { href: "projects", label: "Projects", number: "02" },
    { href: "tech-stack", label: "Tech Stack", number: "03" },
    { href: "contact", label: "Contact", number: "04" },
  ]

  return (
    <>
      {links.map((link) => (
        <button key={link.href} onClick={() => scrollToSection(link.href)} className="nav-link font-mono text-gray-300">
          <span className="text-teal-400">{link.number}.</span> {link.label}
        </button>
      ))}
    </>
  )
}
