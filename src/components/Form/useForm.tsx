import type { FormikConfig, FormikValues } from 'formik';
import { useFormik } from 'formik';
import type { InferType, ObjectSchema, Schema } from 'yup';

export type useFormType<Y extends Schema> = {
  schema: Y;
  onSubmit: (values: FormikValues) => void;
  clearForm?: boolean;
} & Exclude<FormikConfig<InferType<Y>>, 'validationSchema'>;

export const useForm = <Y extends Schema>({ schema, onSubmit, clearForm, ...formProps }: useFormType<Y>) =>
  useFormik({
    ...formProps,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      onSubmit(values);
      setSubmitting(false);
      if (clearForm) {
        resetForm();
      }
    },
  });
