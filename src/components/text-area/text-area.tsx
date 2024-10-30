import { classnames } from '@/utils/classnames';
import { Field } from '../form/field';
import { FocusEventHandler, ReactNode } from 'react';

export const textArea = classnames([
  'rounded-[4px] border-[1px] border-solid border-primary400 p-[10px_12px] text-[1.4rem] font-[400]',
  'bg-white text-primary',

  'resize-y',

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
  className?: string;
}

export const TextArea = ({
  value,
  onChange,
  id,
  label,
  error,
  onBlur,
  height = '300px',
  width = '100%',
  className
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
        style={{ height: height || '300px', width: width || '100%' }}
        className={classnames([textArea, className])}
      />
    </Field>
  );
};
