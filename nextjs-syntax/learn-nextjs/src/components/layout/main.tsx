import React from 'react'
import { ILayoutProps } from '../../../models/common'
import Link from 'next/link'
import Header from '../Header'
import SideBar from '../SideBar'

export function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      <div className="flex ">
        <SideBar />
        {children}
      </div>
    </div>
  )
}
