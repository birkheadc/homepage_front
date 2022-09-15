import LanguageWrapper from "./LanguageWrapper";

function getLanguages(): LanguageWrapper[] {
    return [
        {
            code: 'en',
            label: 'English'
        },
        {
            code: 'jp',
            label: '日本語'
        }
    ]
}

function handleChangeLanguage(code: string): void {
    const language: string | undefined = getLanguages().find(l => l.code === code)?.label;
    if (language) {
      console.log("Change language to: " + language);
    }
  }

const Language = {
    getLanguages,
    handleChangeLanguage
}

export default Language;