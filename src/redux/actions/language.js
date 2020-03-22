import { LANGUAGE_CHANGE } from "./actionTypes";

export const changeLanguage = (lang) => {
    return {
        type: LANGUAGE_CHANGE,
        lang: lang
      }
}