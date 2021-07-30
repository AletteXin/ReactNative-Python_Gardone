import React from 'react';
import Index from './Index.js'
import { LoginProvider } from './LoginContext';

export default function App() {

  return (
    <LoginProvider>
      <Index />
    </LoginProvider>
  );
}
