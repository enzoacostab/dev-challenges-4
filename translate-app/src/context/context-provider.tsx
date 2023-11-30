import { useState } from "react"
import { Context } from "../types"
import { context } from "./context"

export default function ContextProvider ({ children }: { children: React.JSX.Element }) {
  const [translateTo, setTranslateTo] = useState('fr')
  const [translateFrom, setTranslateFrom] = useState('en')
  const [translation, setTranslation] = useState('Bonjour, comment allez-vous ?')
  const [loading, setLoading] = useState(false)
  const [text, setText] = useState('Hello, how are you?')

  const value: Context = {
    translateTo, setTranslateTo,
    translateFrom, setTranslateFrom,
    translation, setTranslation,
    loading, setLoading,
    text, setText
  }
  
  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  )
}