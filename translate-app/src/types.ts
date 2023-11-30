import { Dispatch, SetStateAction } from "react";

export interface Context {
  setTranslation: Dispatch<SetStateAction<string>>
  setTranslateTo: Dispatch<SetStateAction<string>>
  setTranslateFrom: Dispatch<SetStateAction<string>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setText: Dispatch<SetStateAction<string>>
  translation: string
  translateTo: string
  translateFrom: string
  loading: boolean
  text: string
}