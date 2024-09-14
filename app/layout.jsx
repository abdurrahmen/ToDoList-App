import Footer from '@components/Footer';
import NavBar from '@components/NavBar';
import '@styles/globals.css';
import Link from 'next/link';

export const metadata = {
    title: "Intajivity",
    description: "make your life better"
}

export default function RootLayout({children}) {

  return (
    <html lang="en">
      <head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    </head>
      <body className='dark'>
          <main className='flex flex-col items-center min-h-[100vh]' >
              <NavBar />
              {children}
              <Footer />
          </main>
      </body>
    </html>
  )
}