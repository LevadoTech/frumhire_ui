import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { classnames } from '@/utils/classnames';
import Link from 'next/link';
import RootProvider from './root-provider';
import Login from './login/page';

const rubik = Rubik({ subsets: ['latin'] });

const body = classnames(['bg-background-secondary', 'block text-primary']);
const header = classnames([
  'p-0 fixed top-0 z-[3] flex h-header w-full items-center justify-between bg-white p-[10px_20px] text-[3.5rem] font-[700] text-primary shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-200'
]);

const main = classnames(['pt-header', 'min-h-screen']);

export const metadata: Metadata = {
  title: 'פרוּם העייר'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={classnames([body, rubik.className])}>
        <RootProvider>
          <header className={header}>
            <div />
            <div className="ml-auto">
              <Login />
            </div>
            <Link href="/">Frum Hire</Link>
          </header>
          <main className={main}>{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
