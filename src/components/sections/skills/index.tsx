"use client"
import { useTranslation } from "react-i18next";
import Button from "../../common/button";
import Headling from "../../common/headling";
import Skill from "./skill";

export default function Skills() {

  const [t, i18n] = useTranslation("global")

  return (
    <section id="skills" className="flex w-full flex-col my-14 md:my-32 gap-24">
      <div className="flex flex-col m-auto text-center gap-4">
        <p className=" font-semibold opacity-60  text-base md:text-lg">{t("exploreMy")}</p>
        <p className="text-3xl md:text-5xl font-bold">{t("skills")}</p>
      </div>
      <div className="flex m-auto gap-12 justify-center flex-col md:flex-row">
        <div className="p-8 border-black border-[1px] rounded-3xl w-full md:w-1/2">
          <p className=" font-semibold opacity-60 text-3xl text-center p-8">
            {t("frontendDevelopment")}
          </p>
          <div className=" flex flex-wrap p-4 gap-12 justify-center items-center">
            <Skill text="HTML" level={t("advanced")} />
            <Skill text="CSS" level={t("advanced")} />
            <Skill text="SASS" level={t("advanced")} />
            <Skill text="JavaScript" level={t("basic")} />
            <Skill text="React" level={t("intermediate")} />
            <Skill text="Tailwind" level={t("intermediate")} />
          </div>
        </div>
        <div className="p-8 border-black border-[1px] rounded-3xl  w-full md:w-1/2">
          <p className=" font-semibold opacity-60 text-3xl text-center p-8">
            {t("backendDevelopment")}
          </p>
          <div className=" flex flex-wrap p-4 gap-12 justify-center items-center">
            <Skill text="Node JS" level={t("basic")} />
            <Skill text="Next js" level={t("intermediate")} />
            <Skill text="Git" level={t("intermediate")} />
          </div>
        </div>
      </div>
    </section >
  )
}