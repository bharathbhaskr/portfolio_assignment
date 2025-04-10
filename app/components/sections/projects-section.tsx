"use client"

import ProjectsGrid from "../projects-grid"

export default function ProjectsSection() {
  return (
    <section id="projects" className="container px-4 md:px-6 py-20">
      <h2 className="section-heading">
        <span className="highlight">02.</span> Projects
      </h2>
      <ProjectsGrid />
    </section>
  )
}
