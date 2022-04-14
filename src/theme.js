import { extendTheme } from '@chakra-ui/react';
import '@fontsource/archivo';
import '@fontsource/fredoka-one';
import '@fontsource/roboto';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  fonts: {
    body: 'Roboto',
  },
  styles: {
    global: {
      'html, body': {
        background: '#E9DDE9',
      },
    },
  },
});

export default theme;
