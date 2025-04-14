import DashboardBanner from '@/components/dashboard-components/DashboardBanner'
import SalesOverview from '@/components/dashboard-components/SalesOverview'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <DashboardBanner />
        <SalesOverview />
    </div>
  )
}
