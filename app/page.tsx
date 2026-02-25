"use client";

import { useState } from "react";

export default function Home() {

  const cosyScents = [
    ["SUNDAY LINEN",
      "Softly fresh and comforting. Clean cotton sheets and fresh air are wrapped in gentle warmth, creating that just-washed, slow Sunday morning feeling.",
      "Cotton · Fresh Air · Soft Musk"],

    ["CASHMERE MORNINGS",
      "Smooth, cosy and quietly luxurious. Warm amber and soft cashmere notes settle into a creamy, comforting warmth that feels calm and elegant.",
      "Amber · Cashmere · Vanilla"],

    ["QUIET HOUSE",
      "Peaceful and tender. Fresh laundry and clean cotton blend with soft powdery notes for a soothing, barely-there scent that feels like a calm, tidy home.",
      "Clean Cotton · Powder · White Musk"],

    ["AMBER HEARTH",
      "Rich and inviting. Juicy dark plum melts into golden amber and soft vanilla, creating a warm, glowing scent that feels cosy, deep and comforting.",
      "Plum · Amber · Vanilla"],

    ["WOODSMOKE WOOL",
      "Warm, smoky and softly sweet. Toasted woods and gentle embers are softened with creamy vanilla, giving a fireside feel without harsh or heavy woods.",
      "Smoked Woods · Embers · Creamy Vanilla"],

    ["GREENHOUSE CALM",
      "Clean, green and serene. Cool birch woods blend with light floral freshness for a calm, airy scent that feels natural, balanced and restorative.",
      "Birch Wood · Soft Florals · Green Leaves"],

    ["AUTUMN FOLDED BLANKETS",
      "Softly fruity and warm. Crisp orchard fruits are wrapped in cashmere-like warmth, creating a cosy autumn scent that feels comforting and familiar.",
      "Apple · Pear · Soft Spice"],
  ];

  const freshScents = [
    ["CLEAN SKIN",
      "Fresh, soft and comforting. Clean cotton and airy freshness melt into a gentle skin-like softness that feels light, modern and effortlessly clean.",
      "Clean Cotton · White Musk · Fresh Air"],

    ["SUNLIT CITRUS",
      "Bright and uplifting. Juicy citrus zest meets soft green freshness, creating a clean, vibrant scent that feels warm, fresh and full of light.",
      "Lemon · Orange Peel · Green Notes"],

    ["PINK POP",
      "Playful and sweet. Sugared pineapple and ripe strawberries swirl together into a fun, creamy fruit scent that feels bright, cheerful and indulgent.",
      "Pineapple · Strawberry · Cream"],

    ["GREEN ESCAPE",
      "Fresh, green and spa-clean. Watery botanicals and cool herbal air create a calm, leafy scent that feels cleansing, natural and relaxing.",
      "Eucalyptus · Green Leaves · Herbal Notes"],

    ["BERRY SILK",
      "Smooth and elegant. Juicy dark berries are softened with creamy vanilla and a hint of coastal freshness, creating a rich yet airy fruity blend.",
      "Blackberry · Vanilla · Coastal Air"],

    ["EVENING MOJITO",
      "Zesty and refreshing. Bright citrus notes are lifted with soft herbal freshness for a clean, energising scent that feels crisp and uplifting.",
      "Lime · Mint · Citrus Zest"],

    ["MIDNIGHT BEACH",
      "Warm and atmospheric. Smoky embers and toasted woods blend with smooth sandalwood and a hint of citrus, evoking a beach fire after dark.",
      "Sandalwood · Toasted Woods · Citrus Peel"],
  ];

  const Card = (name: string, description: string, notes: string) => {
    const [qty, setQty] = useState(1);

    return (
      <div className="bg-white p-8 rounded-xl border border-black/5 text-center shadow-sm hover:shadow-md transition-all">

        <img
          src="/images/clamshells1.jpeg"
          alt={name}
          className="w-full mb-6 rounded-lg"
        />

        {/* ONLY TITLE — no duplicate */}
        <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium mb-4 text-[#7C8A6A]">
          {name}
        </h3>

        <p className="text-black/70 leading-relaxed text-sm md:text-base mb-6">
          {description}
        </p>

        <div className="pt-6 border-t border-black/5">

          <p className="text-xs tracking-[0.25em] text-[#7C8A6A] uppercase mb-6">
            {notes}
          </p>

          <div className="text-sm space-y-1 mb-6 text-black/70">
            <p>Wax Melt Shell — £4.50</p>
            <p>Snap Bar — £2.50</p>
            <p>Bubble Jar — £6.50</p>
          </div>

          <p className="text-xs text-black/50 mb-6">
            £6 Post & Pack · 10% saving applied to collections over £25
          </p>

          <div className="space-y-4">

            <select className="w-full border border-[#E5E5E5] rounded-full px-4 py-2 text-sm bg-white text-black/70">
              <option>Select Format</option>
              <option>Wax Melt Shell — £4.50</option>
              <option>Snap Bar — £2.50</option>
              <option>Bubble Jar — £6.50</option>
            </select>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-1 border border-[#E5E5E5] rounded-full text-sm"
              >
                −
              </button>

              <span className="text-sm text-black/70">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 border border-[#E5E5E5] rounded-full text-sm"
              >
                +
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl tracking-[0.04em] font-light mb-6">
          TILLY & ROO
        </h1>

        <p className="text-xs tracking-[0.3em] text-[#7C8A6A] mb-4">
          NORFOLK · ENGLAND
        </p>

        <p className="text-lg md:text-2xl tracking-[0.1em] mb-2">
          Fragrance for Calm Interiors
        </p>

        <p className="text-sm tracking-[0.15em] text-black/60">
          Small Batch Collections
        </p>
      </section>

      {/* COSY EDIT */}
      <section className="py-20 px-6 bg-[#F7F7F4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl tracking-[0.25em] mb-16 text-center text-[#7C8A6A]">
            COSY EDIT
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {cosyScents.map(([n, d, notes]) => Card(n, d, notes))}
          </div>
        </div>
      </section>

      {/* FRESH EDIT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl tracking-[0.25em] mb-16 text-center text-[#7C8A6A]">
            FRESH EDIT
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {freshScents.map(([n, d, notes]) => Card(n, d, notes))}
          </div>
        </div>
      </section>

    </main>
  );
}