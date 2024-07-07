import Button from "../../common/button";
import Headling from "../../common/headling";
import Skill from "./skill";

export default function Skills() {
  return (
    <section id="skills" className="flex w-full flex-col my-14 md:my-32 gap-24">
      <div className="flex flex-col m-auto text-center gap-4">
        <p className=" font-semibold opacity-60  text-base md:text-lg">Explora mis</p>
        <p className="text-3xl md:text-5xl font-bold">Habilidades</p>
      </div>
      <div className="flex m-auto gap-12 justify-center flex-col md:flex-row">
        <div className="p-8 border-black border-[1px] rounded-3xl w-full md:w-1/2">
          <p className=" font-semibold opacity-60 text-3xl text-center p-8">
            Frontend development
          </p>
          <div className=" flex flex-wrap p-4 gap-12 justify-center items-center">
            <Skill text="HTML" level="Avanzado" />
            <Skill text="CSS" level="Avanzado" />
            <Skill text="SASS" level="Avanzado" />
            <Skill text="JavaScript" level="Bases" />
            <Skill text="React" level="Intermedio" />
            <Skill text="Tailwind" level="Intermedio" />
          </div>
        </div>
        <div className="p-8 border-black border-[1px] rounded-3xl  w-full md:w-1/2">
          <p className=" font-semibold opacity-60 text-3xl text-center p-8">
            Backend development</p>
          <div className=" flex flex-wrap p-4 gap-12 justify-center items-center">
            <Skill text="Node JS" level="Bases" />
            <Skill text="Next js" level="Intermedio" />
            <Skill text="Git" level="Avanzado" />
          </div>
        </div>
      </div>
    </section >
  )
}