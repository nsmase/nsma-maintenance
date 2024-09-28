import { useContext } from 'react';
import { ContentContext } from './ContentProvider';
import { Mail, Building } from 'lucide-react';
import nsmaLogo from './assets/nsma.svg';
import './App.css';

export default function App() {
  const { content, contactInfo } = useContext(ContentContext);
  const t = content;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md mx-auto text-center space-y-8">
          <img src={nsmaLogo} alt="Company Logo" width={150} height={150} className="mx-auto" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.message}</p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                <span className="sr-only">{t.email}:</span> {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Building className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <span className="text-gray-600">
                <span className="sr-only">{t.orgNumber}:</span> {contactInfo.orgNumber}
              </span>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-gray-500">
        {`© ${new Date().getFullYear()} `}
        {t.footer}
      </footer>
    </div>
  );
}
