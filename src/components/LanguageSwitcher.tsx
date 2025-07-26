import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Google Translate API key - this should be a public/client key
const GOOGLE_TRANSLATE_API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

interface LanguageSwitcherProps {
  className?: string;
}

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
];

const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Google Translate
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = `https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize Google Translate Element
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: languages.map(lang => lang.code).join(','),
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = async (languageCode: string) => {
    setIsLoading(true);
    setCurrentLanguage(languageCode);

    try {
      if (languageCode === 'en') {
        // Reset to original language
        window.location.reload();
        return;
      }

      // Wait for Google Translate to be ready
      const checkGoogleTranslate = () => {
        if ((window as any).google && (window as any).google.translate) {
          const googleTranslateElement = (window as any).google.translate.TranslateElement;
          if (googleTranslateElement) {
            // Trigger translation programmatically
            const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
            if (selectElement) {
              selectElement.value = languageCode;
              selectElement.dispatchEvent(new Event('change'));
            }
          }
          setIsLoading(false);
        } else {
          setTimeout(checkGoogleTranslate, 100);
        }
      };

      checkGoogleTranslate();
    } catch (error) {
      console.error('Translation error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Select value={currentLanguage} onValueChange={handleLanguageChange} disabled={isLoading}>
        <SelectTrigger className="w-32 border-0 bg-transparent hover:bg-accent hover:text-accent-foreground focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="bg-background border border-border shadow-lg">
          {languages.map((language) => (
            <SelectItem 
              key={language.code} 
              value={language.code}
              className="hover:bg-accent hover:text-accent-foreground cursor-pointer"
            >
              <span className="text-sm">
                {language.native}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
};

export default LanguageSwitcher;