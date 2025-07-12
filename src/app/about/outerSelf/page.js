// app/about/outerSelf/page.js
export default function OuterSelf() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-purple-300 mb-8 tracking-wide drop-shadow-md">
        2. My Outer Self
      </h1>
      <div className="relative w-full max-w-4xl p-6 bg-gray-900 border border-purple-700 rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute -inset-1 bg-purple-700 opacity-10 blur-2xl rounded-2xl pointer-events-none"></div>

        <img
          src="/images/outerSelf.png"
          alt="Ilustrasi Outer Self"
          className="rounded-lg shadow-md mb-6 w-full max-w-md mx-auto"
        />

        <p className="text-lg leading-relaxed text-gray-300 z-10 relative">
          <br/>Outer self mencerminkan bagaimana kita tampil dan berinteraksi dengan dunia luar. Ini adalah ekspresi energi lahir yang terlihat
          dalam kepribadian, sikap, dan tindakan sehari-hari. <br/><br/>Memahami sisi luar diri membantu kita menyeimbangkan antara kesan yang kita
          berikan dan siapa diri kita sebenarnya di dalam.
        </p>
      </div>
    </div>
  );
}
