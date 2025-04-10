"use client"

import ProjectCard from "./project-card"

const projects = [
  {
    title: "Cloud Native WebApp",
    description:
      "Developed RESTful APIs with JWT authentication, implemented CI/CD pipelines using GitHub Actions, and reduced deployment time by 50% through optimized Compute Engine images.",
    image: "/placeholder.svg?height=400&width=600&text=Cloud+Native",
    link: "https://github.com/bharathbhaskr",
    tags: ["GCP", "Flask", "Python", "Terraform"],
  },
  {
    title: "EcoGrid Tycoon",
    description:
      "Built React simulation platform for data center deployments, developed a modular backend in Go, created dashboard tracking budget constraints and carbon impact.",
    image: "/placeholder.svg?height=400&width=600&text=EcoGrid+Tycoon",
    link: "https://github.com/bharathbhaskr",
    tags: ["Go", "React", "Leaflet.js", "MongoDB"],
  },
  {
    title: "Distributed Deep Learning for Audio Classification",
    description:
      "Developed a PyTorch model for bird species classification from audio datasets, leveraged Distributed Data Parallel to train across multiple GPUs.",
    image: "/placeholder.svg?height=400&width=600&text=Deep+Learning",
    link: "https://github.com/bharathbhaskr",
    tags: ["PyTorch", "Librosa", "Dask"],
  },
]

export default function ProjectsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
          />
        </div>
      ))}
    </div>
  )
}
