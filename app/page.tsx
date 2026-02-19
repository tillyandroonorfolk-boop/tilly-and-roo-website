export default function Home() {
  const instaLink = (scent: string) =>
    `https://www.instagram.com/tillyandroonorfolk?text=Hi%20I'd%20like%20to%20order%20${encodeURIComponent(
      scent
    )}%20🤍`;

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-36 text-center">
        <h1 className="text-3xl md:text-6xl tracking-[0.05em] md:tracking-[0.1em] whitespace-nowrap">
          TILLY AND ROO
        </h1>
      </section>

      {/* Pricing Banner */}
      <section className="text-center py-8 bg-[#F5F6F3] text-sm tracking-wide">
        <p>
          Clamshell £4.75 or 3 for £12 · Snap Bar £2.50 or 5 for £10
        </p>
      </section>

      {/* SCENTS */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14">

            {[
              "SUNDAY LINEN",
              "CASHMERE MORNINGS",
              "QUIET HOUSE",
              "AMBER HEARTH",
              "WOODSMOKE WOOL",
              "GREENHOUSE CALM",
              "AUTUMN FOLDED BLANKETS",
              "CLEAN SKIN",
              "SUNLIT CITRUS",
              "PINK POP",
              "GREEN ESCAPE",
              "BERRY SILK",
              "EVENING MOJITO",
              "MIDNIGHT BEACH",
            ].map((name) => (
              <div
                key={name}
                className="bg-[#F5F6F3] p-6 md:p-10 rounded-xl border border-black/5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src="/images/clamshell.jpg"
                  alt={name}
                  className="w-full mb-6 rounded-lg"
                />

                <h3 className="text-lg md:text-xl tracking-[0.15em] mb-4">
                  {name}
                </h3>

                <p className="text-sm mb-6 text-black/70">
                  £4.75 Clamshell · 3 for £12
                  <br />
                  £2.50 Snap Bar · 5 for £10
                </p>

                <a
                  href={instaLink(name)}
                  target="_blank"
                  className="inline-block px-6 py-3 bg-black text-white text-xs tracking-[0.2em] rounded-full hover:bg-[#7C8A6A] transition-all"
                >
                  ORDER VIA INSTAGRAM
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
