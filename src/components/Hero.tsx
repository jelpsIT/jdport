import { useRef } from 'react';

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/fpv.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-[92px] md:text-[128px] font-display font-medium tracking-[-5.5px] text-white leading-[0.88]">
            Josh Dobson.
          </h1>

          <p className="mt-3 text-3xl md:text-[42px] font-light text-white/90 tracking-tight">
            Modern Workplace &amp; Automation Architect
          </p>

          <p className="mt-4 max-w-md mx-auto text-white/70 text-lg">
            I build resilient systems that reduce friction and raise the bar.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-mono uppercase tracking-[3px] text-white/60">
            <span>8+ YEARS</span>
            <span>•</span>
            <span>UK • USA • ZAMBIA • REMOTE</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 text-center">
        <div className="text-white/50 text-xs font-mono tracking-[4px]">SCROLL TO EXPLORE</div>
        <div className="h-px w-6 bg-white/30 mx-auto mt-3" />
      </div>
    </section>
  );
};