export const parseTechnologies = (technologies: string): string[] => {
  return technologies.split(',').map(tech => tech.trim())
}