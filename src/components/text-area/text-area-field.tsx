import { useController, Validate } from 'react-hook-form';
import { TextArea, TextAreaProps } from './text-area';

export interface TextAreaFieldProps extends TextAreaProps {
  form: any;
  rules?: {
    [key: string]: Validate<any, any>;
  };
}

export const TextAreaField = ({ id, label, form, rules, className }: TextAreaFieldProps) => {
  const { field, fieldState } = useController({
    name: id,
    control: form.control,
    rules: {
      validate: rules
    }
  });

  return (
    <TextArea
      className={className}
      error={fieldState.error?.message}
      label={label}
      onChange={field.onChange}
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      id={field.name}
    />
  ); // send down the input name
  // inputRef={field.ref} // send input ref, so we can focus on input when error appear />;
};
