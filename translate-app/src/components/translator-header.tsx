import { ChangeEvent, MouseEvent, useContext } from "react"
import { context } from "../context/context"
import Button from "./button"

export default function TranslatorHeader ({ isTranslation }: { isTranslation: boolean }) {
  const { setTranslateFrom, translateFrom, setTranslateTo, translateTo } = useContext(context)
  const langs = ['ab', 'fr', 'en']

  const handleLangClick = (e: MouseEvent<HTMLSelectElement>) => {
    const { value } = e.target as HTMLSelectElement;
    const radioInputs = document.querySelectorAll(`[name=${isTranslation ? 'to' : 'from'}]`)
    
    for (const radioInput of radioInputs) {
      if (radioInput instanceof HTMLInputElement) {
        radioInput.checked = false;
      }
    }

    !isTranslation 
      ? setTranslateFrom(value)
      : setTranslateTo(value)
  }

  const handleLangChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = e.target 
    !isTranslation
      ? setTranslateFrom(value)
      : setTranslateTo(value)
  }

  const exchangeLanguages = () => {
    const from = translateFrom
    setTranslateFrom(translateTo)
    setTranslateTo(from)
  }

  return (
    <header className="flex justify-between border-b border-b-[#4D5562]">
      <div className="flex h-fit gap-2 flex-wrap pb-4">
        {!isTranslation 
        ? <input onChange={handleLangChange} type="radio" className="hidden" name='from' id='from_dl' value="ab"/> : null}
        <input onChange={handleLangChange} type="radio" className="hidden" name={isTranslation ? 'to' : 'from'} id={!isTranslation ? 'from_en' : 'to_en'} value="en"/>
        <input onChange={handleLangChange} type="radio" className="hidden" name={isTranslation ? 'to' : 'from'} id={!isTranslation ? 'from_fr' : 'to_fr'} value="fr"/>
        {!isTranslation 
        ? <label className={`text-[#4D5562] font-bold text-sm tracking-wide px-3 transition-all rounded-xl flex items-center cursor-pointer ${translateFrom === 'ab' ? 'bg-[#4D5562] text-[#F9FAFB]' : null}`} htmlFor='from_dl'>Detect Language</label> : null}
        <label className={`text-[#4D5562] font-bold text-sm tracking-wide px-3 transition-all rounded-xl flex items-center cursor-pointer ${!isTranslation && translateFrom === 'en' || isTranslation && translateTo === 'en' ? 'bg-[#4D5562] text-[#F9FAFB]' : null}`} htmlFor={!isTranslation ? 'from_en' : 'to_en'}>English</label>
        <label className={`text-[#4D5562] font-bold text-sm tracking-wide px-3 transition-all rounded-xl flex items-center cursor-pointer ${!isTranslation && translateFrom === 'fr' || isTranslation && translateTo === 'fr' ? 'bg-[#4D5562] text-[#F9FAFB]' : null}`} htmlFor={!isTranslation ? 'from_fr' : 'to_fr'}>French</label>
        <select onClick={handleLangClick} onChange={handleLangChange} className={`${!langs.includes(!isTranslation ? translateFrom : translateTo) ? 'bg-[#4D5562] text-[#F9FAFB]' : 'bg-transparent'} transition-all cursor-pointer text-[#4D5562] px-3 py-2 rounded-xl font-bold tracking-wide text-sm focus-visible:outline-none`}>
          <option value="es" className="bg-[#121826cc]">Spanish</option>
          <option value="zh" className="bg-[#121826cc]">Chinese</option>
          <option value="hi" className="bg-[#121826cc]">Hindi</option>
          <option value="ru" className="bg-[#121826cc]">Russian</option>
          <option value="ar" className="bg-[#121826cc]">Arabic</option>
          <option value="pt" className="bg-[#121826cc]">Portuguese</option>
        </select>
      </div>
      {isTranslation ? <Button txt={null} func={exchangeLanguages} img="/assets/Horizontal_top_left_main.svg"/> : null}
    </header>
  )
}