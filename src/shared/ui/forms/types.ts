import { FieldValues } from 'react-hook-form';

export type Fields = 'radio' | 'textarea' | 'text' | 'checkbox';

export interface BaseFieldProps extends FieldValues {
  options?: string[];
  placeholder?: string;
}
