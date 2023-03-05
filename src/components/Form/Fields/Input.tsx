import { useFormikContext } from 'formik';
import type { ComponentProps } from 'react';
import React from 'react';

type InputProps = {
  name: string;
  label: string;
} & ComponentProps<'input'>;

const Input = ({ ...props }: InputProps) => {
  const form = useFormikContext();
  const { value, error } = form.getFieldMeta<string | number | readonly string[] | undefined>(props.name);

  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...{ ...props, value, onChange: form.handleChange }} />
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default Input;
