import Button from "../../common/button";

export default function Hero() {
  return (
    <section className="flex-col md:flex-row flex justify-center gap-2 md:gap-24 w-full items-center my-14 md:my-32">
      <img className=" w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full m-auto md:m-0" src="/images/me.png" alt="me" />
      <div className="flex flex-col text-center gap-4 my-4 md:my-0">
        <p className=" font-semibold opacity-60 text-lg">Hola! Soy</p>
        <p className="text-3xl md:text-5xl font-bold">Agustín Lozano</p>
        <p className="text-2xl md:text-4xl font-bold opacity-60">Frontend Developer</p>
        <div className="flex justify-center gap-4">
          <Button link={{ name: "/files/cv-agustin-lozano-1.pdf", dowloadFile: "cv-agustin-lozano" }} text={"Descargar cv"} color="primary" />
          <Button link={{ name: "#contact" }} text={"Info de contacto"} color="secondary" />
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}