import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import '@styles/globals.css';

export const metadata = {
    title: "todolist",
    description: "make your life better"
}

export default function RootLayout({children}) {

  return (
    <html lang="en">
        <body className='dark'>
            <main className='flex flex-col p-4 items-center min-h-[100vh]' >
                <NavBar />
                {children}
                <Footer />
            </main>
        </body>
    </html>
  )
}