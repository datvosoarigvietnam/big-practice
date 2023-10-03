import React from 'react'
import { IMenu, SideBarList, SideBarListMB } from './constant'
import { useMobile } from '@/hooks'
import Link from 'next/link'
export default function SideBar() {
  const isMobile = useMobile()
  return (
    <div className="w-[80px] sm:w-[180px] bg-[#F88F14] h-[calc(100vh-70px)]">
      <ul>
        {isMobile
          ? SideBarList.map((item: IMenu) => (
              <li
                key={item.title}
                className="border-b-2 border-white text-center"
              >
                <Link href={'/todos'}>
                  <button className="text-white text-lg py-3 w-full hover:bg-slate-600">
                    {item.title}
                  </button>
                </Link>
              </li>
            ))
          : SideBarListMB.map((item: IMenu) => (
              <li
                key={item.title}
                className="border-b-2 border-white text-center "
              >
                <Link href={item.href}>
                  <button className="text-white text-lg py-3 w-full hover:bg-slate-600">
                    {item.title}
                  </button>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  )
}
