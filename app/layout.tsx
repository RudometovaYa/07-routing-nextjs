import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Your note-taking app',
};

export default function RootLayout({
  children,
  modalNotes,
}: Readonly<{
  children: React.ReactNode;
  modalNotes: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <div className="layout">
            <Header />
            <main className="main">
              {children} {modalNotes}
            </main>
            <Footer />
          </div>
        </TanStackProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
