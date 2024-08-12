"use client"

import { useEffect, useState } from "react";
import Headling from "../../common/headling";
import { useTranslation } from "react-i18next";

export default function Header() {

  const [actualWidth, setActualWidth] = useState<number>(0)
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActualWidth(window.screen.width);
    }
  }, [])

  return (
    <nav className="flex justify-start md:justify-around md:gap-32 w-full h-[17vh] items-center">
      <p className=" text-[2rem] md:block hidden mx-6 font-nomal">Agustín Lozano</p>
      {actualWidth < 700 ?
        <div className="relative">
          {openMenu ?
            <svg className="h-8 m-5" onClick={() => setOpenMenu(!openMenu)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5L19 19M5 19L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            :
            <svg onClick={() => setOpenMenu(!openMenu)} className="h-8 m-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
              <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
              <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
            </svg>
          }
          {openMenu && <div className="flex flex-col w-44 absolute left-[-50px] max-h-72 gap-4 justify-center animate-fade-down animate-duration-1000 bg-white p-3 rounded-lg">
            <Headling link="#about-me" fontW="font-light" title={t("about")} />
            <Headling link="#skills" fontW="font-light" title={t("experience")} />
            <Headling link="#projects" fontW="font-light" title={"projects"} />
            <Headling link="#contact" fontW="font-light" title={t("contact")} />
          </div>}
        </div> :
        <div className="flex items-center gap-8 list-none">
          <Headling link="#about-me" fontW="font-light" title={t("about")} />
          <Headling link="#skills" fontW="font-light" title={t("experience")} />
          <Headling link="#projects" fontW="font-light" title={"projects"} />
          <Headling link="#contact" fontW="font-light" title={t("contact")} />
        </div>
      }
    </nav>
  )
}