import Image from "next/image";
import { archive } from "@/content.config";

export default function Archive() {
  return (
    <section className="py-32 px-8 bg-background brutalist-grid" id="archive">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-right">
          <p className="text-ted-red text-xs font-bold tracking-[0.3em] uppercase mb-4 font-body">
            Past Chapters
          </p>
          <h2 className="font-headline text-7xl md:text-9xl">THE ARCHIVE</h2>
        </div>

        <div className="space-y-12">
          {archive.map((event) => (
            <div
              key={event.year}
              className="group relative flex flex-col md:flex-row gap-12 items-center p-12 liquid-glass border border-white/5 hover:border-ted-red transition-all duration-500 cursor-pointer rounded-3xl overflow-hidden"
            >
              {/* Background year watermark */}
              <div className="font-headline text-[12rem] leading-none opacity-5 group-hover:opacity-10 absolute -left-10 top-0 transition-opacity pointer-events-none select-none">
                {event.year}
              </div>

              {/* Theme + badge */}
              <div className="w-full md:w-1/3 z-10">
                <h4 className="font-headline text-5xl mb-4 leading-none">
                  {event.theme.toUpperCase()}
                </h4>
                {event.soldOut ? (
                  <span className="bg-ted-red text-white px-4 py-1.5 text-xs font-bold rounded-full font-body">
                    SOLD OUT
                  </span>
                ) : (
                  <span className="border border-white/20 text-white/40 px-4 py-1.5 text-xs font-bold rounded-full font-body">
                    [Theme TBD]
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="flex-1 text-white/70 z-10 font-body text-base leading-relaxed">
                <p>{event.description}</p>
              </div>

              {/* Image */}
              {event.image && (
                <div className="w-full md:w-64 aspect-video overflow-hidden rounded-2xl shadow-xl relative flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={`${event.year} TEDxCMICH event`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700"
                    sizes="256px"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
