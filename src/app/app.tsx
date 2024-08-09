"use client"
import Footer from "app/components/layout/footer";
import Header from "app/components/layout/header";
import i18next from "i18next";
import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import global_en from '../../public/locales/en/global.json'
import global_es from '../../public/locales/es/global.json'
import Image from "next/image";

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
  const [showLenguageTip, setShowLenguageTip] = useState(false)
  const [actualLenguage, setActualLenguage] = useState("English")

  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang)
    setShowLenguageTip(false)
  }

  useEffect(() => {
    setActualLenguage(i18next.language === 'es' ? 'English' : 'Spanish')
  }, [showLenguageTip])

  return (
    <I18nextProvider i18n={i18next}>
      <button style={{ position: "fixed", top: "20px", right: "20px" }}
        onMouseOver={() => setShowLenguageTip(!showLenguageTip)}
        onClick={() => handleChangeLanguage(i18next.language === 'es' ? 'en' : 'es')}
      >
        <Image src={"/images/language.png"} width={30} height={30} alt="icon-lenguage" />
        {showLenguageTip && <p
          style={{ position: "fixed", top: "60px", right: "20px", background: "black", color: "white", borderRadius: "5px", padding: "5px" }}>
          {actualLenguage}
        </p>
        }
      </button>
      <Header />
      {children}
      <Footer />
    </I18nextProvider>
  )
}