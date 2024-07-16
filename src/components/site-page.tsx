import { ReactNode } from 'react';

const page = `
p-[20px]

`;

export interface SitePageProps {
  children: ReactNode;
}

export const SitePage = ({ children }: SitePageProps) => {
  return <div className={page}>{children}</div>;
};
