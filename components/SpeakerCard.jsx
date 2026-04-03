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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Info — slides up on hover */}
      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="h-1.5 w-12 bg-ted-red rounded-full mb-6 group-hover:w-full transition-all duration-500" />
        <p className="font-headline text-3xl leading-none">{name}</p>
        <p className="text-ted-red text-xs uppercase tracking-widest mt-2 font-body font-bold">{role}</p>
        <p className="font-body text-white transition-all duration-500 text-sm mt-6 leading-relaxed opacity-0 group-hover:opacity-100">
          {bio}
        </p>
      </div>
    </div>
  );
}
