import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Knowledge - Easy Dev Tutorials",
  description:
    "Tutoriais simplificados para desenvolvimento web. Aprenda HTML, CSS, JavaScript, React e Node.js de forma prática e amigável para iniciantes.",
  keywords: "tutoriais, desenvolvimento web, HTML, CSS, JavaScript, React, Node.js, programação, iniciantes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
