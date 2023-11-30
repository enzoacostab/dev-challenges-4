interface Props {
  txt: string | null
  img: string
  func: ((txt: string) => void) | (() => void)
}

export default function Button ({ txt, img, func }: Props) {
  return (
    <button onClick={() => func(txt || '')} className="transition-all rounded-xl h-fit border-2 p-[6px] border-[#4D5562] hover:bg-white hover:bg-opacity-5 active:bg-opacity-0">
      <img width={20} src={img} alt="sound image" />
    </button>
  )
}