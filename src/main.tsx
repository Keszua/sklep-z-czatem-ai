import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import  { App } from './App.tsx'
import './index.css'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['pl', 'en'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },

    react: {
      useSuspense: false
    }
  });

ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>,
)
