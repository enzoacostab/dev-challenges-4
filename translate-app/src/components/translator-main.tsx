import { ChangeEvent, useContext, useState } from "react"
import { context } from "../context/context"

export default function TranslatorMain ({ isTranslation }: { isTranslation: boolean }) {
  const { setText, text, loading, translation } = useContext(context)
  const [length, setLength] = useState(text.length)
  
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    if (length < 500-1) setText(value)
    setLength(value.length)
  }

  return (
    <main className="flex pt-3 h-full flex-col justify-end pr-1">
      {isTranslation 
        ? <p className={`min-h-[150px] mb-2 h-fit font-bold ${loading ? 'text-[#4D5562]' : null}`}>{loading ? 'Translating...' : translation}</p> 
        : <div className="h-fit">
            <textarea value={text} onChange={handleTextChange} className="resize-none font-bold focus-visible:outline-none w-full h-full bg-transparent" cols={20} rows={5}></textarea>
            <p className="text-xs font-bold h-fit text-[#4D5562] text-end">{`${length}/500`}</p>
          </div>}
    </main>
  )
}