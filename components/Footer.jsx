import { siteConfig } from "@/content.config";

export default function Footer() {
  return (
    <footer
      className="bg-background flex flex-col items-center justify-center py-24 px-4 text-center w-full border-t border-white/10"
      id="contact"
    >
      <div className="font-logo font-bold text-6xl md:text-8xl text-white opacity-10 block mb-12 select-none">
        TEDxCMICH
      </div>

      <div className="flex flex-wrap justify-center gap-10 mb-16">
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-ted-red transition-all font-body text-sm tracking-widest font-bold uppercase flex items-center gap-2"
        >
          Instagram
        </a>
        <a href="#" className="text-white/50 hover:text-ted-red transition-all font-body text-sm tracking-widest font-bold uppercase">
          Privacy Policy
        </a>
        <a href="#" className="text-white/50 hover:text-ted-red transition-all font-body text-sm tracking-widest font-bold uppercase">
          Contact Us
        </a>
      </div>

      <p className="font-body text-sm tracking-wide text-white/30 max-w-2xl mx-auto leading-relaxed">
        © {siteConfig.year} TEDx Central Michigan University. This independent TEDx event is operated under license from TED.
      </p>

      <div className="mt-16">
        <div className="h-1.5 w-16 bg-ted-red mx-auto rounded-full" />
      </div>
    </footer>
  );
}
