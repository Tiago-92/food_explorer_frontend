import React from 'react';
import ReactDOM from 'react-dom/client';

import { CartProvider } from './contexts/CartContext';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
)
