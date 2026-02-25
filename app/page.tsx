"use client";

import { useState } from "react";

type BasketItem = {
  name: string;
  format: string;
  price: number;
  qty: number;
};

export default function Home() {

  const [basket, setBasket] = useState<BasketItem[]>([]);

  const cosyScents = [
    ["SUNDAY LINEN",
      "Softly fresh and comforting. Clean cotton sheets and fresh air are wrapped in gentle warmth, creating that just-washed, slow Sunday morning feeling.",
      "Cotton · Fresh Air · Soft Musk"],
    ["CASHMERE MORNINGS",
      "Smooth, cosy and quietly luxurious. Warm amber and soft cashmere notes settle into a creamy, comforting warmth that feels calm and elegant.",
      "Amber · Cashmere · Vanilla"],
  ];

  const formats = [
    { label: "Wax Melt Shell — £4.50", price: 4.5 },
    { label: "Snap Bar — £2.50", price: 2.5 },
    { label: "Bubble Jar — £6.50", price: 6.5 },
  ];

  const addToBasket = (name: string, format: string, price: number, qty: number) => {
    setBasket(prev => [...prev, { name, format, price, qty }]);
  };

  const subtotal = basket.reduce((acc, item) => acc + item.price * item.qty, 0);
  const postage = basket.length > 0 ? 6 : 0;
  const discount = subtotal >= 25 ? subtotal * 0.1 : 0;
  const total = subtotal + postage - discount;

  const emailBody = basket
    .map(item => `${item.qty} x ${item.name} (${item.format})`)
    .join("%0D%0A");

  const checkoutLink = `mailto:hello@tillandroo.co.uk?subject=Tilly & Roo Order&body=${emailBody}%0D%0ASubtotal: £${subtotal.toFixed(
    2
  )}%0D%0APostage: £${postage.toFixed(
    2
  )}%0D%0ADiscount: £${discount.toFixed(
    2
  )}%0D%0ATotal: £${total.toFixed(2)}`;

  const Card = (name: string, description: string, notes: string) => {
    const [selectedFormat, setSelectedFormat] = useState(formats[0]);
    const [qty, setQty] = useState(1);

    return (
      <div className="bg-white p-8 rounded-xl border border-black/5 text-center shadow-sm">

        <img
          src="/images/clamshells1.jpeg"
          alt=""
          className="w-full mb-6 rounded-lg object-cover"
        />

        <h3 className="text-lg md:text-xl tracking-[0.08em] font-medium mb-4 text-[#7C8A6A]">
          {name}
        </h3>

        <p className="text-black/70 leading-relaxed text-sm mb-6">
          {description}
        </p>

        <p className="text-xs tracking-[0.25em] text-[#7C8A6A] uppercase mb-6">
          {notes}
        </p>

        <div className="text-sm space-y-1 mb-6 text-black/70">
          {formats.map(f => (
            <p key={f.label}>{f.label}</p>
          ))}
        </div>

        <select
          className="w-full border border-[#E5E5E5] rounded-full px-4 py-2 text-sm mb-4"
          onChange={(e) =>
            setSelectedFormat(formats[Number(e.target.value)])
          }
        >
          {formats.map((f, index) => (
            <option key={f.label} value={index}>
              {f.label}
            </option>
          ))}
        </select>

        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            className="px-3 py-1 border border-[#E5E5E5] rounded-full"
          >
            −
          </button>
          <span>{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-3 py-1 border border-[#E5E5E5] rounded-full"
          >
            +
          </button>
        </div>

        <button
          onClick={() =>
            addToBasket(name, selectedFormat.label, selectedFormat.price, qty)
          }
          className="bg-[#7C8A6A] text-white px-6 py-2 rounded-full text-sm tracking-wide hover:opacity-90 transition"
        >
          Add to Basket
        </button>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white text-black pb-32">

      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl tracking-[0.04em] font-light mb-6">
          TILLY & ROO
        </h1>
        <p className="text-xs tracking-[0.3em] text-[#7C8A6A] mb-4">
          NORFOLK · ENGLAND
        </p>
        <p className="text-lg md:text-2xl tracking-[0.1em]">
          Fragrance for Calm Interiors
        </p>
      </section>

      <section className="py-20 px-6 bg-[#F7F7F4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {cosyScents.map(([n, d, notes]) => Card(n, d, notes))}
        </div>
      </section>

      {/* Floating Basket */}
      {basket.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-black/10 shadow-lg p-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <p className="text-sm">Subtotal: £{subtotal.toFixed(2)}</p>
              <p className="text-sm">Post & Pack: £{postage.toFixed(2)}</p>
              {discount > 0 && (
                <p className="text-sm text-[#7C8A6A]">
                  10% Saving Applied: -£{discount.toFixed(2)}
                </p>
              )}
              <p className="font-medium">Total: £{total.toFixed(2)}</p>
            </div>

            <a
              href={checkoutLink}
              className="bg-[#7C8A6A] text-white px-8 py-3 rounded-full text-sm tracking-wide hover:opacity-90 transition"
            >
              Checkout via Email
            </a>
          </div>
        </div>
      )}
    </main>
  );
}