import { classnames } from '@/utils/classnames';
import { ReactNode } from 'react';

const field = classnames(['relative flex w-[100%] flex-col']);

const labelStyles = classnames(['m-[0_0_10px_0] text-[1.4rem] font-[400] text-primary']);

export interface FieldProps {
  children: ReactNode;
  label?: ReactNode;
  id: string;
}

export const Field = ({ children, label, id }: FieldProps) => {
  return (
    <div className={classnames(['fh-field', field])}>
      <label htmlFor={id} className={classnames(['label', labelStyles])}>
        {label}
      </label>
      {children}
    </div>
  );
};
