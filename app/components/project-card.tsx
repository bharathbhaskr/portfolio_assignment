import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-secondary/50 border border-gray-800 hover:border-teal-400/50 transition-all duration-300 group h-full flex flex-col project-card-hover">
      <div className="relative aspect-video">
        <img
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="font-semibold text-xl mb-2 text-white group-hover:text-teal-400 transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-background px-2 py-1 text-xs font-medium text-teal-400 ring-1 ring-inset ring-teal-400/20 hover:bg-teal-400/10 transition-colors duration-200 tech-item"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
