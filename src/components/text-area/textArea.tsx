import { classnames } from '@/utils/classnames';
import { Field } from '../form/field';
import { FocusEventHandler, ReactNode } from 'react';

export const textArea = (height: string, width: string) =>
  classnames([
    'rounded-[4px] border-[1px] border-solid border-primary400 p-[0px_12px] text-[1.4rem] font-[400]',
    'bg-white text-primary',
    'transition',
    'resize-y', // אפשר למשתמש לשנות את הגובה
    `h-[${height}] w-[${width}]`,

    'focus-visible:border-primary'
  ]);

export interface TextAreaProps {
  onChange?: (e: string) => void;
  value?: string;
  id: string;
  label?: ReactNode;
  error?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> | undefined;
  height?: string;
  width?: string;
}

export const TextArea = ({
  value,
  onChange,
  id,
  label,
  error,
  onBlur,
  height = '300px',
  width = '100%'
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
        className={textArea(height, width)}
      />
    </Field>
  );
};
