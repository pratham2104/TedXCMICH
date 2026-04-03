import { leads } from "@/content.config";
import LeadCard from "./LeadCard";

export default function Leads() {
  return (
    <section className="py-32 px-8 bg-surface-2">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-ted-red text-xs font-bold tracking-[0.3em] uppercase mb-4 font-body">
            The People Who Made It Happen
          </p>
          <h2 className="font-headline text-7xl md:text-8xl">MEET THE LEADS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {leads.map((lead, i) => (
            <LeadCard key={lead.id} lead={lead} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
