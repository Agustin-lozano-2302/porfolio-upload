"use client"
import { useTranslation } from "react-i18next";
import Button from "../../common/button";
import Headling from "../../common/headling";

export default function Projects() {

  const projects = [
    { name: "Pomodoro timer", repoLink: "https://github.com/Agustin-lozano-2302/pomodoro-timer", linkUrl: "https://pomodoro-timer-nine-jet.vercel.app/", imgUrl: "/images/projects/pomo-project.png" },
  ]

  const [t, i18n] = useTranslation("global")


  return (
    <section id="projects" className="flex w-full flex-col my-16 md:my-32 gap-24">
      <div className="flex flex-col m-auto text-center gap-4">
        <p className=" font-semibold opacity-60 text- md:text-lg">{t("myMostRecent")}</p>
        <p className="text-3xl md:text-5xl font-bold">{t("projects")}</p>
      </div>
      <div className="flex justify-center items-center gap-8 md:flex-row flex-col">
        {projects.map((project, index) => {
          return (
            <div className="p-6 border-black border-[1px] rounded-3xl w-full md:w-1/2 flex flex-col items-center  gap-6" key={index}>
              <img className="w-[90%] rounded-[2rem]" src={project.imgUrl} alt="project-image" />
              <p className=" text-3xl font-bold">{project.name}</p>
              <div className="flex gap-3">
                <Button link={{ name: project.repoLink }} color="primary" text="Github" />
                <Button link={{ name: project.linkUrl }} color="primary" text="Live Demo" />
              </div>
            </div>
          )
        })}
      </div>
    </section >
  )
}