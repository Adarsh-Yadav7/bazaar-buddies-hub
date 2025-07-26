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
        // Wait for the Google Translate API to be fully loaded
        const initTranslate = () => {
          if ((window as any).google && 
              (window as any).google.translate && 
              (window as any).google.translate.TranslateElement) {
            try {
              new (window as any).google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: languages.map(lang => lang.code).join(','),
                layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true,
              }, 'google_translate_element');
            } catch (error) {
              console.error('Error initializing Google Translate:', error);
              // Retry after a short delay
              setTimeout(initTranslate, 500);
            }
          } else {
            // If API not ready, retry
            setTimeout(initTranslate, 200);
          }
        };
        
        initTranslate();
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    // Clean up any existing translate elements
    const existingElements = document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame');
    existingElements.forEach(el => el.remove());

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = async (languageCode: string) => {
    setIsLoading(true);
    setCurrentLanguage(languageCode);

    try {
      // Wait for Google Translate to be ready
      const waitForGoogleTranslate = (callback: () => void, attempts = 0) => {
        if (attempts > 100) {
          console.error('Google Translate not available after 10 seconds');
          setIsLoading(false);
          return;
        }

        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement && selectElement.options && selectElement.options.length > 1) {
          callback();
        } else {
          setTimeout(() => waitForGoogleTranslate(callback, attempts + 1), 100);
        }
      };

      if (languageCode === 'en') {
        // Reset to original language
        waitForGoogleTranslate(() => {
          const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
          if (selectElement) {
            selectElement.value = '';
            selectElement.selectedIndex = 0;
            const event = new Event('change', { bubbles: true });
            selectElement.dispatchEvent(event);
            
            // Wait for translation to complete
            setTimeout(() => {
              setIsLoading(false);
            }, 1500);
          }
        });
        return;
      }

      // Trigger translation to selected language
      waitForGoogleTranslate(() => {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement) {
          // Find the correct option for the language
          let found = false;
          for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value === languageCode) {
              selectElement.selectedIndex = i;
              selectElement.value = languageCode;
              
              const event = new Event('change', { bubbles: true });
              selectElement.dispatchEvent(event);
              
              found = true;
              break;
            }
          }
          
          if (!found) {
            console.error(`Language ${languageCode} not found in options`);
          }
          
          // Wait for translation to complete
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      });
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