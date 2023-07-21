'use client'
// import './globals.css'
import '../styles/index.sass'
import Sidebar from '@/components/sidebar/sidebar'

export default function RootLayout({ children }) {
    return  <html lang="en">
                <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Manrope:wght@400;500;600&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
                </head>
                <body>
                    <div className="page-layout">
                        <Sidebar/>
                        <main>
                            {children}
                        </main>
                    </div>
                </body>
            </html>
}
