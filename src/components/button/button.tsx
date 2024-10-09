import { classnames } from '@/utils/classnames';
import { button } from '../shared-styles/button-styles';

export interface ButtonProps {
  children: React.ReactNode;
  clear?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'submit' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // הוספת onClick
}

export const Button = ({
  children,
  clear,
  size = 'small',
  className,
  type = 'button',
  onClick
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classnames(['fh-button', button({ clear, size }), className])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
