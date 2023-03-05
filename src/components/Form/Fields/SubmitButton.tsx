import type { ComponentProps } from 'react';
import React from 'react';

const SubmitButton = (props: Omit<ComponentProps<'button'>, 'type'>) => <button {...props} type="submit" />;

export default SubmitButton;
