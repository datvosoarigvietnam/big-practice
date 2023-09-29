import React, { useState } from 'react'
import ButtonHeader from './ButtonHeader'
import SearchHeader from './SearchHeader'
import { useMobile } from '@/hooks/useMobile'

export const Header = () => {
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 640)

  // // Update isMobile state on resize
  // window.addEventListener('resize', () => {
  //   setIsMobile(window.innerWidth < 640)
  // })
  const isMobile = useMobile()

  return (
    <div className="bg-[#675BF1]">
      <div className="container mx-auto">
        <div className="w-full h-[70px]  flex justify-around sm:justify-between items-center">
          <ButtonHeader
            title={
              isMobile ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              ) : (
                'Add'
              )
            }
            className={
              isMobile
                ? 'w-[40px] h-[40px] border-white border rounded-[50%] flex justify-center items-center'
                : ''
            }
            isMobile={isMobile}
          />
          <SearchHeader />
        </div>
      </div>
    </div>
  )
}
