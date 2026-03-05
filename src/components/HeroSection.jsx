const cards = [
  { angle: '225deg' },
  { angle: '270deg' },
  { angle: '315deg' },
]

const saansFont = {
  fontFamily: "'Saans TRIAL', system-ui, sans-serif",
  fontWeight: 380,
  fontSynthesis: 'none',
}

export default function HeroSection() {
  return (
    // Mobile: justify-between (tagline top, gallery bottom, empty space in middle)
    // lg+: justify-end (both groups at bottom, gap between them)
    <section className="flex flex-col justify-between lg:justify-end h-[100dvh] w-full bg-white gap-9 xl:gap-[100px]">

      {/* Tagline + CTA
          Mobile:  flex-col, stacked, p-5, smaller text
          lg+:     flex-row, side-by-side, px-[30px], larger text */}
      <div className="flex flex-col gap-7 p-5 w-full shrink-0
                      lg:flex-row lg:justify-between lg:items-start lg:gap-0 lg:px-[30px] lg:py-0">
        <p
          style={{ ...saansFont, lineHeight: '18px' }}
          className="text-black whitespace-pre text-[14px] lg:text-[18px] lg:leading-[22px]"
        >
          {'Code whispers secrets, machines awake\nSynthetic minds, a new path to make\nHuman threads, entwined with steel\nEvolution\'s pulse, a future to reveal'}
        </p>

        <button
          className="flex items-center gap-2 rounded-sm bg-black text-white/95 px-3.5 py-3.5 shrink-0 self-start hover:bg-zinc-800 transition-colors"
          style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
        >
          Give in the control
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="16" height="16" fill="#FFFFFF">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </button>
      </div>

      {/* Gallery
          Mobile:  p-5
          lg+:     px-[30px] py-[30px] */}
      <div className="flex flex-col items-start gap-3 p-5 w-full shrink-0 overflow-hidden
                      lg:px-[30px] lg:py-[30px]">
        <div className="flex items-baseline gap-[7px]">
          <span style={{ ...saansFont, fontSize: '46px', lineHeight: '56px' }} className="text-black">
            Codex
          </span>
          <span style={{ ...saansFont, fontSize: '20px', lineHeight: '24px' }} className="text-black opacity-20">
            20
          </span>
        </div>

        <div className="flex items-start gap-[7px] w-full">
          {cards.map(({ angle }, i) => (
            <div
              key={i}
              className="flex-1 h-[233px] rounded-sm"
              style={{
                backgroundImage: `conic-gradient(in oklab from calc(${angle} + var(--gradient-angle)) at 50% 50%, oklab(53.5% -0.023 -0.257) 0%, oklab(85.2% 0 -0.0001) 100%)`,
                filter: 'hue-rotate(90deg)',
                animation: 'gradient-spin 6s linear infinite',
              }}
            />
          ))}
        </div>
      </div>

    </section>
  )
}
