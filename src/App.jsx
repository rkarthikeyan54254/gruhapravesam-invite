import React, { useState, useEffect } from 'react';

// ==========================================
// CONFIGURATION: Drop your Google Form URL here
// ==========================================
const googleFormLink = "PASTE_YOUR_GOOGLE_FORM_URL_HERE";

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showRsvpFeedback, setShowRsvpFeedback] = useState(false);

  // Target Date: Sunday, August 16th, 2026 at 10:00 AM (Arrival Time)
  const targetDate = new Date('August 16, 2026 10:00:00').getTime();

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleRsvpClick = (e) => {
    if (googleFormLink === "PASTE_YOUR_GOOGLE_FORM_URL_HERE" || !googleFormLink) {
      e.preventDefault();
      setShowRsvpFeedback(true);
    }
  };

  // Google Calendar Link Generator
  const getCalendarLink = () => {
    const title = encodeURIComponent("The Rs' Gruhapravesam");
    const dates = "20260816T043000Z/20260816T100000Z"; // Aug 16, 2026 10:00 AM to 3:30 PM IST (UTC: +5:30 -> 4:30 AM to 10:00 AM)
    const details = encodeURIComponent("You are cordially invited to the Gruhapravesam (housewarming ceremony) of Ramasubramanian, Radhika, Rakshanaa, and Rishikesh. Lunch starts at 12:00 PM.");
    const location = encodeURIComponent("C405/406, Folium by Sumadhura, Ramagundanahalli, Borewell Road, Whitefield, Bangalore - 560066");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`;
  };

  return (
    <div className="min-height-screen w-full bg-cream py-8 px-4 md:px-8 relative overflow-hidden flex flex-col justify-between items-center selection:bg-gold selection:text-white">
      
      {/* Background Decorative Mandala Pattern Overlay */}
      <div className="absolute inset-0 mandala-pattern pointer-events-none"></div>

      {/* Decorative Traditional Mango Leaves & Marigold Garland (Toran) at the top */}
      <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden pointer-events-none flex justify-center z-10">
        <svg className="w-full max-w-5xl h-8 text-gold" viewBox="0 0 1000 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Hanging string */}
          <path d="M0,5 Q250,25 500,5 Q750,25 1000,5" stroke="currentColor" strokeWidth="2" fill="none" />
          
          {/* Alternating Hanging Mango Leaves (Green) and Marigold Flowers (Gold/Orange) */}
          {[...Array(15)].map((_, i) => {
            const x = 30 + i * 67;
            const yOffset = 5 + Math.sin((x / 1000) * Math.PI) * 10;
            return (
              <g key={i} transform={`translate(${x}, ${yOffset})`}>
                {/* Mango Leaf */}
                <path d="M-10,0 C-10,20 -2,35 0,40 C2,35 10,20 10,0 Z" fill="#2d6a4f" opacity="0.95" />
                <path d="M0,0 L0,38" stroke="#1b4332" strokeWidth="1" />
                {/* Marigold Flower */}
                <circle cx="0" cy="0" r="8" fill="#e65100" />
                <circle cx="0" cy="0" r="6" fill="#ffb300" />
                <circle cx="0" cy="0" r="3" fill="#ffeb3b" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Main Decorative Frame Container */}
      <main className="relative max-w-3xl w-full bg-[#FAF6F0] border-4 border-gold rounded-3xl p-6 md:p-12 shadow-2xl z-20 animate-fade-in-up mt-8 flex flex-col items-center">
        
        {/* Intricate Gold Borders inside card */}
        <div className="absolute inset-2 border border-gold opacity-50 rounded-2xl pointer-events-none"></div>
        <div className="absolute inset-3 border-2 border-dashed border-maroon-light opacity-25 rounded-2xl pointer-events-none"></div>

        {/* Traditional Corner Accents (Kolam style SVGs) */}
        <div className="absolute top-4 left-4 w-12 h-12 text-gold opacity-80 pointer-events-none">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0,0 Q10,10 20,0 Q30,10 40,0 M0,0 Q10,10 0,20 Q10,30 0,40" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 text-gold opacity-80 pointer-events-none transform rotate-90">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0,0 Q10,10 20,0 Q30,10 40,0 M0,0 Q10,10 0,20 Q10,30 0,40" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 w-12 h-12 text-gold opacity-80 pointer-events-none transform -rotate-90">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0,0 Q10,10 20,0 Q30,10 40,0 M0,0 Q10,10 0,20 Q10,30 0,40" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-4 right-4 w-12 h-12 text-gold opacity-80 pointer-events-none transform rotate-180">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M0,0 Q10,10 20,0 Q30,10 40,0 M0,0 Q10,10 0,20 Q10,30 0,40" />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Auspicious Opening Icon (Ganesha/Kalasam Motif) */}
        <div className="mb-6 flex flex-col items-center">
          <svg className="w-16 h-16 text-maroon animate-float" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Elegant simplified Kalasam Outline */}
            <path d="M35 70 C35 55 42 50 50 50 C58 50 65 55 65 70 C65 80 58 85 50 85 C42 85 35 80 35 70 Z" fill="#8B0000" stroke="#B8860B" strokeWidth="2" />
            {/* Coconut */}
            <path d="M40 52 L50 35 L60 52 Z" fill="#B8860B" stroke="#B8860B" strokeWidth="1.5" />
            {/* Mango Leaves */}
            <path d="M32 55 C37 45 42 45 44 51 Z" fill="#2d6a4f" />
            <path d="M68 55 C63 45 58 45 56 51 Z" fill="#2d6a4f" />
            <path d="M48 45 C48 30 52 30 52 45 Z" fill="#2d6a4f" />
            {/* Pot Neck / Thread */}
            <path d="M33 60 H67" stroke="#B8860B" strokeWidth="3" />
            {/* Swastik / Auspicious sign on Pot */}
            <path d="M47 65 V75 M53 65 V75 M45 68 H55 M45 72 H55" stroke="#FAF6F0" strokeWidth="1.5" strokeLinecap="round" />
            {/* Aura Halo */}
            <circle cx="50" cy="58" r="30" stroke="#B8860B" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
          </svg>
          {/* Subtle Devotional Text */}
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gold mt-2">|| श्री गणेशाय नमः ||</span>
        </div>

        {/* Headline / Invitation Intro */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-2">We cordially invite you to</p>
          <h1 className="font-serif text-3xl md:text-5xl font-black text-maroon tracking-wide mb-3 leading-tight">
            The Rs' Gruhapravesam
          </h1>
          <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-3"></div>
          
          {/* Family Names list */}
          <p className="font-serif italic text-lg md:text-xl text-stone-700 tracking-wide mt-2">
            Ramasubramanian, Radhika, Rakshanaa &amp; Rishikesh
          </p>
        </div>

        {/* Main invitation message */}
        <p className="text-center text-sm md:text-base leading-relaxed text-stone-600 max-w-xl mb-8 font-sans px-4">
          With the blessings of our ancestors and the almighty, we are embarking on a new journey in our sweet home. 
          Please join us in celebrating our housewarming ceremony and share the joy of our new beginnings.
        </p>

        {/* Twin Flickering Deepam (Lamps) layout */}
        <div className="flex justify-between items-center w-full max-w-md px-6 my-2">
          {/* Left Lamp */}
          <div className="flex flex-col items-center">
            <svg className="w-10 h-8 text-gold" viewBox="0 0 50 45" fill="none">
              {/* Flame */}
              <path className="animate-pulse" d="M25 5 C25 5 18 20 25 28 C32 20 25 5 25 5 Z" fill="#ff9100" opacity="0.9" />
              <path className="animate-ping" d="M25 8 C25 8 20 18 25 24 C30 18 25 8 25 8 Z" fill="#ffeb3b" opacity="0.6" style={{ transformOrigin: 'center 20px' }} />
              {/* Base Cup */}
              <path d="M5 30 C5 30 10 42 25 42 C40 42 45 30 45 30 H5 Z" fill="#8B0000" stroke="#B8860B" strokeWidth="1.5" />
              <path d="M25 28 V30" stroke="#B8860B" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gold border-y border-gold/30 py-1 px-4">
            Auspicious Beginnings
          </div>

          {/* Right Lamp */}
          <div className="flex flex-col items-center">
            <svg className="w-10 h-8 text-gold" viewBox="0 0 50 45" fill="none">
              {/* Flame */}
              <path className="animate-pulse" d="M25 5 C25 5 18 20 25 28 C32 20 25 5 25 5 Z" fill="#ff9100" opacity="0.9" />
              <path className="animate-ping" d="M25 8 C25 8 20 18 25 24 C30 18 25 8 25 8 Z" fill="#ffeb3b" opacity="0.6" style={{ transformOrigin: 'center 20px' }} />
              {/* Base Cup */}
              <path d="M5 30 C5 30 10 42 25 42 C40 42 45 30 45 30 H5 Z" fill="#8B0000" stroke="#B8860B" strokeWidth="1.5" />
              <path d="M25 28 V30" stroke="#B8860B" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Invitation Details Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          
          {/* Card 1: Date & Time */}
          <div className="bg-[#FAF6F0] border border-gold/40 hover:border-gold rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-maroon/5 flex items-center justify-center text-maroon mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-maroon mb-2">When</h3>
            <p className="font-sans font-bold text-stone-800 text-sm">Sunday, Aug 16, 2026</p>
            <p className="text-xs text-stone-500 mt-1">Arrival: 10:00 AM onwards</p>
            
            <a 
              href={getCalendarLink()} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-3 text-xs text-gold hover:text-maroon font-semibold underline flex items-center gap-1 cursor-pointer transition-colors"
            >
              Add to Calendar
            </a>
          </div>

          {/* Card 2: Location */}
          <div className="bg-[#FAF6F0] border border-gold/40 hover:border-gold rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-maroon/5 flex items-center justify-center text-maroon mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-maroon mb-2">Where</h3>
            <p className="text-stone-800 text-xs font-semibold leading-tight">
              C405/406, Folium by Sumadhura
            </p>
            <p className="text-[11px] text-stone-500 mt-1 leading-snug">
              Ramagundanahalli, Borewell Road, Whitefield, Bangalore - 560066
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Folium+by+Sumadhura+Borewell+Road+Whitefield+Bangalore"
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-3 text-xs text-gold hover:text-maroon font-semibold underline flex items-center gap-1 cursor-pointer transition-colors"
            >
              Google Maps Link
            </a>
          </div>

          {/* Card 3: Feast / Lunch */}
          <div className="bg-[#FAF6F0] border border-gold/40 hover:border-gold rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-maroon/5 flex items-center justify-center text-maroon mb-4">
              {/* Custom Banana Leaf / Feast plate illustration */}
              <svg className="w-6 h-6 text-maroon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0-4.5 4-8 9-8s9 3.5 9 8-4 8-9 8-9-3.5-9-8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M8 8h8M6 12h12M8 16h8" opacity="0.3" />
                <path d="M10 9s1 2 2 2 2-2 2-2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-maroon mb-2">Feast</h3>
            <p className="font-sans font-bold text-stone-800 text-sm">Elai Sappadu</p>
            <p className="text-[11px] text-stone-500 mt-1 leading-snug">
              Club House Deck<br />12:00 PM onwards
            </p>
            <span className="mt-3 text-[10px] uppercase font-bold text-green-700 tracking-wider">
              Traditional Style
            </span>
          </div>

        </div>

        {/* Dynamic Countdown Timer Section */}
        <div className="w-full bg-maroon text-cream rounded-2xl p-4 md:p-6 mb-8 shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:12px_12px] opacity-30 pointer-events-none"></div>
          
          <h4 className="text-center text-xs uppercase tracking-[0.25em] font-semibold text-gold-light mb-4">
            Countdown to Celebration
          </h4>
          
          <div className="grid grid-cols-4 gap-2 text-center max-w-sm mx-auto">
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-black text-white font-serif">{timeLeft.days}</span>
              <span className="text-[9px] uppercase tracking-widest text-gold-light mt-1">Days</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-black text-white font-serif">{timeLeft.hours}</span>
              <span className="text-[9px] uppercase tracking-widest text-gold-light mt-1">Hours</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-black text-white font-serif">{timeLeft.minutes}</span>
              <span className="text-[9px] uppercase tracking-widest text-gold-light mt-1">Min</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-3xl font-black text-white font-serif">{timeLeft.seconds}</span>
              <span className="text-[9px] uppercase tracking-widest text-gold-light mt-1">Sec</span>
            </div>
          </div>
        </div>

        {/* Action / RSVP Button */}
        <div className="flex flex-col items-center w-full mb-4">
          <a
            href={googleFormLink === "PASTE_YOUR_GOOGLE_FORM_URL_HERE" ? "#" : googleFormLink}
            onClick={handleRsvpClick}
            target={googleFormLink === "PASTE_YOUR_GOOGLE_FORM_URL_HERE" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="px-10 py-4 bg-maroon border-2 border-gold text-cream font-bold text-lg rounded-full hover:bg-maroon-dark hover:border-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer animate-glow-gold"
          >
            <span>RSVP Here</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Feedback UI when URL is not configured yet */}
          {showRsvpFeedback && (
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-300 rounded-xl text-stone-800 text-xs max-w-md text-center transition-all animate-bounce">
              <p className="font-bold text-maroon mb-1">🔗 Developer Note (RSVP Link Pending)</p>
              <p className="text-stone-600">
                To connect your Google Form, open <code className="bg-stone-200 px-1 py-0.5 rounded text-red-600 font-mono text-[11px]">src/App.jsx</code> and replace the value of <code className="bg-stone-200 px-1 py-0.5 rounded text-red-600 font-mono text-[11px]">googleFormLink</code> at the top with your URL!
              </p>
              <button 
                onClick={() => setShowRsvpFeedback(false)} 
                className="mt-2 text-gold hover:text-maroon underline font-semibold text-[10px]"
              >
                Dismiss Warning
              </button>
            </div>
          )}
        </div>

      </main>

      {/* Footer Text */}
      <footer className="w-full text-center py-6 mt-8 z-20">
        <p className="text-xs tracking-wider text-stone-500 font-serif italic">
          "Athithi Devo Bhava" — We look forward to welcoming you to our new abode.
        </p>
        <p className="text-[10px] text-stone-400 mt-2 font-mono">
          Made with ♥ for The Rs' Family
        </p>
      </footer>
    </div>
  );
}

export default App;
