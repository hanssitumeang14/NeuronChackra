// app/about/moneyLine/page.js
export default function MoneyLine() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-purple-300 mb-8 tracking-wide drop-shadow-md">
        5. My Money Line
      </h1>
      <div className="relative w-full max-w-4xl p-6 bg-gray-900 border border-purple-700 rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute -inset-1 bg-purple-700 opacity-10 blur-2xl rounded-2xl pointer-events-none"></div>

        <img
          src="/images/moneyLine.png"
          alt="Ilustrasi Money Line"
          className="rounded-lg shadow-md mb-6 w-full max-w-md mx-auto"
        />

        <p className="text-lg leading-relaxed text-gray-300 z-10 relative">
          <br/>Money line menunjukkan hubungan kita dengan materi, kelimpahan, dan nilai. Ini bukan hanya soal uang, tetapi juga persepsi
          terhadap keberlimpahan, rasa layak menerima, dan bagaimana kita menghargai energi tukar dalam hidup. <br/><br/>Dengan memahami money line,
          kita bisa membebaskan diri dari pola kekurangan dan membuka pintu kelimpahan sejati.
        </p>
      </div>
    </div>
  );
}
