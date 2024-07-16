import NextLink from 'next/link';
import { button } from '../style-combos/button-styles';
import { classnames } from '@/utils/classnames';

export interface ButtonProps {
  children: React.ReactNode;
  clear?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href: string;
}

export const Link = ({ children, clear, size = 'small', className, href }: ButtonProps) => {
  return (
    <NextLink
      href={href || ''}
      className={classnames(['fh-link', button({ clear, size }), className])}
    >
      {children}
    </NextLink>
  );
};
