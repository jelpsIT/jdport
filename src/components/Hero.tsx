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

      {/* Subtle dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-[92px] md:text-[128px] font-display font-medium tracking-[-5px] text-white leading-[0.9]">
            Josh Dobson.
          </h1>

          <p className="mt-4 text-3xl md:text-4xl font-light text-white/90">
            IT Support &amp; Projects Engineer
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-mono uppercase tracking-[3.5px] text-white/70">
            <span>ACTIVE SINCE: 2016</span>
            <span>•</span>
            <span>DEPLOYMENTS: UK // USA // ZAMBIA</span>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-white">
            {[
              { num: "8+", label: "Years Active" },
              { num: "500+", label: "Users Supported" },
              { num: "500+", label: "Devices Managed" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-7xl font-display font-medium tracking-tighter text-[#D97706]">
                  {stat.num}
                </div>
                <div className="text-xs font-mono tracking-[2.5px] text-white/60 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-center">
        <div className="text-white/60 text-xs font-mono tracking-[3.5px]">EXPLORE MORE BELOW</div>
        <div className="h-px w-8 bg-white/40 mx-auto mt-2" />
      </div>
    </section>
  );
};