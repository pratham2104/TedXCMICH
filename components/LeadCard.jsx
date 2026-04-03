import Image from "next/image";

export default function LeadCard({ lead, index }) {
  const { name, initials, role, image, bio } = lead;

  return (
    <div className="group relative flex flex-col h-[400px] liquid-glass transition-all duration-500 hover:-translate-y-2 hover:border-ted-red overflow-hidden rounded-3xl">
      {/* Avatar area */}
      <div className="relative flex-1 overflow-hidden bg-black/20 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity select-none">
          <span className="font-headline text-[12rem] text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {image ? (
          <Image src={image} alt={name} fill className="object-cover z-10" sizes="20vw" />
        ) : (
          <span className="font-headline text-6xl text-white/40 z-10 group-hover:text-white transition-colors">
            {initials}
          </span>
        )}
      </div>

      {/* Name / role strip */}
      <div className="p-6 relative z-20 bg-black/20 border-t border-white/10 group-hover:border-ted-red transition-colors h-32 flex flex-col justify-center">
        <span className="inline-block bg-ted-red text-white text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full w-fit mb-2 font-body">
          {role}
        </span>
        <h4 className="font-headline text-[22px] leading-tight text-white group-hover:text-ted-red transition-colors uppercase">
          {name}
        </h4>
      </div>

      {/* Hover overlay with bio */}
      <div className="absolute inset-0 bg-black/90 p-8 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0 rounded-3xl">
        <p className="font-body text-sm text-white leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
