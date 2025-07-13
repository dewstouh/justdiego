
import CTA from './(marketing)/_components/CTA';
import Hero from './(marketing)/_components/Hero';
import Solutions from './(marketing)/_components/Solutions';


export default function HomePage() {
  return (
    <div className="min-h-screen pixel-gradient flex flex-col">
      <div className="min-h-screen w-full flex-1 flex flex-col items-center justify-center px-8 lg:px-24">
        <Hero />
      </div>
      
      <div className=" bg-white">
        <Solutions />
      </div>

      <CTA/>

    </div>
  );
}
