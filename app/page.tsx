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
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const formats = [
    { label: "Wax Melt Shell — £4.50", price: 4.5 },
    { label: "Snap Bar — £2.50", price: 2.5 },
    { label: "Bubble Jar — £6.50", price: 6.5 },
  ];

  const cosyScents = [
    ["SUNDAY LINEN","Softly fresh and comforting. Clean cotton sheets and fresh air are wrapped in gentle warmth, creating that just-washed, slow Sunday morning feeling.","Cotton · Fresh Air · Soft Musk"],
    ["CASHMERE MORNINGS","Smooth, cosy and quietly luxurious. Warm amber and soft cashmere notes settle into a creamy, comforting warmth that feels calm and elegant.","Amber · Cashmere · Vanilla"],
    ["QUIET HOUSE","Peaceful and tender. Fresh laundry and clean cotton blend with soft powdery notes for a soothing, barely-there scent that feels like a calm, tidy home.","Clean Cotton · Powder · White Musk"],
    ["AMBER HEARTH","Rich and inviting. Juicy dark plum melts into golden amber and soft vanilla, creating a warm, glowing scent that feels cosy, deep and comforting.","Plum · Amber · Vanilla"],
    ["WOODSMOKE WOOL","Warm, smoky and softly sweet. Toasted woods and gentle embers are softened with creamy vanilla, giving a fireside feel without harsh or heavy woods.","Smoked Woods · Embers · Creamy Vanilla"],
    ["GREENHOUSE CALM","Clean, green and serene. Cool birch woods blend with light floral freshness for a calm, airy scent that feels natural, balanced and restorative.","Birch Wood · Soft Florals · Green Leaves"],
    ["AUTUMN FOLDED BLANKETS","Softly fruity and warm. Crisp orchard fruits are wrapped in cashmere-like warmth, creating a cosy autumn scent that feels comforting and familiar.","Apple · Pear · Soft Spice"],
  ];

  const addToBasket = (item: BasketItem) => {
    setBasket(prev => [...prev, item]);
  };

  const subtotal = basket.reduce((sum, item) => sum + item.price * item.qty, 0);
  const postage = basket.length > 0 ? 6 : 0;
  const discount = subtotal >= 25 ? subtotal * 0.1 : 0;
  const total = subtotal + postage - discount;

  // Generate simple unique order number
  const generateOrderNumber = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `TR-${Date.now().toString().slice(-6)}-${random}`;
  };

  const handleCheckout = () => {
    if (!customerName || !customerAddress) {
      alert("Please enter your name and delivery address.");
      return;
    }

    const orderNumber = generateOrderNumber();

    const orderLines = basket
      .map(item => `${item.qty} x ${item.name} (${item.format})`)
      .join("\n");

    const body = `
Order Number: ${orderNumber}

Customer Name:
${customerName}

Delivery Address:
${customerAddress}

Items:
${orderLines}

Subtotal: £${subtotal.toFixed(2)}
Post & Pack: £${postage.toFixed(2)}
Discount: -£${discount.toFixed(2)}
Total: £${total.toFixed(2)}
    `;

    window.location.href = `mailto:hello@tillandroo.co.uk?subject=Tilly & Roo Order ${orderNumber}&body=${encodeURIComponent(body)}`;
  };

  const Card = (name: string, description: string, notes: string) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [qty, setQty] = useState(1);
    const selected = formats[selectedIndex];

    return (
      <div className="bg-white p-8 rounded-xl border border-black/5 text-center shadow-sm">

        <img
          src="/images/clamshells1.jpeg"
          alt=""
          className="w-full mb-6 rounded-lg object-cover"
        />

        <h3 className="text-lg tracking-[0.08em] font-medium mb-4 text-[#7C8A6A]">
          {name}
        </h3>

        <p className="text-black/70 text-sm mb-6">{description}</p>

        <p className="text-xs tracking-[0.25em] text-[#7C8A6A] uppercase mb-6">
          {notes}
        </p>

        <select
          className="w-full border border-[#E5E5E5] rounded-full px-4 py-2 text-sm mb-4"
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
        >
          {formats.map((f, i) => (
            <option key={f.label} value={i}>{f.label}</option>
          ))}
        </select>

        <div className="flex items-center justify-center gap-4 mb-4">
          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="px-3 py-1 border rounded-full">−</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="px-3 py-1 border rounded-full">+</button>
        </div>

        <button
          onClick={() =>
            addToBasket({ name, format: selected.label, price: selected.price, qty })
          }
          className="bg-[#7C8A6A] text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
        >
          Add to Basket
        </button>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white text-black pb-56">

      <section className="py-20 px-6 bg-[#F7F7F4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {cosyScents.map(([n,d,notes]) => Card(n,d,notes))}
        </div>
      </section>

      {basket.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg p-6">
          <div className="max-w-6xl mx-auto space-y-4">

            <div>
              <p>Subtotal: £{subtotal.toFixed(2)}</p>
              <p>Post & Pack: £{postage.toFixed(2)}</p>
              {discount > 0 && <p className="text-[#7C8A6A]">10% Saving: -£{discount.toFixed(2)}</p>}
              <p className="font-medium">Total: £{total.toFixed(2)}</p>
            </div>

            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border rounded-full px-4 py-2 text-sm"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />

            <textarea
              placeholder="Delivery Address"
              className="w-full border rounded-xl px-4 py-2 text-sm"
              rows={3}
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />

            <button
              onClick={handleCheckout}
              className="bg-[#7C8A6A] text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
            >
              Checkout via Email
            </button>

          </div>
        </div>
      )}
    </main>
  );
}