import Link from "next/link";

const event = {
  year: 2025,
  theme: "Navigating the Unknown",
  date: "May 3, 2025",
  venue: "French Auditorium · Central Michigan University",
  organizer: "Carolina Hernandez Ruiz",
  soldOut: true,
  description:
    "In 2025, TEDxCentral Michigan University returned with a theme that cut to the heart of our moment: Navigating the Unknown. Eight speakers — students, faculty, entrepreneurs, and advocates — took the stage to explore what happens when we lean into uncertainty instead of running from it.",
  speakers: [
    {
      name: "Angle Bush",
      talk: "Navigating the Unknown of A.I.",
      bio: "CEO of Black Women In Artificial Intelligence and CMU alumna, Angle founded her organization in 2020 to Educate, Engage, Embrace, and Empower Black women in AI. With partnerships at Amazon, Microsoft, and NVIDIA — and a closing bell at the NYSE — she is one of the most influential voices at the intersection of equity and emerging technology.",
      youtube: "https://youtu.be/anKGXVQZ-Fw?si=1yWJ7VYe8tuDdXRr",
      initials: "AB",
    },
    {
      name: "Dillon Barr",
      talk: "How to Raise a Future-Ready Kid (Without More Screen Time)",
      bio: "A CMU alumnus who ran a million-dollar door-to-door business as a student, then spent three years as a transformational consultant across 12 nations. Dillon now builds comic universes that help children discover their gifts — championing imagination as the gateway to inner brilliance.",
      youtube: "https://youtu.be/SI_7diHxvyk?si=6o5Sqei5IjeJUGb-",
      initials: "DB",
    },
    {
      name: "Annie Peters",
      talk: "Paralyzed by Motherhood: Navigating Life Through Postpartum Depression",
      bio: "A seven-time ADDY award-winning graphic designer and CMU lecturer, Annie's research sits at the intersection of art, mental health, and the human experience — exploring design as an intervention for suicidal ideation, neurodivergence as joy, and the untold stories of motherhood.",
      youtube: "https://youtu.be/anKGXVQZ-Fw?si=1yWJ7VYe8tuDdXRr",
      initials: "AP",
    },
    {
      name: "Jacob Brown",
      talk: "Fail Forward Through Fear",
      bio: "Former NFL athlete turned three-time TEDx speaker, bestselling author, and business coach. Jacob's #FailForward philosophy has taken him to Forbes, Good Morning America, and stages at Intel, Meta, and the Dallas Cowboys — helping organizations transform failure into fuel.",
      youtube: "https://youtu.be/pBNfzvBPe3w?si=mal240vaxWldgA5f",
      initials: "JB",
    },
    {
      name: "Michael McCreery",
      talk: "Ogchidaa: Way of the Warrior",
      bio: "Drawing on the wisdom of his Odawa and Ojibwe ancestors, Michael is a Prevention Specialist with the Saginaw Chippewa Tribe who supports Native youth through programs rooted in cultural identity and resilience. His path through profound loss led him to ancestral teachings — and to the stage.",
      youtube: "https://youtu.be/-tvSrxvj5jA?si=J-Gqgly6rS1PaSjQ",
      initials: "MM",
    },
    {
      name: "Madison Miller",
      talk: "Your DNA Can Tell You Your Risk for Cancer — Can You Afford to Listen?",
      bio: "A second-year CMU medical student and ATM gene mutation carrier, Madison blends clinical research with personal advocacy — fighting for better awareness and access to care for individuals and families affected by hereditary cancer, while dancing with Infusion Dance Team.",
      youtube: "https://youtu.be/UqoW27e-sMI?si=QvkSjJa3dZsCoTg3",
      initials: "MM2",
    },
    {
      name: "Holly Caldwell",
      talk: "The Gift of Goodbye: Growing Through Grieving",
      bio: "A CMU environmental studies student, park ranger, and women's rugby executive board member, Holly brings her love of the Great Lakes and Star Wars to a talk about what grief can teach us — and what we carry forward when we choose to keep going.",
      youtube: "https://youtu.be/anKGXVQZ-Fw?si=p_ywgJuqi7VB6Vp-",
      initials: "HC",
    },
    {
      name: "Kelly Lett",
      talk: "Trapped in an Untamed Mind",
      bio: "A psychology major who returned to school at 43 — pivoting toward a PhD in Neuropsychology and the study of psychedelic interactions with cognitive functioning. Kelly brings curiosity, candor, and long contemplative walks with her dogs to a talk about what happens when the mind refuses to be tamed.",
      youtube: "https://youtu.be/iQtaRp3YcmQ?si=q7TOmnoK3S1_haaV",
      initials: "KL",
    },
  ],
};

export default function Archive2025() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white font-['DM_Sans',sans-serif]">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl flex justify-between items-center px-8 py-4">
        <Link href="/" className="font-['Bebas_Neue'] font-bold text-2xl tracking-tight text-white">
          TEDx<span className="text-[#E62B1E]">CMICH</span>
        </Link>
        <Link
          href="/#archive"
          className="text-white/50 hover:text-[#E62B1E] transition-colors text-sm font-bold tracking-widest uppercase flex items-center gap-2"
        >
          ← Back to Archive
        </Link>
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-end pt-32 pb-20 px-8 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 40%, #E62B1E12 0%, transparent 60%)" }} />

        {/* Year watermark */}
        <div className="absolute -right-8 top-20 opacity-[0.04] pointer-events-none select-none">
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22rem", lineHeight: 1, color: "white" }}>2025</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="mb-6 flex items-center gap-4">
            <span className="bg-[#E62B1E] h-px w-12" />
            <span className="text-[#E62B1E] text-xs font-bold tracking-[0.3em] uppercase">Year II · The Archive</span>
            <span className="bg-[#E62B1E] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">SOLD OUT</span>
          </div>
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4 font-bold">{event.date} · {event.venue}</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 8vw, 8rem)", lineHeight: 0.85 }} className="mb-6">
            {event.theme.toUpperCase()}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mt-8">{event.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-white/30 text-xs uppercase tracking-widest">Led by</span>
            <span className="text-white font-bold">{event.organizer}</span>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <div className="border-y border-white/10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12">
          {[
            { label: "Speakers", value: "8" },
            { label: "Year", value: "II" },
            { label: "Venue", value: "French Auditorium" },
            { label: "Date", value: "May 3, 2025" },
            { label: "Status", value: "Sold Out" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1 font-bold">{stat.label}</p>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem" }}
                className={stat.label === "Status" ? "text-[#E62B1E]" : ""}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SPEAKERS */}
      <section className="py-24 px-8 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#E62B1E] text-xs font-bold tracking-[0.3em] uppercase mb-4">The 2025 Lineup</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: 0.9 }}>
              SPEAKERS
            </h2>
          </div>

          <div className="space-y-px bg-white/5">
            {event.speakers.map((speaker, i) => (
              <div
                key={speaker.name}
                className="group flex flex-col md:flex-row gap-0 bg-[#131313] hover:bg-[#1a1a1a] transition-colors duration-300 border-l-2 border-transparent hover:border-[#E62B1E]"
              >
                {/* Number */}
                <div className="flex-none w-16 flex items-start justify-center pt-8 md:pt-10">
                  <span className="text-white/10 group-hover:text-white/20 transition-colors"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:pl-4 border-b border-white/5">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    {/* Avatar */}
                    <div className="flex-none w-14 h-14 bg-white/5 group-hover:bg-[#E62B1E] transition-colors flex items-center justify-center"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
                      {speaker.initials.replace("2", "")}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", lineHeight: 1 }} className="mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-[#E62B1E] text-xs uppercase tracking-widest font-bold mb-4">
                        &ldquo;{speaker.talk}&rdquo;
                      </p>
                      <p className="text-white/50 text-sm leading-relaxed max-w-2xl">{speaker.bio}</p>
                    </div>

                    {/* Watch link */}
                    <div className="flex-none">
                      <a
                        href={speaker.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30 hover:text-[#E62B1E] transition-colors border border-white/10 hover:border-[#E62B1E] px-4 py-2"
                      >
                        Watch Talk ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section
        className="py-24 px-8 bg-[#0A0A0A] text-center"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-[#E62B1E] text-xs font-bold tracking-[0.3em] uppercase mb-6">What Comes Next</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 0.9 }} className="mb-8 text-white/80">
            THE STORY CONTINUES
          </h2>
          <p className="text-white/40 mb-10 leading-relaxed">
            Year II sold out. Eight voices explored the edge of the unknown.
            Year III raises the stakes — see who's taking the stage in 2026.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#archive"
              className="border border-white/20 text-white text-sm font-bold tracking-widest uppercase px-8 py-3 hover:border-[#E62B1E] hover:text-[#E62B1E] transition-all">
              See All Years
            </Link>
            <Link href="/"
              className="bg-[#E62B1E] text-white text-sm font-bold tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-[#E62B1E] transition-all">
              TEDxCMICH 2026
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
