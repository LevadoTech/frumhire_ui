import NextLink from 'next/link';
import { button } from '../style-combos/button-styles';
import { classnames } from '@/utils/classnames';

export interface ButtonLinkProps {
  children: React.ReactNode;
  clear?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href: string;
}

export const ButtonLink = ({
  children,
  clear,
  size = 'small',
  className,
  href
}: ButtonLinkProps) => {
  return (
    <NextLink
      href={href || ''}
      className={classnames(['fh-link', button({ clear, size }), className])}
    >
      {children}
    </NextLink>
  );
};
