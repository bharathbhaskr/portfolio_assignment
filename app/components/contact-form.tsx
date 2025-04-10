"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setPending(true)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 bg-secondary/50 border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
      <form id="contact-form" action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="bg-background border-gray-700 focus:border-teal-400 focus:ring-teal-400/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-background border-gray-700 focus:border-teal-400 focus:ring-teal-400/20"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            required
            className="bg-background border-gray-700 focus:border-teal-400 focus:ring-teal-400/20"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="bg-background border-gray-700 focus:border-teal-400 focus:ring-teal-400/20"
            rows={5}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-teal-400 text-background hover:bg-teal-500 transition-colors"
          disabled={pending}
        >
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-gray-400 animate-fade-in">{message}</p>}
      </form>
    </Card>
  )
}
