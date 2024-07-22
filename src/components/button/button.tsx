import { classnames } from '@/utils/classnames';
import { button } from '../shared-styles/button-styles';

export interface ButtonProps {
  children: React.ReactNode;
  clear?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'submit' | 'button';
}

export const Button = ({
  children,
  clear,
  size = 'small',
  className,
  type = 'button'
}: ButtonProps) => {
  return (
    <button type={type} className={classnames(['fh-button', button({ clear, size }), className])}>
      {children}
    </button>
  );
};
