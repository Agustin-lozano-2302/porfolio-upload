"use client"
import { useEffect } from "react";
import Button from "../../common/button";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Hero() {
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    console.log(i18next.language)
  }, [])

  return (
    <section className="flex-col md:flex-row flex justify-center gap-2 md:gap-24 w-full items-center my-14 md:my-32">
      <img className=" w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full m-auto md:m-0" src="/images/me.png" alt="me" />
      <div className="flex flex-col text-center gap-4 my-4 md:my-0">
        <p className=" font-semibold opacity-60 text-lg">{t("hello")}</p>
        <p className="text-3xl md:text-5xl font-bold">Agustín Lozano</p>
        <p className="text-2xl md:text-4xl font-bold opacity-60">{t("frontendDeveloper")}</p>
        <div className="flex justify-center gap-4">
          <Button link={{ name: i18next.language === "en" ? "/files/lozano-agustin-cv-english.pdf" : "/files/lozano-agustin-cv-spanish.pdf", dowloadFile: "cv-agustin-lozano" }} text={t("downloadCV")} color="primary" />
          <Button link={{ name: "#contact" }} text={t("contactInfo")} color="secondary" />
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}