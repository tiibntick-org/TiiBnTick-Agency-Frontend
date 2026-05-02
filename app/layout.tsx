import type { Metadata } from 'next'
import './globals.css'
import LayoutController from '@/components/LayoutController'

export const metadata: Metadata = {
  title: 'TiiBnTick Agency',
  description: 'Plateforme de gestion pour agences de livraison TiiBnTick',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LayoutController>
          {children}
        </LayoutController>
      </body>
    </html>
  )
}
