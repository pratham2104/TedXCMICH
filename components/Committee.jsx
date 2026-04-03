"use client";
import Image from "next/image";
import { committee } from "@/content.config";

function MemberCard({ member }) {
  const { name, initials, role, image, bio } = member;
  return (
    <div className="snap-start flex-none w-80 group/member liquid-glass p-8 hover:border-ted-red transition-all duration-500 relative h-72 rounded-3xl overflow-hidden">
      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center font-headline text-2xl group-hover/member:bg-ted-red transition-colors mb-6 overflow-hidden relative">
        {image ? (
          <Image src={image} alt={name} fill className="object-cover" sizes="64px" />
        ) : (
          initials
        )}
      </div>
      <p className="text-xl font-bold mb-2 font-body">{name}</p>
      <p className="text-xs text-ted-red uppercase tracking-widest font-body font-black">{role}</p>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-center opacity-0 group-hover/member:opacity-100 transition-all duration-500 rounded-3xl">
        <p className="text-sm text-white leading-relaxed font-body">{bio}</p>
      </div>
    </div>
  );
}

function DeptRow({ dept }) {
  const scrollLeft  = (e) => e.currentTarget.closest(".dept-row").querySelector(".scroll-track").scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = (e) => e.currentTarget.closest(".dept-row").querySelector(".scroll-track").scrollBy({ left:  320, behavior: "smooth" });

  return (
    <div className="relative dept-row">
      <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
        <h5 className="font-headline text-4xl text-ted-red tracking-wider uppercase">
          {dept.department}
        </h5>
        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-ted-red transition-all hover:scale-110"
          >
            ‹
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-ted-red transition-all hover:scale-110"
          >
            ›
          </button>
        </div>
      </div>
      <div className="scroll-track flex overflow-x-auto gap-8 no-scrollbar pb-10 snap-x snap-mandatory">
        {dept.members.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <section className="py-32 px-8 bg-surface" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-ted-red text-xs font-bold tracking-[0.3em] uppercase mb-4 font-body">
            Behind the Scenes
          </p>
          <h2 className="font-headline text-5xl md:text-7xl mb-4">PLANNING COMMITTEE</h2>
        </div>
        <div className="space-y-24">
          {committee.map((dept) => (
            <DeptRow key={dept.department} dept={dept} />
          ))}
        </div>
      </div>
    </section>
  );
}
