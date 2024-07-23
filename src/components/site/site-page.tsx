import { classnames } from '@/utils/classnames';
import { ReactNode } from 'react';

const page = classnames(['w-[100%] p-[20px]']);

export interface SitePageProps {
  children: ReactNode;
}

export const SitePage = ({ children }: SitePageProps) => {
  return <div className={page}>{children}</div>;
};
