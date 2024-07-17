import { classnames } from '@/utils/classnames';
import { ReactNode } from 'react';

const field = classnames(['relative flex w-[100%] flex-col pb-[20px]']);

const labelStyles = classnames(['m-[0_0_10px_0] text-[1.4rem] font-[400] text-primary']);

const errorStyles = classnames(['absolute bottom-0 right-0 text-[1.2rem] text-error']);

export interface FieldProps {
  children: ReactNode;
  label?: ReactNode;
  id: string;
  error?: string;
}

export const Field = ({ children, label, id, error }: FieldProps) => {
  return (
    <div className={classnames(['fh-field', field])}>
      <label htmlFor={id} className={classnames(['label', labelStyles])}>
        {label}
      </label>
      {children}
      {error && <div className={classnames(['error', errorStyles])}>{error}</div>}
    </div>
  );
};
