import { useController, Validate } from 'react-hook-form';
import { Input, InputProps } from './input';

export interface InputFieldProps extends InputProps {
  form: any;
  rules?: {
    [key: string]: Validate<any, any>;
  };
}

export const InputField = ({ size = 'small', id, label, form, rules }: InputFieldProps) => {
  const { field, fieldState } = useController({
    name: id,
    control: form.control,
    rules: {
      validate: rules
    }
  });

  return (
    <Input
      error={fieldState.error?.message}
      size={size}
      label={label}
      onChange={field.onChange}
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      id={field.name}
    />
  ); // send down the input name
  // inputRef={field.ref} // send input ref, so we can focus on input when error appear />;
};
