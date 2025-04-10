"use client"

import TechStackGrid from "../tech-stack-grid"

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="container px-4 md:px-6 py-20">
      <h2 className="section-heading">
        <span className="highlight">03.</span> Tech Stack
      </h2>
      <TechStackGrid />
    </section>
  )
}
