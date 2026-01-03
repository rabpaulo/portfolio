export default function About() {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-6">Sobre Mim</h2>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary leading-relaxed mb-4">
            Sou desenvolvedor fullstack Android, usando kotlin e jetpack compose. 
          </p>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary leading-relaxed">
            Acredito na aprendizagem contínua e sou movido pela combinação de lógica, criatividade e tecnologia, sempre em busca de evolução técnica.
          </p>
        </div>
        
        <div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">Linguagens</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Python, Kotlin, Java, JavaScript, Shell Script (Bash)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">Frameworks/Ferramentas</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Jetpack Compose, Node.js, Docker, Git</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">Banco de dados</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">MySQL, Firebase</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">Outros</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">Linux, Web Scraping, Scrum, SOLID</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}