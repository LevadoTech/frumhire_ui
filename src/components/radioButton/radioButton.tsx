import { classnames } from '@/utils/classnames';
import React, { useState } from 'react';

export const radioButtonContainerClasses = classnames([
  'flex',
  'justify-end',
  'items-center',
  'flex-row-reverse',
  'w-full'
]);

export const radioButtonClasses = (props: { size?: 'small' | 'medium' | 'large' }) =>
  classnames([
    props.size === 'small' && 'h-[10px] text-[1.4rem]',
    props.size === 'medium' && 'h-[20px] text-[1.5rem]',
    props.size === 'large' && 'h-[30px] text-[1.7rem]',
    'bg-white text-primary',
    'transition',
    'focus-visible:border-primary',
    'mr-[4px]'
  ]);

export const labelClasses = classnames([
  'ml-[8px]',
  'bg-white text-primary',
  'cursor-pointer',
  'hover:text-primary500',
  'transition-all duration-200 ease-in-out'
]);

export interface RadioButtonProps {
  clear?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  label: string;
  checked: boolean;
  value: string;
  name: string;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  size,
  label,
  checked,
  value,
  name,
  onChange,
  className
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label
      className={classnames([
        radioButtonClasses({ size }),
        radioButtonContainerClasses,
        labelClasses,
        className
      ])}
    >
      <span className={labelClasses}>{label}</span>
      <input
        type="radio"
        checked={checked}
        onChange={handleChange}
        value={value}
        name={name}
        className="mr-2"
      />
    </label>
  );
};

export default RadioButton;
