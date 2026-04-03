import Image from "next/image";

export default function SpeakerCard({ speaker }) {
  const { name, initials, role, image, bio } = speaker;

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-black cursor-pointer shadow-2xl">
      {/* Photo or initials placeholder */}
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-black flex items-center justify-center">
          <span className="font-headline text-6xl text-white/20">{initials}</span>
        </div>
      )}

      {/* Gradient overlay — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Static name strip — visible at rest, hidden when bio slides up */}
      <div className="absolute bottom-0 left-0 p-8 w-full transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
        <div className="h-1.5 w-12 bg-ted-red rounded-full mb-4" />
        <p className="font-headline text-3xl leading-none">{name}</p>
        <p className="text-ted-red text-xs uppercase tracking-widest mt-2 font-body font-bold">{role}</p>
      </div>

      {/* Bio overlay — slides up from bottom to fill full card height, scrollable */}
      <div
        className="absolute inset-x-0 bottom-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/90 backdrop-blur-sm rounded-3xl flex flex-col overflow-hidden"
      >
        {/* Sticky header inside overlay */}
        <div className="flex-shrink-0 px-8 pt-8 pb-4 border-b border-white/10">
          <div className="h-1.5 w-12 bg-ted-red rounded-full mb-4" />
          <p className="font-headline text-2xl leading-none">{name}</p>
          <p className="text-ted-red text-xs uppercase tracking-widest mt-2 font-body font-bold">{role}</p>
        </div>

        {/* Scrollable bio body */}
        <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-hide">
          <p className="font-body text-sm text-white/80 leading-relaxed">{bio}</p>
        </div>

        {/* Bottom fade hint for scroll */}
        <div className="flex-shrink-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
