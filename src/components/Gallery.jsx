const cards = [
  { angle: '225deg' },
  { angle: '270deg' },
  { angle: '315deg' },
]

export default function Gallery() {
  return (
    <section className="flex flex-col items-start gap-3 px-[30px] py-[30px] w-full overflow-hidden">
      {/* Title row */}
      <div className="flex items-baseline gap-[7px]">
        <span
          style={{
            fontFamily: "'Saans TRIAL', system-ui, sans-serif",
            fontWeight: 380,
            fontSize: '46px',
            lineHeight: '56px',
          }}
          className="text-black"
        >
          Codex
        </span>
        <span
          style={{
            fontFamily: "'Saans TRIAL', system-ui, sans-serif",
            fontWeight: 380,
            fontSize: '20px',
            lineHeight: '24px',
          }}
          className="text-black opacity-20"
        >
          20
        </span>
      </div>

      {/* Card grid */}
      <div className="flex items-start gap-[7px] w-full">
        {cards.map(({ angle }, i) => (
          <div
            key={i}
            className="flex-1 h-[233px] rounded-sm"
            style={{
              backgroundImage: `conic-gradient(in oklab from ${angle} at 50% 50%, oklab(53.5% -0.023 -0.257) 0%, oklab(85.2% 0 -0.0001) 100%)`,
              filter: 'hue-rotate(90deg)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
