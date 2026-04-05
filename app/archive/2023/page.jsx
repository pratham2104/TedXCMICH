import Link from "next/link";

const event = {
  year: 2023,
  theme: "The Essence of a Changing World",
  date: "April 29, 2023",
  venue: "French Auditorium · Central Michigan University",
  organizer: "Tyler Thompson",
  description:
    "In 2023, Central Michigan University hosted its first-ever TEDx event, marking the beginning of a new tradition of ideas worth spreading on campus. Eight speakers took the stage to explore how people, ideas, and society continue to evolve.",
  speakers: [
    {
      name: "Jessica Hetzel",
      talk: "Disability Studies: The Key to an Inclusive Society",
      bio: "A CMU student pursuing disability studies and public relations, Jessica served as Director of Diversity, Equity, and Inclusion for the Collegiate Panhellenic Council — dedicated to creating more inclusive and welcoming communities.",
      youtube: "https://youtu.be/smuPbBX0ljw?si=7019ZCGKGP3Di0Ta",
      initials: "JH",
    },
    {
      name: "Tiffany Jurge",
      talk: "The University: An Evolving Mosaic",
      bio: "A CMU Honors Program sophomore double-majoring in political science and environmental studies, Tiffany hopes to pursue a career in environmental law or international policy — advocating for those in need and exploring systemic complexity.",
      youtube: "https://youtu.be/aovFOOxEr0A?si=Xlb48b4TbU2S0GUO",
      initials: "TJ",
    },
    {
      name: "Anyah Lewis",
      talk: "The Power of Youth: Building Resilience After Trauma",
      bio: "A sociology senior and President of Zeta Phi Beta Sorority, Anyah is a McNair Scholar with a passion for community enrichment and youth development — finding innovative ways to help young people who have experienced trauma heal and progress.",
      youtube: "https://youtu.be/2oi0fPfSAFI?si=muPupPIT1QsBn1Zf",
      initials: "AL",
    },
    {
      name: "Joseph Marah",
      talk: "Western Misconceptions on Developing Nations",
      bio: "President and founder of the Joseph Marah Arnold Foundation in Sierra Leone, Joseph is a CMU economics and political science student — a Kennedy-Lugar Youth Exchange Scholar passionate about cultural exchange and reframing global narratives.",
      youtube: "https://youtu.be/7RMUvUkOk_4?si=k1DUS8Taac9Z-EeP",
      initials: "JM",
    },
    {
      name: "Jada Thrash",
      talk: "Your Power of Wonder",
      bio: "A CMU Leader Advancement Scholar with outdoor recreation and communications majors, Jada has performed in 40+ plays and speeches — using her platform to inspire positive change and help others find their voice.",
      youtube: "https://youtu.be/7RMUvUkOk_4?si=k1DUS8Taac9Z-EeP",
      initials: "JT",
    },
    {
      name: "Dr. Jonathan Glenn",
      talk: "Finding Yourself Through Consistency",
      bio: "Director of Diversity & Inclusion at Alma College and former Associate Athletic Director at CMU, Dr. Glenn has spent over seven years delivering leadership and DEI trainings for organizations across the country.",
      youtube: "https://youtu.be/w2faGK8uRsI?si=FN7lv3TP1YaD7ruB",
      initials: "JG",
    },
    {
      name: "Dr. Shawna Patterson-Stephens",
      talk: "Community, Counterspace, and the Digital Domain",
      bio: "Vice President and Chief Diversity Officer at CMU, Dr. Patterson-Stephens earned her Ph.D. from Florida State University and has dedicated her career to creating equitable systems for people from all walks of life.",
      youtube: "https://youtu.be/iuH1pglvkUA?si=4Nox8UmsGHB3dLU6",
      initials: "SP",
    },
    {
      name: "Dr. Nikita Murry",
      talk: "Kindly Managing a Changing World",
      bio: "CMU's institution-wide diversity education lead and licensed professional counselor, Dr. Murry brings together wellness and social justice — and founded The Go BACK Project, a nonprofit supporting children and families after trauma.",
      youtube: "https://youtu.be/NfApKvK1D54?si=xZ7y-69YGmkRTYxb",
      initials: "NM",
    },
  ],
};

export default function Archive2023() {
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
      <section className="relative min-h-[60vh] flex flex-col justify-end pt-32 pb-20 px-8 overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 60%, #E62B1E10 0%, transparent 60%)" }} />
        
        {/* Year watermark */}
        <div className="absolute -right-8 top-20 opacity-[0.04] pointer-events-none select-none">
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22rem", lineHeight: 1, color: "white" }}>2023</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="mb-6 flex items-center gap-4">
            <span className="bg-[#E62B1E] h-px w-12" />
            <span className="text-[#E62B1E] text-xs font-bold tracking-[0.3em] uppercase">Year I · The Archive</span>
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

      {/* DIVIDER STAT BAR */}
      <div className="border-y border-white/10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12">
          {[
            { label: "Speakers", value: "8" },
            { label: "Year", value: "Inaugural" },
            { label: "Venue", value: "French Auditorium" },
            { label: "Date", value: "April 29, 2023" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1 font-bold">{stat.label}</p>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem" }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SPEAKERS */}
      <section className="py-24 px-8 bg-[#131313]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#E62B1E] text-xs font-bold tracking-[0.3em] uppercase mb-4">The 2023 Lineup</p>
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
                    <div className="flex-none w-14 h-14 rounded-none bg-white/5 group-hover:bg-[#E62B1E] transition-colors flex items-center justify-center"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
                      {speaker.initials}
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
      <section className="py-24 px-8 bg-[#0A0A0A] text-center"
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
            The inaugural year set the foundation. Eight speakers. One stage. A campus changed.
            See how the tradition evolved — or join us for Year III.
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
