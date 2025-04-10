import { Card } from "@/components/ui/card"

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

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card
          key={tech.category}
          className="p-6 bg-secondary/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-4 text-white">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-background px-2 py-1 text-sm font-medium text-cyan-400 ring-1 ring-inset ring-cyan-400/20 hover:bg-cyan-400/10 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
