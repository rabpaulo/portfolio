import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Mensagem de ${name}`
    const body = `Nome: ${name}\nEmail: ${email}\n\n${message}`
    const mailtoLink = `mailto:seu.email@exemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-4">Entre em Contato</h2>
      </div>
      
      <div className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-dark-border p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-dark-text mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-dark-text mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors"
              placeholder="seu.email@exemplo.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-dark-text mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors resize-none"
              placeholder="Sua mensagem aqui..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium py-3 px-6 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  )
}
