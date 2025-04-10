"use client"

import { Badge } from "@/components/ui/badge"
import { BookOpen, Briefcase, GraduationCap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="container px-4 md:px-6 py-20">
      <h2 className="section-heading">
        <span className="highlight">01.</span> About
      </h2>
      <div className="space-y-6">
        <div className="space-y-6 text-gray-300 max-w-3xl">
          <p>
            Hello! I'm Bharath, a software development engineer and cloud architect with a passion for building
            scalable, efficient systems. I specialize in cloud-native applications, microservices architecture, and
            DevOps practices.
          </p>

          <div className="space-y-6 mt-8">
            <div className="flex items-start">
              <Briefcase className="h-5 w-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold">Professional Experience</h3>
                <p className="mt-1">
                  Currently working as a Software Development Engineer at Mphasis, where I design and implement
                  cloud-native solutions, optimize infrastructure costs, and lead DevOps initiatives.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <GraduationCap className="h-5 w-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold">Education</h3>
                <p className="mt-1">
                  Master of Science in Information Systems from Northeastern University (Expected Apr 2025)
                </p>
                <p className="mt-1">
                  Bachelor of Technology in Electronics and Communications from PES University (Aug 2021)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <BookOpen className="h-5 w-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold">Certifications</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-teal-400 text-teal-400">
                    AWS Certified Solutions Architect – Associate
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6">Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
            {["Java", "Spring Boot", "AWS", "Docker", "Kubernetes", "Terraform", "Microservices", "CI/CD"].map(
              (tech) => (
                <li key={tech} className="flex items-center">
                  <span className="text-teal-400 mr-2">▹</span> {tech}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
