
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Footer from '../components/Footer';
import KonamiCode from '../components/KonamiCode';
import CTA from '../components/CTA';


export default function HomePage() {
  return (
    <div className="min-h-screen pixel-gradient flex flex-col">
      <div className="min-h-screen w-full flex-1 flex flex-col items-center justify-center px-16 lg:px-24">
        <Hero />
      </div>
      
      <div className=" bg-white">
        <Solutions />
      </div>

      <CTA/>

      {/* Solutions Section */}
      
      <div className="w-full flex flex-col items-center justify-center px-16 lg:px-24">
        <Footer />
      </div>

    <KonamiCode/>

    </div>
  );
}
