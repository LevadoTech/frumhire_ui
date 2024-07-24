import { classnames } from '@/utils/classnames';
import { Field } from '../form/field';
import { FocusEventHandler, ReactNode } from 'react';

export const textArea = () =>
  classnames([
    'rounded-[4px] border-[1px] border-solid border-primary400 p-[0px_12px] text-[1.4rem] font-[400]',
    'bg-white text-primary',
    'transition',

    'focus-visible:border-primary'
  ]);

export interface TextAreaProps {
  onChange?: (e: string) => void;
  value?: string;
  id: string;
  label?: ReactNode;
  error?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  rows?: number;
  cols?: number;
}

export const TextArea = ({
  value,
  onChange,
  id,
  label,
  error,
  onBlur,
  rows,
  cols
}: TextAreaProps) => {
  return (
    <Field id={id} label={label} error={error}>
      <textarea
        onBlur={onBlur}
        id={id}
        value={value}
        onChange={e => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        rows={rows}
        cols={cols}
        className={textArea()}
      />
    </Field>
  );
};
