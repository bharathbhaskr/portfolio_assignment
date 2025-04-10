"use client"

import ContactForm from "../contact-form"
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section id="contact" className="container px-4 md:px-6 py-20">
      <h2 className="section-heading justify-center">
        <span className="highlight">04.</span> Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <p className="text-gray-300">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my
            best to get back to you!
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center text-gray-300">
              <Mail className="h-5 w-5 text-teal-400 mr-3" />
              <a href="mailto:bharathbr12@gmail.com" className="hover:text-teal-400 transition-colors">
                bharathbr12@gmail.com
              </a>
            </div>

            <div className="flex items-center text-gray-300">
              <Phone className="h-5 w-5 text-teal-400 mr-3" />
              <a href="tel:+18577069370" className="hover:text-teal-400 transition-colors">
                +1 (857) 706-9370
              </a>
            </div>

            <div className="flex items-center text-gray-300">
              <MapPin className="h-5 w-5 text-teal-400 mr-3" />
              <span>Boston, MA</span>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <Link
              href="https://github.com/bharathbhaskr"
              target="_blank"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/bharathbhaskar99"
              target="_blank"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
