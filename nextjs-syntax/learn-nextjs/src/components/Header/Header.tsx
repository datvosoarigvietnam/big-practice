import React, { useState } from 'react'
import ButtonHeader from './ButtonHeader'
import SearchHeader from './SearchHeader'
import { useMobile } from '@/hooks/useMobile'
import { plusIcon } from '../common'
import Link from 'next/link'

export const Header = () => {
  const isMobile = useMobile()
  return (
    <div className="bg-[#675BF1]">
      <div className="container mx-auto">
        <div className="w-full h-[70px]  flex justify-around sm:justify-between items-center gap-3">
          <Link href="/addtodo">
            <ButtonHeader
              title={isMobile ? plusIcon : 'Create New Task'}
              className={
                isMobile
                  ? 'w-[40px] h-[40px] border-white border rounded-[50%] flex justify-center items-center'
                  : ''
              }
              isMobile={isMobile}
            /></Link>
          <SearchHeader />
        </div>
      </div>
    </div>
  )
}
