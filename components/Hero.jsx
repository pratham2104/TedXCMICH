import { siteConfig } from "@/content.config";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-8 brutalist-grid overflow-hidden">
      <div className="absolute inset-0 red-radial pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-4">
          <span className="bg-ted-red h-px w-12" />
          <span className="text-ted-red text-xs font-bold tracking-[0.3em] uppercase font-body">
            {siteConfig.edition} · {siteConfig.year}
          </span>
        </div>

        {/* Hero headline */}
        <h1 className="font-headline text-[15vw] md:text-[12rem] leading-[0.8] mb-8 select-none">
          IDEAS <br />
          <span className="text-ted-red">WORTH</span> <br />
          SPREADING
        </h1>

        {/* Theme */}
        <div className="mb-12">
          <h2 className="font-headline text-4xl md:text-6xl text-white/50 tracking-wider">
            {siteConfig.theme ? siteConfig.theme.toUpperCase() : "[THEME COMING SOON]"}
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 py-8 border-y border-white/10">
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-body font-bold">Date</p>
            <p className="font-headline text-2xl">{siteConfig.date}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-body font-bold">Venue</p>
            <p className="font-headline text-2xl">{siteConfig.venue}</p>
          </div>
          <div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-body font-bold">Speakers</p>
            <p className="font-headline text-2xl">8 Confirmed</p>
          </div>
          <Countdown />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-6">
          <a href="#speakers"
            className="bg-ted-red text-white font-body font-bold text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-ted-red transition-all rounded-xl">
            MEET THE SPEAKERS
          </a>
          <a href="#archive"
            className="border border-ted-red text-white font-body font-bold text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-ted-red transition-all rounded-xl">
            PAST EVENTS
          </a>
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none select-none">
        <span className="font-headline text-[25rem] text-white">{siteConfig.year}</span>
      </div>
    </section>
  );
}
