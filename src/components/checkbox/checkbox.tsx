import { classnames } from '@/utils/classnames';
import React, { useState } from 'react';

export const checkboxContainerClasses = classnames([
  'flex',
  'justify-end',
  'items-center',
  'flex-row-reverse',
  'w-full'
]);

export const checkboxClasses = (props: { size?: 'small' | 'medium' | 'large' }) =>
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

export interface CheckboxProps {
  clear?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  size,
  label,
  checked = false,
  onChange,
  className
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label
      className={classnames([
        checkboxClasses({ size }),
        checkboxContainerClasses,
        labelClasses,
        className
      ])}
    >
      <span className={labelClasses}>{label}</span>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="mr-2" />
    </label>
  );
};

export default Checkbox;
