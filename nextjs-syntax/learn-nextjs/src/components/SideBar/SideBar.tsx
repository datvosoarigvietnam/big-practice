import React from 'react'
import { SideBarListMB } from './constant'
import { useMobile } from '@/hooks'
import Link from 'next/link'
export default function SideBar() {
  const isMobile = useMobile()
  return (
    <div className="w-[80px] sm:w-[180px] bg-[#F88F14] h-[calc(100vh-70px)]">
      <ul>
        {isMobile
          ? SideBarListMB.map((item: any) => (
              <li key={item} className="border-b-2 border-white text-center">
                <Link href={'/product'}>
                  <button className="text-white text-lg py-3 w-full hover:bg-slate-600">
                    {item}
                  </button>
                </Link>
              </li>
            ))
          : SideBarListMB.map((item: any) => (
              <li key={item} className="border-b-2 border-white text-center ">
                <button className="text-white text-lg py-3 w-full hover:bg-slate-600">
                  {`${item} Task`}
                </button>
              </li>
            ))}
      </ul>
    </div>
  )
}
