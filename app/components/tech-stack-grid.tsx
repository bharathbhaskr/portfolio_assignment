"use client"

import { Card } from "@/components/ui/card"
import TechItem from "./tech-item"

const technologies = [
  {
    category: "Languages",
    skills: ["Java", "Golang", "Python", "SQL", "JavaScript", "TypeScript", "Bash"],
  },
  {
    category: "Frameworks",
    skills: ["Spring Boot", "Flask", "React", "Node.js", "Angular", "OAuth"],
  },
  {
    category: "DevOps",
    skills: ["CI/CD", "Docker", "Kubernetes", "Jenkins", "Terraform", "AWS", "Azure", "GCP"],
  },
  {
    category: "Tools",
    skills: ["Git", "MongoDB", "Kafka", "Postman", "REST APIs", "Swagger", "Linux", "PowerBI"],
  },
]

export default function TechStackGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech, index) => (
        <div key={tech.category} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
          <Card className="p-6 bg-secondary/50 border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-white">{tech.category}</h3>
            <div className="flex flex-wrap gap-2">
              {tech.skills.map((skill, skillIndex) => (
                <TechItem key={skill} name={skill} index={skillIndex} />
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
