import { classnames } from '@/utils/classnames';
import { ReactNode } from 'react';

const card = classnames([
  'w-[100%] rounded-[10px] bg-white shadow-[0_0_13px_0_rgba(82,63,105,0.05)]'
]);

const body = classnames(['p-[20px]']);

const titleStyles = classnames(['m-[0_0_12px_0] text-[2.1rem] font-[500] text-primary']);

export interface CardProps {
  children?: ReactNode;
  title?: ReactNode;
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className={classnames(['fh-card', card])}>
      <div className={classnames([body, 'body'])}>
        {title && <h4 className={classnames(['title', titleStyles])}>{title}</h4>}
        {children}
      </div>
    </div>
  );
};
