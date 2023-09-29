import { useMobile } from '@/hooks'
import React, { ReactElement, useState } from 'react'

interface IProps {
  title: string | ReactElement
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
  className?: string
  isMobile: boolean
}

export default function ButtonHeader(props: IProps) {
  const { title, className, onClick } = props
  const isMobile = useMobile()
  return (
    <>
      <button
        className={` border-solid border border-white px-2 text-white ${className} ${
          isMobile
            ? 'w-[40px] h-[40px] border-white border rounded-[50%] flex justify-center items-center'
            : 'min-w-[80px] h-[50px] rounded-r-[8px]'
        }`}
      >
        {title}
      </button>
    </>
  )
}
