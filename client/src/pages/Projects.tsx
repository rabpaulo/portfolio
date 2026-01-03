import { useEffect, useState } from "react"
import { projectsData } from "../data/projectsData"
import type { Project } from "../data/projectsData"
import { parseTechnologies } from "../utils/parseTechnologies"

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectsData)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Projetos
          </h1>
          <div className="h-px w-20 bg-gray-900 dark:bg-gray-100"></div>
        </div>

        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 dark:border-gray-700 border-t-gray-900 dark:border-t-gray-100"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">
          Projetos
        </h1>
        <div className="h-px w-20 bg-gray-900 dark:bg-gray-100"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            className="group flex flex-col border border-gray-200 dark:border-dark-border hover:border-gray-900 dark:hover:border-gray-100 transition-colors duration-300"
          >
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-3">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline inline-flex items-center gap-2"
                >
                  {project.name}
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </h2>

              <p className="text-gray-600 dark:text-dark-text-secondary mb-4 leading-relaxed text-sm flex-1">
                {project.description}
              </p>

              {project.technologies && (
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-4 border-t border-gray-100 dark:border-dark-border">
                  {parseTechnologies(project.technologies).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
