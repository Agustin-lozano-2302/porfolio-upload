"use client"
import { useTranslation } from "react-i18next";

export default function AboutMe() {

  const [t, i18n] = useTranslation("global")


  return (
    <section id="about-me" className="flex w-full flex-col my-14 md:my-32 gap-24">
      <div className="flex flex-col m-auto text-center gap-4">
        <p className=" font-semibold opacity-60 text-base md:text-lg">{t("learnMore")}</p>
        <p className="text-3xl md:text-5xl font-bold">{t("about")}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <img className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-3xl m-auto md:m-0" src="/images/about-me.jpg" alt="about-me" />
        <div className="p-9 flex flex-col items-center gap-6 w-full md:w-1/2">
          <div className="flex justify-start gap-4 md:gap-16 ">
            <div className="text-center p-7 border-black border-[1px] rounded-3xl flex flex-col items-center md:w-[250px]">
              <img className=" h-8" src="/images/experience.png" alt="experience" />
              <p className=" font-semibold text-lg">{t("experience")}</p>
              <p className=" opacity-70 text-sm md:text-base">{t("myExperience")}</p>
              <p className=" opacity-70 text-sm md:text-base">{t("frontendDeveloper")}</p>
            </div>
            <div className="text-center p-7 border-black border-[1px] rounded-3xl flex flex-col items-center md:w-[250px]">
              {/* cambiar este icono */}
              <img className=" h-8" src="/images/education.png" alt="education" />
              <p className=" font-semibold text-lg">{t("education")}</p>
              <p className=" opacity-70 text-sm md:text-base">{t("completeSchool")}</p>
              <p className=" opacity-70 text-sm md:text-base">{t("fullStackWebDev")}</p>
            </div>
          </div>
          <p className=" opacity-60 text-center md:text-start text-sm md:text-base">{t("bio")}</p>
        </div>
      </div>
    </section>
  )
}