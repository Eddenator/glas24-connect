import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm mr-4">
          Vi använder cookies för att förbättra din upplevelse på vår webbplats.
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-colors"
          >
            Acceptera
          </button>
          <button
            onClick={handleAccept}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Stäng"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;