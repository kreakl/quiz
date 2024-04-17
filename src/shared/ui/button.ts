import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  borderRadius: 'md',
  color: 'white',
  bg: 'red.600',
  _hover: {
    bg: 'red.700',
    _disabled: {
      bg: 'red.400',
    },
  },
  _active: {
    bg: 'red.900',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary },
  defaultProps: {
    variant: 'primary',
  },
  sizes: {
    md: {
      px: '2rem',
      py: '0.5rem',
      fontSize: 'sm',
      lineHeight: '150%',
    },
  },
});
