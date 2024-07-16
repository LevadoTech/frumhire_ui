import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { classnames } from '@/utils/classnames';

const opensans = Open_Sans({ subsets: ['latin'] });

const body = classnames(['bg-background-secondary', 'text-primary']);
const header = classnames([
  'h-header fixed top-0 z-[3] flex w-full items-center justify-between bg-white p-0 p-[10px_20px] text-[3rem] font-[700] text-primary shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all duration-200'
]);

const main = classnames([
  'pt-header',
  'flex',
  'gap-[20px]',
  'items-center',
  'justify-center',
  'min-h-screen'
]);

export const metadata: Metadata = {
  title: 'FRUM-HIRE'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={classnames([body, opensans.className])}>
        <header className={header}>FRUM-HIRE</header>
        <main className={main}>{children}</main>
      </body>
    </html>
  );
}
