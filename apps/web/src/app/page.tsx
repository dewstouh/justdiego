
import CTA from '@/app/(marketing)/_components/CTA';
import Hero from '@/app/(marketing)/_components/Hero';
import Solutions from '@/app/(marketing)/_components/SolutionsSection';


export default async function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Solutions />
      <CTA />
    </div>
  );
}
