import HomeNavbar from '@/components/dashboard-components/HomeNavbar'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
        <HomeNavbar />
        {children}
    </div>
  )
}
