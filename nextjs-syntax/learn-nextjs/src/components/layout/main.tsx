import React from 'react'
import { ILayoutProps } from '../../../models/common'
import Link from 'next/link'
import Header from '../Header'

export function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
