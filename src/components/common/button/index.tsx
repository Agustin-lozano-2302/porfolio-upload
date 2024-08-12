export default function Button({ text, color, funtion, link }: IButton) {
  return (
    <button
      onClick={funtion}
      className={(color === 'primary' ? " text-black hover:text-white hover:bg-black hover:bg-opacity-80" : "text-white bg-black hover:bg-opacity-80") + " p-3 md:p-4 border-[1px] border-black rounded-[3rem] font-semibold text-base md:text-lg"}
    >
      <a target="_blank" href={link?.name} >
        {text}
      </a>
    </ button>
  )
}

interface IButton {
  text: string;
  funtion?: () => {};
  color: string
  link?: ILink
}

interface ILink {
  name: string;
  dowloadFile?: string
}