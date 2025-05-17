import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Le portfolio de [Ton Nom]",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-1  py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
