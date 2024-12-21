import DocumentHead from '@/components/DocumentHead';
import PageHeader from '@/components/PageHeader';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <DocumentHead 
        title="Integritetspolicy | Glas24"
        description="Läs om hur Glas24 hanterar dina personuppgifter och cookies."
      />
      <PageHeader
        title="Integritetspolicy"
        description="Information om hur vi hanterar dina personuppgifter"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <h2>Integritetspolicy för Glas24</h2>
          <p>Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>
          
          <h3>1. Insamling av information</h3>
          <p>Vi samlar in information när du:</p>
          <ul>
            <li>Besöker vår webbplats</li>
            <li>Fyller i våra kontaktformulär</li>
            <li>Ringer till oss</li>
          </ul>

          <h3>2. Användning av information</h3>
          <p>Den information vi samlar in används för att:</p>
          <ul>
            <li>Förbättra vår service</li>
            <li>Kontakta dig angående tjänster</li>
            <li>Skicka information du har begärt</li>
          </ul>

          <h3>3. Cookies</h3>
          <p>Vi använder cookies för att:</p>
          <ul>
            <li>Förbättra användarupplevelsen</li>
            <li>Analysera trafik på webbplatsen</li>
            <li>Anpassa innehåll och annonser</li>
          </ul>

          <h3>4. Delning av information</h3>
          <p>Vi säljer, handlar eller på annat sätt överför inte din personligt identifierbara information till utomstående parter.</p>

          <h3>5. Kontakta oss</h3>
          <p>Om du har några frågor om denna integritetspolicy, vänligen kontakta oss på:</p>
          <ul>
            <li>E-post: info@glas24.se</li>
            <li>Telefon: 010-555 11 93</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;