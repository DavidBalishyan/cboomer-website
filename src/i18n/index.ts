import {
  createContextId,
  useContext,
  type Signal,
} from '@builder.io/qwik'
import { en, type Translation } from './en'
import { ru } from './ru'
import { fr } from './fr'
import { hy } from './hy'
import { de } from './de'

export type Language = 'en' | 'de' | 'ru' | 'fr' | 'hy'

export const languages: Language[] = ['en', 'de', 'ru', 'fr', 'hy']

export const languageNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
  fr: 'Français',
  hy: 'Հայերեն',
}

export const languageShort: Record<Language, string> = {
  en: 'EN',
  de: 'DE',
  ru: 'RU',
  fr: 'FR',
  hy: 'HY',
}

export const LanguageContext = createContextId<Signal<Language>>(
  'cboomer.language',
)

export const dictionaries: Record<Language, Translation> = { en, de, ru, fr, hy }

export const STORAGE_KEY = 'cboomer-language'

export function isLanguage(value: string | null): value is Language {
  return value === 'en' || value === 'de' || value === 'ru' || value === 'fr' || value === 'hy'
}

export function getInitialLanguage(): Language {
  if (typeof localStorage === 'undefined') return 'en'
  const saved = localStorage.getItem(STORAGE_KEY)
  return isLanguage(saved) ? saved : 'en'
}

export const useLanguage = (): Signal<Language> => useContext(LanguageContext)

