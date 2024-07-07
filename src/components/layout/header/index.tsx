"use client"

import { useEffect, useState } from "react";
import Headling from "../../common/headling";

export default function Header() {

  const [actualWidth, setActualWidth] = useState<number>(0)
  const [openMenu, setOpenMenu] = useState<boolean>(false)


  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(window.screen.width)
      setActualWidth(window.screen.width);
    }
  }, [])

  return (
    <nav className="flex justify-around md:gap-32 w-full h-[17vh] items-center">
      <p className=" md:text-[2rem] text-2xl mx-6 font-nomal">Agustín Lozano</p>
      {actualWidth < 700 ?
        <div className="relative">
          {openMenu ?
            <img className="h-10 m-5" src="/images/close.svg" alt="menu" onClick={() => setOpenMenu(!openMenu)} />
            :
            <img className="h-10 m-5" src="/images/burger-menu.svg" alt="menu" onClick={() => setOpenMenu(!openMenu)} />
          }
          {openMenu && <div className="flex flex-col w-44 absolute left-[-50px] max-h-72 gap-4 justify-center animate-fade-down animate-duration-1000 bg-white">
            <Headling link="#about-me" fontW="font-light" title={"Sobre mí"} />
            <Headling link="#skills" fontW="font-light" title={"Experiencia"} />
            {/* <Headling link="#projects" fontW="font-light" title={"Proyectos"} /> */}
            <Headling link="#contact" fontW="font-light" title={"Contactar"} />
          </div>}
        </div> :
        <div className="flex items-center gap-8 list-none">
          <Headling link="#about-me" fontW="font-light" title={"Sobre mí"} />
          <Headling link="#skills" fontW="font-light" title={"Experiencia"} />
          {/* <Headling link="#projects" fontW="font-light" title={"Proyectos"} /> */}
          <Headling link="#contact" fontW="font-light" title={"Contactar"} />
        </div>
      }
    </nav>
  )
}