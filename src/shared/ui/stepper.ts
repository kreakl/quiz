import { stepperAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  stepperAnatomy.keys
);

const rectangle = definePartsStyle({
  stepper: {
    flexWrap: 'wrap',
  },
  step: {
    flexBasis: '6rem',
    flexGrow: 0,
    height: 4,
    variants: {
      complete: {
        bg: 'black',
      },
    },
  },
  indicator: {
    'borderRadius': 0,
    'height': '100%',
    'width': '100%',
    '&[data-status=incomplete]': {
      border: 'none',
      bg: 'blackAlpha.300',
    },
    '&[data-status=active]': {
      border: 'none',
      bg: 'red.600',
    },
    '&[data-status=complete]': {
      border: 'none',
      bg: 'black',
    },
  },
});

const variants = {
  rectangle,
};

export const stepperTheme = defineMultiStyleConfig({
  variants,
  defaultProps: { variant: 'rectangle' },
});
