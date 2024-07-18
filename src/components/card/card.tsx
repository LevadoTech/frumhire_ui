import { classnames } from '@/utils/classnames';
import { ReactNode } from 'react';

const card = classnames([
  'w-[100%] rounded-[10px] bg-white shadow-[0_0_13px_0_rgba(82,63,105,0.05)]'
]);

const body = classnames(['p-[20px]']);

export interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className={classnames(['fh-card', card])}>
      <div className={classnames([body, 'body'])}>{children}</div>
    </div>
  );
};
