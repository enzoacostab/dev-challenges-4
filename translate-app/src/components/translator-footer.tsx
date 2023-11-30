import { useContext } from "react"
import { context } from "../context/context"
import Button from "./button"

export default function TranslatorFooter ({ isTranslation }: { isTranslation: boolean }) {
  const { text, translation, translateFrom, translateTo, setLoading, setTranslation } = useContext(context)

  const fetchData = () => {
    fetch(`https://api.mymemory.translated.net/get?q=${text.split(' ').join('%')}?!&langpair=${translateFrom}|${translateTo}`)
      .then(response => response.json())
      .then(data => {
        const { translatedText } = data.responseData
        translatedText.includes('%')
          ? setTranslation(text)
          : setTranslation(translatedText)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const speakText = (txt: string) => {
    const utterance = new SpeechSynthesisUtterance(txt);
    window.speechSynthesis.speak(utterance);
  }

  const copyText = (txt: string) => navigator.clipboard.writeText(txt)
  
  const handleClick = () => { setLoading(true); fetchData() }

  return (
    <footer className="flex h-fit justify-between">
      <div className="flex gap-2 items-end">
        <Button txt={isTranslation ? translation : text} func={speakText} img="/assets/sound_max_fill.svg"/>
        <Button txt={isTranslation ? translation : text} func={copyText} img="/assets/Copy.svg"/>
      </div>
      {isTranslation 
        ? null 
        : <button onClick={handleClick} className="hover:bg-opacity-80 active:bg-opacity-40 transition-all py-3 -mr-1 scale-90 px-5 rounded-xl bg-[#3662E3] border items-center flex gap-2 border-[#7CA9F3] ">
            <img src="/assets/Sort_alfa.svg" width={25} alt="" />
            Translate
          </button>}
    </footer>
  )
}