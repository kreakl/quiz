import {
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';
import { forwardRef } from 'react';
import { createField } from './create-field.tsx';
import { BaseFieldProps } from '@/shared/ui';

export const TextAreaField = createField(
  forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => <Textarea {...props} ref={ref} />)
);

export const CheckboxField = createField(
  forwardRef<HTMLInputElement, BaseFieldProps>(
    ({ options = [], onChange, onBlur, ...props }, ref) => {
      return (
        <CheckboxGroup onChange={onChange} {...props}>
          <Stack>
            {options.map((value) => (
              <Checkbox key={value} onBlur={onBlur} value={value} ref={ref} colorScheme="red">
                {value}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      );
    }
  ),
  {
    isControlled: true,
  }
);

export const InputField = createField(
  forwardRef<HTMLInputElement, BaseFieldProps>((props, ref) => <Input {...props} ref={ref} />)
);

export const RadioField = createField(
  forwardRef<HTMLInputElement, BaseFieldProps>(
    ({ options = [], onChange, onBlur, ...props }, ref) => (
      <RadioGroup onChange={onChange} {...props}>
        <Stack>
          {options.map((value) => (
            <Radio key={value} onBlur={onBlur} value={value} ref={ref} colorScheme="red">
              {value}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    )
  ),
  {
    isControlled: true,
  }
);
