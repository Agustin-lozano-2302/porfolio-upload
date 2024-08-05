"use client"
import Footer from "app/components/layout/footer";
import Header from "app/components/layout/header";
import i18next from "i18next";
import { ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import global_en from '../../public/locales/en/global.json'
import global_es from '../../public/locales/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  debug: true,
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    },
  }
})

export default function App({ children }: { children: ReactNode }) {
  const [t] = useTranslation('global')

  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang)
  }

  return (
    <I18nextProvider i18n={i18next}>
      <button style={{ position: "fixed", top: "10px", right: "10px" }} onClick={() => handleChangeLanguage(i18next.language === 'es' ? 'en' : 'es')}>Spanish</button>
      <Header />
      {children}
      <Footer />
    </I18nextProvider>
  )
}