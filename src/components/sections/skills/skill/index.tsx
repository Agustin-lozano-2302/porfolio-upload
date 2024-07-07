export default function Skill({ text, level }: ISkill) {
  return (
    <div className="flex items-center gap-4">
      <img className=" h-8" src="/images/checkmark.png" alt="checkmark" />
      <div>
        <p className=" font-semibold">{text}</p>
        <p className="opacity-60">{level}</p>
      </div>
    </div>
  )
}


interface ISkill {
  text: string;
  level: string;
}