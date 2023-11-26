'use client'

import SideBar from '@/components/mainLaout/Sidebar'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'




export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {


  const { isLoaded, isSignedIn, user } = useUser()
  const router = useRouter()

  if (isLoaded && !isSignedIn) {
    router.push('/sign-in?redirectUrl=/dashboard')
  }

  return (
    <Grid container>
      <Grid item sx={{ width: '240px' }}>
        <SideBar />
      </Grid>
      <Grid item sx={{ width: 'calc(98vw - 240px)' }}>
        <div className="h-[calc(100vh-72px)] overflow-y-scroll custom-scrollbar p-5 bg-gray-100">
          <Paper sx={{ minHeight: '100%' }}>
            {children}
          </Paper>
        </div>
      </Grid>
    </Grid>
  )
}

