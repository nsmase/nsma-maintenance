import { createContext, useState } from 'react';

export const ContentContext = createContext<{
  language: 'sv' | 'en';
  setLanguage: (language: 'sv' | 'en') => void;
  content: {
    title: string;
    message: string;
    email: string;
    orgNumber: string;
    footer: string;
    toggleLanguage: string;
  };
  contactInfo: {
    email: string;
    orgNumber: string;
  };
}>({
  language: 'sv',
  setLanguage: () => {},
  content: {
    title: 'Vi kommer snart tillbaka!',
    message: 'Vi genomgår för närvarande underhåll. Tack för ditt tålamod.',
    email: 'E-post',
    orgNumber: 'Organisationsnummer',
    footer: 'Nätverket för spinal muskelatrofi. Alla rättigheter förbehållna.',
    toggleLanguage: 'Switch to English',
  },
  contactInfo: {
    email: 'info@nsma.se',
    orgNumber: '802475-2332',
  },
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'sv' | 'en'>('sv');

  const content = {
    sv: {
      title: 'Vi kommer snart tillbaka!',
      message: 'Vi genomgår för närvarande underhåll. Tack för ditt tålamod.',
      email: 'E-post',
      orgNumber: 'Organisationsnummer',
      footer: 'Nätverket för spinal muskelatrofi. Alla rättigheter förbehållna.',
      toggleLanguage: 'Switch to English',
    },
    en: {
      title: "We'll be back soon!",
      message: "We're currently undergoing maintenance. Thank you for your patience.",
      email: 'Email',
      orgNumber: 'Organization Number',
      footer: 'Nätverket för spinal muskelatrofi. All rights reserved.',
      toggleLanguage: 'Byt till svenska',
    },
  };

  const contactInfo = {
    email: 'info@nsma.se',
    orgNumber: '802475-2332',
  };

  return (
    <ContentContext.Provider
      value={{
        language,
        setLanguage,
        content: content[language],
        contactInfo,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}
