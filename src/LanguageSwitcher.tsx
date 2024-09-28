import { useContext } from 'react';
import { ContentContext } from './ContentProvider';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useContext(ContentContext);

  return (
    <div className="flex justify-center gap-2 fixed right-2 top-2 z-50">
      <button
        onClick={() => setLanguage('sv')}
        className="px-4 py-2 bg-gray-300 text-white rounded transition-colors disabled:opacity-50"
        disabled={language === 'sv'}
      >
        🇸🇪{' '}
      </button>
      <button
        onClick={() => setLanguage('en')}
        className="px-4 py-2 bg-gray-300 text-white rounded transition-colors disabled:opacity-50"
        disabled={language === 'en'}
      >
        🇬🇧{' '}
      </button>
    </div>
  );
}
