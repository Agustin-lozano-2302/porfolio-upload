import Button from "../../common/button";
import Headling from "../../common/headling";

export default function Projects() {

  const projects = [
    { name: "Proyecto 1", repoLink: "", linkUrl: "", imgUrl: "/images/project-1.png" },
    { name: "Proyecto 2", repoLink: "", linkUrl: "", imgUrl: "/images/project-2.png" },
    { name: "Proyecto 3", repoLink: "", linkUrl: "", imgUrl: "/images/project-3.png" },
  ]

  return (
    <section id="projects" className="flex w-full flex-col my-16 md:my-32 gap-24">
      <div className="flex flex-col m-auto text-center gap-4">
        <p className=" font-semibold opacity-60 text- md:text-lg">Mis más recientes</p>
        <p className="text-3xl md:text-5xl font-bold">Proyectos</p>
      </div>
      <div className="flex justify-center items-center gap-8 md:flex-row flex-col">
        {projects.map((project, index) => {
          return (
            <div className="p-6 border-black border-[1px] rounded-3xl w-full md:w-1/2 flex flex-col items-center md:max-w-[30%] gap-6" key={index}>
              <img className="w-[90%] rounded-[2rem]" src={project.imgUrl} alt="project-image" />
              <p className=" text-3xl font-bold">{project.name}</p>
              <div className="flex gap-3">
                <Button color="primary" text="Github" />
                <Button color="primary" text="Live Demo" />
              </div>
            </div>
          )
        })}
      </div>
    </section >
  )
}