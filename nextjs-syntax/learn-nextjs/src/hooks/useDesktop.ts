import { useState, useEffect } from 'react'

export const useDesktop = () => {
  const [isDesktop, setDesktop] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDesktop(window.innerWidth > 1024 && window.innerWidth < 1280)

      const handleResize = () => {
        setDesktop(window.innerWidth > 1024 && window.innerWidth < 1280)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return isDesktop
}
