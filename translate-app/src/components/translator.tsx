import TranslatorHeader from "./translator-header"
import TranslatorMain from "./translator-main"
import TranslatorFooter from "./translator-footer"

interface Props {
  isTranslation: boolean
  dark: boolean,
}

export default function Translator ({ isTranslation, dark }: Props) {

  return (
    <div className={`h-full w-[90%] gap-2 flex justify-between flex-col ${dark ? 'bg-[#121826cc]' : 'bg-[#212936cc]'} p-5 rounded-3xl border xl:max-w-[570px] border-[#4D5562] backdrop-blur-sm`}>
      <TranslatorHeader isTranslation={isTranslation}/>
      <TranslatorMain isTranslation={isTranslation}/>
      <TranslatorFooter isTranslation={isTranslation}/>
    </div>
  )
}