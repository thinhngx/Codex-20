export default function Hero() {
  return (
    <section
      style={{ fontSynthesis: 'none' }}
      className="flex flex-col justify-end min-h-screen bg-white"
    >
      {/* Empty visual area — placeholder for video/image */}
      <div className="flex-1" />

      {/* Bottom bar: tagline + CTA */}
      <div className="flex justify-between items-start px-[30px] py-8 w-full">
        <p
          style={{
            fontFamily: "'Saans TRIAL', system-ui, sans-serif",
            fontWeight: 380,
            fontSize: '18px',
            lineHeight: '22px',
          }}
          className="text-black whitespace-pre-line"
        >
          {'Code whispers secrets, machines awake\nSynthetic minds, a new path to make\nHuman threads, entwined with steel\nEvolution\'s pulse, a future to reveal'}
        </p>

        <button
          style={{ fontFamily: 'system-ui, sans-serif', fontWeight: 500, fontSize: '16px', lineHeight: '20px' }}
          className="flex items-center gap-2 rounded-sm bg-black text-white/95 px-3.5 py-3.5 shrink-0 hover:bg-zinc-800 transition-colors"
        >
          Give in the control
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="16" height="16" fill="#FFFFFF">
            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
          </svg>
        </button>
      </div>
    </section>
  )
}
