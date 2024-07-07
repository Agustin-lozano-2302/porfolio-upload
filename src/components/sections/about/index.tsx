

export default function AboutMe() {
  return (
    <section id="about-me" className="flex w-full flex-col my-14 md:my-32 gap-24">
      <div className="flex flex-col m-auto text-center gap-4">
        <p className=" font-semibold opacity-60 text-base md:text-lg">Para saber más</p>
        <p className="text-3xl md:text-5xl font-bold">Sobre mí</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <img className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px] rounded-3xl m-auto md:m-0" src="/images/about-me.jpg" alt="about-me" />
        <div className="p-9 flex flex-col items-center gap-6 w-full md:w-1/2">
          <div className="flex justify-start gap-4 md:gap-16 ">
            <div className="text-center p-7 border-black border-[1px] rounded-3xl flex flex-col items-center md:w-[250px]">
              <img className=" h-8" src="/images/experience.png" alt="experience" />
              <p className=" font-semibold text-lg">Experiencia</p>
              <p className=" opacity-70 text-sm md:text-base">+1 Año</p>
              <p className=" opacity-70 text-sm md:text-base">Front end developer</p>
            </div>
            <div className="text-center p-7 border-black border-[1px] rounded-3xl flex flex-col items-center md:w-[250px]">
              {/* cambiar este icono */}
              <img className=" h-8" src="/images/education.png" alt="education" />
              <p className=" font-semibold text-lg">Educación</p>
              <p className=" opacity-70 text-sm md:text-base">Secundario completo</p>
              <p className=" opacity-70 text-sm md:text-base">Full stack web develper - Digital house</p>
            </div>
          </div>
          <p className=" opacity-60 text-center md:text-start text-sm md:text-base">
            Front end developer en IT Rock. Graduado en el curso de Full Stack Web Developer de Digital House, donde desarrollé habilidades básicas en tecnologías como Node.js, JavaScript, MySQL y librerías front end como React. Me apasiona el desarrollo de software de alta calidad y la mejora continua del proceso de desarrollo. Además, tengo un nivel avanzado de inglés y habilidades para trabajar en equipo y comunicarme eficazmente con mis compañeros y clientes.          </p>
        </div>
      </div>
    </section>
  )
}