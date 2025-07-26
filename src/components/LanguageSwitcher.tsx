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
              multilanguagePage: true,
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
      script.onload = () => {
        // Force initialization after script loads
        if ((window as any).googleTranslateElementInit) {
          (window as any).googleTranslateElementInit();
        }
      };
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
      if (languageCode === 'en') {
        // Reset to original language
        const iframe = document.querySelector('.goog-te-menu-frame');
        if (iframe) {
          const iframeDoc = (iframe as HTMLIFrameElement).contentDocument;
          if (iframeDoc) {
            const originalLink = iframeDoc.querySelector('.goog-te-menu2-item span:first-child') as HTMLElement;
            if (originalLink) {
              originalLink.click();
            }
          }
        }
        // Fallback: reload if direct method fails
        setTimeout(() => {
          if (document.documentElement.classList.contains('translated-ltr') || 
              document.documentElement.classList.contains('translated-rtl')) {
            window.location.reload();
          }
          setIsLoading(false);
        }, 1000);
        return;
      }

      // Trigger translation by finding and clicking the language option
      const waitForTranslateReady = (attempts = 0) => {
        if (attempts > 50) {
          setIsLoading(false);
          return;
        }

        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement && selectElement.options.length > 1) {
          // Find the option for the selected language
          for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].value === languageCode) {
              selectElement.selectedIndex = i;
              selectElement.value = languageCode;
              
              // Trigger change event
              const changeEvent = new Event('change', { bubbles: true });
              selectElement.dispatchEvent(changeEvent);
              
              // Wait for translation to complete
              setTimeout(() => setIsLoading(false), 2000);
              return;
            }
          }
        }
        
        // If not ready, try again
        setTimeout(() => waitForTranslateReady(attempts + 1), 100);
      };

      waitForTranslateReady();
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