"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content.config";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0 });

  useEffect(() => {
    function tick() {
      const diff = siteConfig.eventDate - new Date();
      if (diff <= 0) {
        setTime({ days: 0, hrs: 0, min: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hrs:  Math.floor((diff / (1000 * 60 * 60)) % 24),
        min:  Math.floor((diff / (1000 * 60)) % 60),
      });
    }
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs",  value: pad(time.hrs) },
    { label: "Min",  value: pad(time.min) },
  ];

  return (
    <div className="flex items-center gap-4 border-l border-ted-red pl-6">
      {units.map((u, i) => (
        <>
          <div key={u.label} className="flex flex-col items-center">
            <span className="font-headline text-3xl text-ted-red">{u.value}</span>
            <span className="text-[8px] text-white/40 uppercase font-body font-bold tracking-widest">{u.label}</span>
          </div>
          {i < units.length - 1 && (
            <div key={`sep-${i}`} className="h-8 w-px bg-white/10" />
          )}
        </>
      ))}
    </div>
  );
}
