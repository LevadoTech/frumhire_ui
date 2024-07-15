import { classnames } from '@/utils/classnames';

const button = (props: { clear?: boolean; size?: 'small' | 'medium' | 'large' }) =>
  classnames([
    'flex items-center justify-center rounded-[4px] border-[1px] border-solid border-primary text-center no-underline',
    props.size === 'small' && 'h-[40px] p-[0px_18px] text-[1.4rem] font-[400]',
    props.size === 'medium' && 'h-[60px] p-[0px_36px] text-[1.5rem] font-[500]',
    props.size === 'large' && 'h-[80px] p-[0px_42px] text-[1.7rem] font-[600]',
    !props.clear && 'bg-primary text-white hover:bg-primaryHover',
    props.clear && 'bg-white text-primary hover:bg-whiteHover',
    'transition-all duration-300 ease-in-out',

    'focus-visible:shadow-focus'
  ]);

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
