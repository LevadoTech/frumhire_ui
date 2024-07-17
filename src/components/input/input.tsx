import { classnames } from '@/utils/classnames';
import { Field } from '../form/field';
import { ReactNode } from 'react';

export const input = (props: { size?: 'small' | 'medium' | 'large' }) =>
  classnames([
    'rounded-[4px] border-[1px] border-solid border-primary400 p-[0px_12px] text-[1.4rem] font-[400]',
    props.size === 'small' && 'h-[40px] text-[1.4rem]',
    props.size === 'medium' && 'h-[60px] text-[1.5rem]',
    props.size === 'large' && 'h-[80px] text-[1.7rem]',
    'bg-white text-primary',
    'transition',

    'focus-visible:border-primary'
  ]);

export interface InputProps {
  onChange?: (e: string) => void;
  value?: string;
  size?: 'small' | 'medium' | 'large';
  id: string;
  label?: ReactNode;
  error?: string;
}

export const Input = ({ value, onChange, size = 'small', id, label, error }: InputProps) => {
  return (
    <Field id={id} label={label} error={error}>
      <input
        id={id}
        className={input({ size })}
        value={value}
        onChange={e => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      />
    </Field>
  );
};
