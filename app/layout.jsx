import "./globals.css"

export const metadata = {
  title: "Solar Dashboard",
  description: "Solar manufacturing dashboard",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050a1f]">{children}</body>
    </html>
  )
}



import './globals.css'