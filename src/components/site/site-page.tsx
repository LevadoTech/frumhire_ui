import { classnames } from '@/utils/classnames';
import { ReactNode } from 'react';

const page = classnames(['flex w-[100%] justify-center p-[20px]']);

export interface SitePageProps {
  children: ReactNode;
}

export const SitePage = ({ children }: SitePageProps) => {
  return <div className={page}>{children}</div>;
};
