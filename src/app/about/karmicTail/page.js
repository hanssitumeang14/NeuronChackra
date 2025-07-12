// app/about/karmicTail/page.js
export default function KarmicTail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-purple-300 mb-8 tracking-wide drop-shadow-md">
        3. My Karmic Tail
      </h1>
      <div className="relative w-full max-w-4xl p-6 bg-gray-900 border border-purple-700 rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute -inset-1 bg-purple-700 opacity-10 blur-2xl rounded-2xl pointer-events-none"></div>

        <img
          src="/images/karmicTail.png"
          alt="Ilustrasi Karmic Tail"
          className="rounded-lg shadow-md mb-6 w-full max-w-md mx-auto"
        />

        <p className="text-lg leading-relaxed text-gray-300 z-10 relative">
          <br/> Karmic tail menggambarkan jejak karma dari kehidupan lampau yang masih memengaruhi kehidupan saat ini. Ini muncul dalam bentuk
          pola-pola berulang, rintangan, atau kecenderungan tertentu yang sulit dijelaskan secara logis. <br/><br/>Dengan mengenali dan menyadari
          pola ini, kita dapat melepaskan beban lama dan melangkah lebih bebas menuju perkembangan spiritual.
        </p>
      </div>
    </div>
  );
}
