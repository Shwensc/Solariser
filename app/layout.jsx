import "./globals.css"
import { AreaProvider } from "@/components/AreaContext";

export const metadata = {
  title: "Solar Dashboard",
  description: "Solar manufacturing dashboard",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050a1f]">
        <AreaProvider>{children}</AreaProvider>
      </body>
    </html>
  )
}



import './globals.css'