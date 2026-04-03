import { speakers } from "@/content.config";
import SpeakerCard from "./SpeakerCard";

export default function Speakers() {
  return (
    <section className="py-32 px-8 bg-surface" id="speakers">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-ted-red text-xs font-bold tracking-[0.3em] uppercase mb-4 font-body">
            2026 Lineup
          </p>
          <h2 className="font-headline text-7xl md:text-9xl">
            THIS YEAR&apos;S<br />SPEAKERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
