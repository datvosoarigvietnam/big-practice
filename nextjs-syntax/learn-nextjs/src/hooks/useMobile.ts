import { useState } from 'react'

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  // Update isMobile state on resize
  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 640)
  })

  return isMobile
}
