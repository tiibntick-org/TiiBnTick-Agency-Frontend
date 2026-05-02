'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import PageTransition from './PageTransition'

const NO_LAYOUT_ROUTES = ['/login', '/register']

export default function LayoutController({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuth = NO_LAYOUT_ROUTES.some(r => pathname === r || pathname.startsWith(r + '/'))

  return (
    <ThemeProvider>
      {isAuth ? (
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-auto">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </div>
        </div>
      )}
    </ThemeProvider>
  )
}
