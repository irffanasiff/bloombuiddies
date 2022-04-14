import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import theme from './theme';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  // colors: { ...theme.colors, primary: '#ffffff' },
};

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
