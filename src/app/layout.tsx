import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { classnames } from '@/utils/classnames';

const rubik = Rubik({ subsets: ['latin'] });

const body = classnames(['bg-background-secondary', 'text-primary']);
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
      <body className={classnames([body, rubik.className])}>
        <header className={header}>פרוּם העייר</header>
        <main className={main}>{children}</main>
      </body>
    </html>
  );
}
