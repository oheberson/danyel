import './globals.css'

export const metadata = {
  title: 'N.O.T.A. - Unlock Your Guitar Skills',
  description: 'Discover the N.O.T.A. method to unlock your acoustic guitar skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

