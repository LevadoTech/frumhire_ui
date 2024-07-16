import { classnames } from '@/utils/classnames';
import { button } from '../style-combos/button-styles';

export interface ButtonProps {
  children: React.ReactNode;
  clear?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Button = ({ children, clear, size = 'small', className }: ButtonProps) => {
  return (
    <button className={classnames(['fh-button', button({ clear, size }), className])}>
      {children}
    </button>
  );
};
