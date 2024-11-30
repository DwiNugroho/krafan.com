import { PropsWithChildren, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal: React.FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted ? createPortal(children, document.body) : null
}
