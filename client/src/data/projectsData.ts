export interface Project {
  id: number
  name: string
  description: string
  html_url: string
  technologies?: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "COMAG Compressores",
    description: "Responsável pelo desenvolvimento da plataforma web da empresa, utilizada para exposição de produtos e gerenciamento interno",
    html_url: "https://github.com/rabpaulo/COMAG",
    technologies: "Node.js, React, MongoDB",
  },
  {
    id: 2,
    name: "Museu Unifor",
    description: "Aplicação Android desenvolvida para promover acessibilidade no Espaço Cultural da Universidade de Fortaleza",
    html_url: "https://github.com/rabpaulo/Museu-Unifor",
    technologies: "Kotlin, Jetpack Compose, Android Studio, Firebase",
  },
  {
    id: 3,
    name: "LiftBook",
    description: "Rastreador de treinos de musculação. Focado em performance e simplicidade",
    html_url: "https://github.com/rabpaulo/LiftBook",
    technologies: "TypeScript, React Native, Expo", 
  },
]