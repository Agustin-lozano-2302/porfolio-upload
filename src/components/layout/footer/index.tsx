import Headling from "../../common/headling";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-around gap-8 w-full h-[17vh] items-center">
      <div className="flex items-center gap-8 list-none md:flex-row flex-col">
        <Headling link="#about-me" fontW="font-normal" title={"Sobre mí"} />
        <Headling link="#skills" fontW="font-normal" title={"Experiencia"} />
        {/* <Headling link="#projects" fontW="font-normal" title={"Proyectos"} /> */}
        <Headling link="#contact" fontW="font-normal" title={"Contactar"} />
      </div>
      <p className=" text-sm md:text-base text-center  font-nomal opacity-60 m-4">Copyright © 2024 Agustín Lozano. All Rights Reserved.</p>
    </footer>
  )
}