"use client"

interface TechItemProps {
  name: string
  index: number
}

export default function TechItem({ name, index }: TechItemProps) {
  return (
    <span
      style={{ animationDelay: `${index * 50}ms` }}
      className="inline-flex items-center rounded-md bg-background px-2 py-1 text-sm font-medium text-teal-400 ring-1 ring-inset ring-teal-400/20 hover:bg-teal-400/10 transition-colors duration-200 tech-item animate-fade-in"
    >
      {name}
    </span>
  )
}
