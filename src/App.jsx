import React, { useState, useEffect } from 'react';

// ==========================================
// CONFIGURATION: Wired Google Form URL
// ==========================================
const googleFormLink = "https://docs.google.com/forms/d/10zqcwSmK1-qqFJGBd9L37D1T9-RkmjgjTTBVTFFwZko/viewform";

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Target Date: Sunday, August 16th, 2026 at 10:00 AM (Arrival Time)
  const targetDate = new Date('August 16, 2026 11:00:00').getTime();

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

  // Google Calendar Link Generator
  const getCalendarLink = () => {
    const title = encodeURIComponent("The Rs' Gruhapravesam");
    const dates = "20260816T053000Z/20260816T113000Z"; // Aug 16, 2026 11:00 AM to 5:00 PM IST (UTC: +5:30 -> 5:30 AM to 11:30 AM)
    const details = encodeURIComponent("You are cordially invited to the Gruhapravesam (housewarming ceremony) of Ramasubramanian, Radhika, Rakshanaa, and Rishikesh. Lunch starts at 12:00 PM.");
    const location = encodeURIComponent("C405/406, Folium by Sumadhura, Ramagundanahalli, Borewell Road, Whitefield, Bangalore - 560066");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`;
  };

  return (
    <div className="min-height-screen w-full bg-cream py-4 px-2 md:px-8 relative overflow-hidden flex flex-col justify-between items-center selection:bg-gold selection:text-white">
      
      {/* Background Decorative Mandala Pattern Overlay */}
      <div className="absolute inset-0 mandala-pattern pointer-events-none"></div>

      {/* Main Decorative Frame Container */}
      <main className="relative max-w-2xl w-full bg-[#FAF6F0] border-4 border-gold rounded-3xl p-2 md:p-4 shadow-2xl z-20 animate-fade-in-up mt-6">
        
        {/* Intricate Gold Borders inside card */}
        <div className="absolute inset-1.5 border border-gold opacity-50 rounded-2xl pointer-events-none"></div>
        <div className="absolute inset-2 border-2 border-dashed border-maroon-light opacity-25 rounded-2xl pointer-events-none"></div>

        {/* Row: left tree | content | right tree - trees sit inside the card border */}
        <div className="flex items-end justify-center">

          {/* Left Banana Tree - inside the card border */}
          <img
            src="/left_banana_tree-web.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block h-44 md:h-72 w-auto shrink-0 object-contain self-end pointer-events-none select-none"
          />

          <div className="flex-1 min-w-0 flex flex-col items-center px-2 md:px-6 py-2 md:py-4">

        {/* Lakshmi-Ganesha-Saraswati Trio Banner */}
        <img
          src="/trio-banner.jpg"
          alt="Goddess Lakshmi, Lord Ganesha and Goddess Saraswati"
          className="w-full max-w-[280px] md:max-w-xs rounded-xl border-2 border-gold shadow-md mb-2 select-none"
        />

        {/* Header Transliterated Mantra */}
        <span className="text-xs tracking-[0.25em] font-bold text-maroon mb-2 select-none">|| Shri Ganeshaya Namaha ||</span>

        {/* Sub-photo Devotional Caption & Kuladeivam Mantra - moved up, smaller, refined */}
        <div className="flex flex-col items-center text-center mb-4 max-w-md px-4 select-none">
          <span className="text-[8px] tracking-[0.15em] uppercase font-semibold text-gold/90 mb-0.5">
            || Shri Maha Periyava Sharanam ||
          </span>
          <span className="text-[8.5px] tracking-[0.05em] font-serif font-medium text-stone-500 leading-snug">
            || Sri Poorna Pushkalambal Sametha Hariharaputhra Swamine Namaha ||
          </span>
        </div>

        {/* Double Portrait Image Section (Perfectly Symmetrical & Aligned, No Labels) */}
        <div className="flex justify-center items-center gap-6 mb-4">
          {/* Kanchi Maha Periyava Blessing */}
          <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-gold shadow-md hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/maha-periyava.png" 
              alt="Maha Periyava Blessing" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* New Home Entrance representation */}
          <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-gold shadow-md hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/home-entrance.jpg" 
              alt="Our New Home Entrance" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Headline / Invitation Intro */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold mb-1">We cordially invite you to</p>
          <h1 className="font-serif text-2xl md:text-4xl font-black text-maroon tracking-wide mb-1 leading-tight">
            A New Beginning
          </h1>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-1"></div>
        </div>

        {/* Visual Name Flow Chart - Sized R covering names height */}
        <div className="my-3 py-1 flex items-center justify-center gap-2">
          {/* Big Letter R */}
          <div className="relative flex items-center justify-center">
            <span className="font-serif text-[5rem] md:text-[7rem] font-black text-maroon leading-none select-none">
              R
            </span>
          </div>
          {/* Names flowing from R (No bullet points or dots) */}
          <div className="flex flex-col text-left font-serif text-sm md:text-xl text-stone-700 tracking-wide font-semibold border-l border-gold/40 pl-3 py-0.5 leading-tight md:leading-normal">
            <span>amasubramanian</span>
            <span>adhika</span>
            <span>akshanaa</span>
            <span>ishikesh</span>
          </div>
        </div>

        {/* Main invitation message */}
        <p className="text-center text-xs md:text-sm leading-relaxed text-stone-600 max-w-md mb-3 font-sans px-2">
          With the blessings of our parents, ancestors and the almighty, we are embarking on a new journey in our sweet home. 
          Please join us in celebrating our new abode with your best wishes and share the joy of our new beginnings.
        </p>

        {/* Invitation Details Section */}
        <div className="w-full space-y-2 md:space-y-0 md:grid md:grid-cols-3 md:gap-3 my-3">
          
          {/* Card 1: Date & Time */}
          <div className="bg-[#FAF6F0]/80 border border-gold/30 hover:border-gold rounded-xl p-3 transition-all duration-300 flex items-center md:flex-col text-left md:text-center justify-between md:justify-center">
            <div className="flex items-center md:flex-col gap-3 md:gap-1.5">
              <div className="w-8 h-8 rounded-full bg-maroon/5 flex items-center justify-center text-maroon shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xs md:text-sm font-bold text-maroon">When</h3>
                <p className="font-sans font-bold text-stone-800 text-[11px] md:text-xs">Sunday, Aug 16, 2026</p>
                <p className="text-[9px] text-stone-500">Arrival: 11:00 AM onwards</p>
              </div>
            </div>
            <a 
              href={getCalendarLink()} 
              target="_blank" 
              rel="noreferrer" 
              className="text-[10px] text-gold hover:text-maroon font-semibold underline shrink-0 ml-2 md:ml-0 md:mt-2"
            >
              Add to Calendar
            </a>
          </div>

          {/* Card 2: Location */}
          <div className="bg-[#FAF6F0]/80 border border-gold/30 hover:border-gold rounded-xl p-3 transition-all duration-300 flex items-center md:flex-col text-left md:text-center justify-between md:justify-center">
            <div className="flex items-center md:flex-col gap-3 md:gap-1.5">
              <div className="w-8 h-8 rounded-full bg-maroon/5 flex items-center justify-center text-maroon shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xs md:text-sm font-bold text-maroon">Where</h3>
                <p className="text-stone-800 text-[11px] md:text-xs font-semibold leading-tight">Folium by Sumadhura</p>
                <p className="text-[9px] text-stone-500 leading-snug">C405/406, Whitefield, Bangalore</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Folium+by+Sumadhura/@12.966449,77.7388784,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1200d13bc5b7:0x84c71e19f65e9ba2!8m2!3d12.9664438!4d77.7434918!16s%2Fg%2F11kc8p1pyh?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-gold hover:text-maroon font-semibold underline shrink-0 ml-2 md:ml-0 md:mt-2"
            >
              Google Maps Link
            </a>
          </div>

          {/* Card 3: Lunch */}
          <div className="bg-[#FAF6F0]/80 border border-gold/30 hover:border-gold rounded-xl p-3 transition-all duration-300 flex items-center md:flex-col text-left md:text-center justify-between md:justify-center">
            <div className="flex items-center md:flex-col gap-3 md:gap-1.5">
              <div className="w-14 h-8 rounded-full bg-maroon/5 flex items-center justify-center text-maroon shrink-0 overflow-hidden">
                <svg viewBox="0 0 140 60" className="w-12 h-6" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8BC34A" />
                      <stop offset="55%" stopColor="#5B8C3E" />
                      <stop offset="100%" stopColor="#3F6B2A" />
                    </linearGradient>
                  </defs>
                  <path d="M8 30 Q20 6 70 6 Q120 6 132 30 Q120 54 70 54 Q20 54 8 30 Z" fill="url(#leafGrad)" stroke="#2F4F1D" strokeWidth="1" />
                  <path d="M12 30 L128 30" stroke="#C8E6A0" strokeWidth="1.2" opacity="0.6" />
                  <ellipse cx="55" cy="30" rx="14" ry="9" fill="#FFF8E7" stroke="#E8D9B5" strokeWidth="0.5" />
                  <circle cx="28" cy="21" r="3.5" fill="#D2691E" />
                  <circle cx="28" cy="39" r="3.5" fill="#C0392B" />
                  <circle cx="90" cy="19" r="3.5" fill="#E8A33D" />
                  <circle cx="95" cy="41" r="3.5" fill="#8B5E3C" />
                  <circle cx="112" cy="30" r="3" fill="#F1C40F" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xs md:text-sm font-bold text-maroon">Lunch</h3>
                <p className="text-[9px] text-stone-500">Club House Deck Area (2nd Floor), 12:00 PM onwards</p>
              </div>
            </div>
            <span className="text-[9px] font-bold text-green-700 uppercase tracking-wider shrink-0 ml-2 md:ml-0 md:mt-2 select-none">
              Tamil Style
            </span>
          </div>

        </div>

        {/* Compact Countdown Timer Bar */}
        <div className="w-full max-w-sm bg-maroon/5 border border-gold/30 rounded-xl py-2 px-4 mb-4 text-center">
          <span className="text-[9px] uppercase tracking-widest font-bold text-maroon block mb-1">Countdown to Celebration</span>
          <div className="flex justify-center gap-6 text-stone-800 font-serif font-black text-sm">
            <div>{timeLeft.days}d</div>
            <div>{timeLeft.hours}h</div>
            <div>{timeLeft.minutes}m</div>
            <div>{timeLeft.seconds}s</div>
          </div>
        </div>

        {/* Action / RSVP Button */}
        <div className="flex flex-col items-center w-full mb-2">
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-maroon border-2 border-gold text-cream font-bold text-base rounded-full hover:bg-maroon-dark hover:border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer animate-glow-gold"
          >
            <span>RSVP Here</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

          </div>

          {/* Right Banana Tree - inside the card border */}
          <img
            src="/right_banana_tree-web.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block h-44 md:h-72 w-auto shrink-0 object-contain self-end pointer-events-none select-none"
          />

        </div>

      </main>

      {/* Footer Text */}
      <footer className="w-full text-center py-4 z-20">
        <p className="text-[11px] tracking-wider text-stone-500 font-serif italic">
          "Athithi Devo Bhava" — We look forward to welcoming you to our new abode.
        </p>
      </footer>
    </div>
  );
}

export default App;
