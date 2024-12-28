import { useParams, Navigate } from 'react-router-dom';
import { cityContent } from '../data/cityContent';
import { counties } from '../data/cities';
import CityHero from '../components/city/CityHero';
import TrustSignals from '../components/city/TrustSignals';
import CityServices from '../components/city/CityServices';
import ContactForm from '../components/city/ContactForm';
import DocumentHead from '@/components/DocumentHead';
import { normalizeCity } from '../utils/cityContentUtils';
import { useToast } from '@/components/ui/use-toast';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const { toast } = useToast();
  
  if (!city) {
    console.error('No city parameter provided');
    return <Navigate to="/404" replace />;
  }

  const normalizedCity = normalizeCity(city);
  const content = cityContent[normalizedCity];
  
  // Find the original city name from counties data
  const originalCity = Object.values(counties)
    .flat()
    .find(c => normalizeCity(c) === normalizedCity);

  if (!content || !originalCity) {
    console.error('City not found:', city);
    console.error('Normalized city:', normalizedCity);
    
    toast({
      variant: "destructive",
      title: "Sidan hittades inte",
      description: "Vi kunde inte hitta den begärda staden."
    });
    
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <DocumentHead 
        title={`Glasmästare ${originalCity} - Jour öppen 24/7 - På plats inom 2t`}
        description={`Professionell glasmästare i ${originalCity}. Akut glasservice med jour dygnet runt. Vi är på plats inom 2 timmar. Ring 010-555 11 93.`}
      />
      <CityHero 
        cityName={originalCity}
        heroImage={content.heroImage}
      />

      <div className="container mx-auto px-4 py-12">
        <TrustSignals />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2 prose prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-8 max-w-none">
            <h2 className="text-2xl font-bold mb-4">24/7 jourhavande glasmästare i {originalCity}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              {content.description.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  dangerouslySetInnerHTML={{ __html: paragraph.replace(/%city%/g, originalCity) }}
                  className="mb-6"
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-1 space-y-8">
            <ContactForm />
          </div>
        </div>

        <CityServices 
          cityName={originalCity}
          services={content.services}
        />
      </div>
    </div>
  );
};

export default CityPage;