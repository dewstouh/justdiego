import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/app/components/Navbar"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Diego Rodríguez - Backend Engineer",
    description: "Software developer building scalable platforms and developer tools",
    keywords: "software developer, developer, portfolio, scalable systems, microservices, backend engineer, backend developer, cloud computing, devops, software architecture, API design, system design, software engineering, programming, coding",
    authors: [{ name: "Diego Rodríguez" }],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={inter.className}>
                <Navbar/>
                {children}
            </body>
        </html>
    )
}
