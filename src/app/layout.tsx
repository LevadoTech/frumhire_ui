import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { classnames } from '@/utils/classnames';

const opensans = Open_Sans({ subsets: ['latin'] });

const body = classnames(['bg-background-secondary', 'text-primary']);

export const metadata: Metadata = {
  title: 'FRUM-HIRE'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = `fixed ${false && 'absolute'} relative top-0 z-[3] flex h-[80px]  items-center justify-between w-full bg-background-primary p-0 p-[10px_20px] text-[3rem] font-[700] text-primary shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-200`;
  return (
    <html lang="he" dir="rtl">
      <body className={classnames([body, opensans.className])}>
        <header className={header}>FRUM-HIRE</header>
        {children}
      </body>
    </html>
  );
}
