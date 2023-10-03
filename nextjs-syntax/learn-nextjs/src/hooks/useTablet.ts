import { useState, useEffect } from 'react'

export const useTablet = () => {
  const [istablet, setTablet] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTablet(window.innerWidth > 640 && window.innerWidth < 1024)

      const handleResize = () => {
        setTablet(window.innerWidth > 640 && window.innerWidth < 1024)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return istablet
}
