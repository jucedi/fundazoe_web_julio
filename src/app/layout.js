import { Montserrat, Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header'; 
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' });

export const metadata = { title: 'Fundazoe', description: 'Transformando vidas.' };

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${nunito.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        <Header />
        <main style={{ paddingTop: '80px', minHeight: '80vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}