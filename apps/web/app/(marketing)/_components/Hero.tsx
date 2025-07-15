import { CTAButton } from "@justdiego/ui/button";

export default function Hero() {
  return (
    <main className="flex-1 flex items-center justify-center w-full relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 leading-tight">
          SOLUTIONS FOR YOUR BUSINESS
        </h1>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Turning hours into minutes, automate your business & stop wasting money.
        </p>
        
        {/* Powered by */}
        <p className="text-sm text-gray-600 mb-12">
          Powered by Diego Rodriguez
        </p>
        
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton 
          href="/solutions"
          >
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
              <rect x="3" y="3" width="6" height="6" rx="1" fill="white" />
              <rect x="13" y="3" width="6" height="6" rx="1" fill="white" />
              <rect x="3" y="13" width="6" height="6" rx="1" fill="white" />
              <rect x="13" y="13" width="6" height="6" rx="1" fill="white" />
              <rect x="8" y="8" width="6" height="6" rx="1" fill="white" />
            </svg>
            SOLUTIONS
          </CTAButton>
          <CTAButton
          href="/contact" 
            variant="secondary"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="5" width="14" height="12" rx="2" stroke="black" strokeWidth="2" />
              <rect x="3" y="8" width="14" height="1.5" fill="black" />
              <rect x="6" y="2" width="2" height="4" rx="1" fill="black" />
              <rect x="12" y="2" width="2" height="4" rx="1" fill="black" />
            </svg>
            GET A FREE AUDIT
          </CTAButton>
        </div>
        
        {/* Process Steps */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center font-mono text-xs sm:text-sm text-gray-500 gap-2 sm:gap-8 tracking-wide sm:tracking-widest">
            <div className="text-center">
              <div>1. Identify</div>
              <div className="block sm:hidden text-xs mt-1">↓</div>
            </div>
            <span className="hidden sm:inline mx-2">→</span>
            <div className="text-center">
              <div>2. Deliver</div>
              <div className="block sm:hidden text-xs mt-1">↓</div>
            </div>
            <span className="hidden sm:inline mx-2">→</span>
            <div className="text-center">
              <div>3. Automate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ghost Link - Positioned at bottom */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <a 
          href="#solutions" 
          className="text-sm text-gray-500 hover:text-gray-700 font-mono transition-colors duration-200"
        >
          ↓ Take a look
        </a>
      </div>
    </main>
  );
}
