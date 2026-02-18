export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-36 text-center">
        <p className="text-xs tracking-[0.35em] text-black/50 uppercase mb-6 md:mb-8">
          Hand Poured · Norfolk · Small Batch Studio
        </p>

        <h1 className="text-4xl md:text-6xl tracking-[0.1em]">
          TILLY AND ROO
        </h1>

        <p className="mt-6 md:mt-10 text-base md:text-lg text-black/70 max-w-xl mx-auto leading-relaxed">
          Wax melts crafted for quiet evenings, fresh linen mornings
          and homes that feel calm, warm and beautifully scented.
        </p>
      </section>


      {/* COSY EDIT */}
      <section className="py-20 md:py-32 px-6 bg-[#F5F6F3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl tracking-[0.25em] mb-14 md:mb-24 text-center text-[#7C8A6A]">
            COSY EDIT
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14">

            {[
              ["SUNDAY LINEN",
                "Softly fresh and comforting. Clean cotton sheets and fresh air are wrapped in gentle warmth, creating that just-washed, slow Sunday morning feeling.",
                "Cotton · Fresh Air · Soft Musk"
              ],
              ["CASHMERE MORNINGS",
                "Smooth, cosy and quietly luxurious. Warm amber and soft cashmere notes settle into a creamy, comforting warmth that feels calm and elegant.",
                "Amber · Cashmere · Vanilla"
              ],
              ["QUIET HOUSE",
                "Peaceful and tender. Fresh laundry and clean cotton blend with soft powdery notes for a soothing, barely-there scent that feels like a calm, tidy home.",
                "Clean Cotton · Powder · White Musk"
              ],
              ["AMBER HEARTH",
                "Rich and inviting. Juicy dark plum melts into golden amber and soft vanilla, creating a warm, glowing scent that feels cosy, deep and comforting.",
                "Plum · Amber · Vanilla"
              ],
              ["WOODSMOKE WOOL",
                "Warm, smoky and softly sweet. Toasted woods and gentle embers are softened with creamy vanilla, giving a fireside feel without harsh or heavy woods.",
                "Smoked Woods · Embers · Creamy Vanilla"
              ],
              ["GREENHOUSE CALM",
                "Clean, green and serene. Cool birch woods blend with light floral freshness for a calm, airy scent that feels natural, balanced and restorative.",
                "Birch Wood · Soft Florals · Green Leaves"
              ],
              ["AUTUMN FOLDED BLANKETS",
                "Softly fruity and warm. Crisp orchard fruits are wrapped in cashmere-like warmth, creating a cosy autumn scent that feels comforting and familiar.",
                "Apple · Pear · Soft Spice"
              ]
            ].map(([name, description, notes]) => (
              <div
                key={name}
                className="bg-white p-6 md:p-10 rounded-xl border border-black/5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg md:text-xl tracking-[0.15em] mb-4 md:mb-6">
                  {name}
                </h3>

                <p className="text-black/70 leading-relaxed md:leading-loose text-sm md:text-base">
                  {description}
                </p>

                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-black/5">
                  <p className="text-xs tracking-[0.25em] text-[#7C8A6A] uppercase">
                    {notes}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FRESH EDIT */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl tracking-[0.25em] mb-14 md:mb-24 text-center text-[#7C8A6A]">
            FRESH EDIT
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-14">

            {[
              ["CLEAN SKIN",
                "Fresh, soft and comforting. Clean cotton and airy freshness melt into a gentle skin-like softness that feels light, modern and effortlessly clean.",
                "Clean Cotton · White Musk · Fresh Air"
              ],
              ["SUNLIT CITRUS",
                "Bright and uplifting. Juicy citrus zest meets soft green freshness, creating a clean, vibrant scent that feels warm, fresh and full of light.",
                "Lemon · Orange Peel · Green Notes"
              ],
              ["PINK POP",
                "Playful and sweet. Sugared pineapple and ripe strawberries swirl together into a fun, creamy fruit scent that feels bright, cheerful and indulgent.",
                "Pineapple · Strawberry · Cream"
              ],
              ["GREEN ESCAPE",
                "Fresh, green and spa-clean. Watery botanicals and cool herbal air create a calm, leafy scent that feels cleansing, natural and relaxing.",
                "Eucalyptus · Green Leaves · Herbal Notes"
              ],
              ["BERRY SILK",
                "Smooth and elegant. Juicy dark berries are softened with creamy vanilla and a hint of coastal freshness, creating a rich yet airy fruity blend.",
                "Blackberry · Vanilla · Coastal Air"
              ],
              ["EVENING MOJITO",
                "Zesty and refreshing. Bright citrus notes are lifted with soft herbal freshness for a clean, energising scent that feels crisp and uplifting.",
                "Lime · Mint · Citrus Zest"
              ],
              ["MIDNIGHT BEACH",
                "Warm and atmospheric. Smoky embers and toasted woods blend with smooth sandalwood and a hint of citrus, evoking a beach fire after dark.",
                "Sandalwood · Toasted Woods · Citrus Peel"
              ]
            ].map(([name, description, notes]) => (
              <div
                key={name}
                className="bg-[#F5F6F3] p-6 md:p-10 rounded-xl border border-black/5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg md:text-xl tracking-[0.15em] mb-4 md:mb-6">
                  {name}
                </h3>

                <p className="text-black/70 leading-relaxed md:leading-loose text-sm md:text-base">
                  {description}
                </p>

                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-black/5">
                  <p className="text-xs tracking-[0.25em] text-[#7C8A6A] uppercase">
                    {notes}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
