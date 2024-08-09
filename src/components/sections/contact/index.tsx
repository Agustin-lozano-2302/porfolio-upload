"use client"
import { useTranslation } from "react-i18next"


export default function Contact() {

  const [t, i18n] = useTranslation("global")


  return (
    <section id="contact" className="flex w-full flex-col my-20 md:my-40 gap-12 md:gap-24">
      <div className="flex flex-col m-auto text-center gap-4">
        <p className=" font-semibold opacity-60  text-base md:text-lg">{t("hereYouCan")}</p>
        <p className="text-3xl md:text-5xl font-bold">{t("contactMe")}</p>
      </div>
      <div className="flex justify-center items-center gap-4 md:gap-8 rounded-[2rem] border-[1px] border-black max-w-max m-auto p-3 md:p-6  flex-col md:flex-row">
        <a className="flex items-center gap-2" target="_blank" href="mailto:agus.lozano.2302@gmail.com">
          <img className="h-7 md:h-10" src="/images/email.png" alt="mail" />
          <p className="font-medium text-base md:text-lg"> agus.lozano.2302@gmail.com</p>
        </a>
        <a className="flex items-center gap-2" target="_blank" href="https://www.linkedin.com/in/agustin-lozano">
          <img className="h-7 md:h-10" src="/images/linkedin.png" alt="linkedin" />
          <p className="font-medium text-base md:text-lg">Linkedin</p>
        </a>
      </div>
    </section >
  )
}