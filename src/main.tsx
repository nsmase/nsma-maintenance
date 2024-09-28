import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentProvider } from './ContentProvider';
import App from './App.tsx';
import LanguageSwitcher from './LanguageSwitcher.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContentProvider>
      <LanguageSwitcher />
      <App />
    </ContentProvider>
  </React.StrictMode>
);
