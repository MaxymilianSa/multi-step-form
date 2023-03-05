import type { FormikValues } from 'formik';
import React from 'react';
import * as yup from 'yup';

import Input from './components/Form/Fields/Input';
import SubmitButton from './components/Form/Fields/SubmitButton';
import Form from './components/Form/Form';
import { useForm } from './components/Form/useForm';

type testComponentType<Y extends yup.Schema> = {
  schema: Y;
  initialValues: yup.InferType<Y>;
};

const testComponent = <Y extends yup.Schema>({ schema, initialValues }: testComponentType<Y>) => {
  console.log(schema);
  console.log(initialValues);
};

const schema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  //test: yup.string()
});

type InitType = yup.InferType<typeof schema>;
type testType = yup.ObjectSchema<typeof schema>;

const initialValues = {
  name: '',
  surname: '',
  test: '',
};

testComponent({ schema, initialValues: { ...initialValues } }); //tak nie wykrywa test i nie krzyczy ts
testComponent({
  schema,
  initialValues: {
    name: '',
    surname: '',
    //test: '',
  },
}); //tak wykrywa test i krzyczy ts

const App = () => {
  const onSubmit = (values: FormikValues) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const form = useForm({ schema, initialValues, onSubmit });

  return (
    <Form schema={schema} initialValues={initialValues} onSubmit={onSubmit}>
      <Input type="text" name="name" label="Imię" />
      <Input type="text" name="surname" label="Nazwisko" />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export default App;
