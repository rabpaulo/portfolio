import { useState } from 'react'

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

  const show = () => {
    if (timeoutId) clearTimeout(timeoutId)
    setIsOpen(true)
  }

  const hide = (delay: number = 0) => {
    const id = setTimeout(() => setIsOpen(false), delay)
    setTimeoutId(id)
  }

  const toggle = () => setIsOpen(!isOpen)

  return { isOpen, show, hide, toggle }
}