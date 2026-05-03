import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeSync — Find Fair Meeting Times Across Timezones',
  description: 'Calculates the least painful meeting times for distributed remote teams. Minimize inconvenient hours for everyone on your team.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b67a131e-7b5f-4d37-93e8-ba4641653edf"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
