import { FormikProvider } from 'formik';
import type { ComponentProps } from 'react';
import React from 'react';
import type { Schema } from 'yup';

import type { useFormType } from './useForm';
import { useForm } from './useForm';

const Form = <Y extends Schema>({ children, ...props }: Omit<ComponentProps<'form'>, 'onSubmit'> & useFormType<Y>) => {
  const form = useForm({ ...props });

  return (
    <FormikProvider value={form}>
      <form onSubmit={form.handleSubmit}>
        <fieldset disabled={form.isSubmitting}>{children}</fieldset>
      </form>
    </FormikProvider>
  );
};

export default Form;
