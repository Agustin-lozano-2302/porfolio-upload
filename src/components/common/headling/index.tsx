export default function Headling({ title, fontW, link }: { title: string, fontW: string, link: string }) {
  return (
    <p className={`text-xl md:text-2xl ${fontW}`}>
      <a href={link}>{title}</a></p>
  )
}