import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

      // Set up the global callback function first
      (window as any).googleTranslateElementInit = () => {
        if ((window as any).google && (window as any).google.translate) {
          new (window as any).google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: languages.map(lang => lang.code).join(','),
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = async (languageCode: string) => {
    setIsLoading(true);
    setCurrentLanguage(languageCode);

    try {
      if (languageCode === 'en') {
        // Reset to original language by removing translation
        const translateElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (translateElement) {
          translateElement.value = '';
          translateElement.dispatchEvent(new Event('change'));
        } else {
          window.location.reload();
        }
        setIsLoading(false);
        return;
      }

      // Wait for Google Translate to be ready and trigger translation
      const triggerTranslation = () => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = languageCode;
          const event = new Event('change', { bubbles: true });
          selectElement.dispatchEvent(event);
          setIsLoading(false);
        } else {
          // If Google Translate isn't ready yet, wait and try again
          setTimeout(() => {
            if ((window as any).google && (window as any).google.translate) {
              triggerTranslation();
            } else {
              setTimeout(triggerTranslation, 200);
            }
          }, 100);
        }
      };

      triggerTranslation();
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