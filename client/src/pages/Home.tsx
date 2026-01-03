import { useRef } from 'react'
import AnimatedBackground from '../components/AnimatedBackground'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark-bg pt-16 overflow-hidden"
    >
      <AnimatedBackground particleCount={60} connectionDistance={180} speed={0.3} />
      
      <div className="relative z-10 text-center max-w-2xl px-4 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-dark-text mb-4">
          Olá, eu sou Paulo.
        </h1>
        <p className="text-xl text-gray-600 dark:text-dark-text-secondary mb-8 leading-relaxed">
          Desenvolvedor fullstack Android.
        </p>
      </div>
    </div>
  )
}