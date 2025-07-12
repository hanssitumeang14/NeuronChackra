// app/about/page.js
import Link from "next/link";

const cards = [
  {
    title: "Inner Self",
    href: "/about/innerSelf",
    description: "Mengenal jati diri terdalam dan potensi bawaan."
  },
  {
    title: "Outer Self",
    href: "/about/outerSelf",
    description: "Ekspresi diri dan interaksi dengan dunia luar."
  },
  {
    title: "Karmic Tail",
    href: "/about/karmicTail",
    description: "Pola karma yang terbawa dari masa lalu."
  },
  {
    title: "Love Line",
    href: "/about/loveLine",
    description: "Pola cinta dan relasi emosional."
  },
  {
    title: "Money Line",
    href: "/about/moneyLine",
    description: "Relasi dengan materi dan kelimpahan."
  },
  {
    title: "Talents",
    href: "/about/talents",
    description: "Bakat unik yang mendukung misi jiwa."
  },
];

export default function menuAbout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 py-16">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-300 tracking-wide">
        Explore Your Matrix
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <Link
            href={card.href}
            key={idx}
            className="group relative bg-gray-800 border border-purple-600 rounded-2xl p-6 shadow-lg hover:bg-purple-900 hover:shadow-purple-700 transition duration-300"
          >
            <div className="absolute -inset-1 bg-purple-600 opacity-10 blur-xl group-hover:opacity-20 rounded-2xl"></div>
            <h2 className="text-2xl font-bold text-purple-300 mb-2 z-10 relative">
              {idx + 1}. {card.title}
            </h2>
            <p className="text-gray-300 text-sm z-10 relative">
              {card.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
