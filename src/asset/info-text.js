export default function TextInfo() {
  return (
    <div className="info-txt space-y-10 flex flex-col items-center justify-center text-white font-[Roboto] px-6 sm:px-10 lg:px-20">
      <style>
        {`
          .base-circle {
            border: 2px solid #00ffff;
            border-radius: 50%;
            width: 2.75em;
            height: 2.75em;
            display: inline-block;
            text-align: center;
            line-height: 2.75em;
            background: radial-gradient(circle at center, #1e1b3a, #0a0a23);
            box-shadow: 0 0 10px #00ffff88, inset 0 0 5px #00ffff44;
            font-family: 'Cinzel', serif;
            color: #ffd700;
            font-size: 1.1rem;
            font-weight: bold;
          }
        `}
      </style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-[#0e0c24] border border-indigo-800/50 rounded-xl shadow-2xl backdrop-blur-md">
        <div className="max-w-md mx-auto text-center space-y-3">
          <h3 className="font-cinzel text-xl text-[#ffd700] tracking-wider">Garis Leluhur (Pria)</h3>
          <div className="flex gap-4 justify-center">
            <span id="malelinepoint1" className="base-circle">18</span>
            <span id="malelinepoint2" className="base-circle">18</span>
            <span id="malelinepoint3" className="base-circle">18</span>
          </div>
        </div>

        <div className="max-w-md mx-auto text-center space-y-3">
          <h3 className="font-cinzel text-xl text-[#ff00cc] tracking-wider">Garis Leluhur (Wanita)</h3>
          <div className="flex gap-4 justify-center">
            <span id="femalelinepoint1" className="base-circle">18</span>
            <span id="femalelinepoint2" className="base-circle">18</span>
            <span id="femalelinepoint3" className="base-circle">18</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-[#0f0c2d] border border-purple-800/60 rounded-xl shadow-xl backdrop-blur-md">
        {/* Personal Purpose */}
        <div className="text-center max-w-sm mx-auto">
          <h3 className="font-cinzel text-lg text-cyan-300">Tujuan Personal</h3>
          <p className="text-sm mt-2 text-white/90">Minat, bakat, kebiasaan, serta keseimbangan energi maskulin dan feminin</p>
          <div className="mt-5 flex justify-center">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="pr-2 text-right align-middle">Sky:</td>
                  <td className="px-2"><span id="skypoint" className="base-circle">13</span></td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <svg width="45" height="75" viewBox="0 0 45 61" fill="none">
                      <path d="M0.422852 1.06299H21.6661V60.0719H0.422852" stroke="#F9F9F8" strokeWidth="1.2" />
                      <path d="M44.68 30.5674H21.6665" stroke="#F9F9F8" strokeWidth="1.2" />
                    </svg>
                  </td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <span id="perspurpose" className="base-circle">5</span>
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 text-right align-middle">Earth:</td>
                  <td className="px-2"><span id="earthpoint" className="base-circle">19</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Society Purpose */}
        <div className="w-full flex justify-center">
        <div className="text-center max-w-sm mx-auto flex flex-col items-center">
          <h3 className="font-cinzel text-lg text-pink-400">Tujuan Sosial</h3>
          <p className="text-sm mt-2 text-white/90">Tugas terhadap genus, hasil di masyarakat</p>
          <div className="mt-5 flex justify-center">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="pr-2 text-right align-middle">M:</td>
                  <td className="px-2"><span id="malepoint" className="base-circle">5</span></td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <svg width="45" height="75" viewBox="0 0 45 61" fill="none">
                      <path d="M0.422852 1.06299H21.6661V60.0719H0.422852" stroke="#F9F9F8" strokeWidth="1.2" />
                      <path d="M44.68 30.5674H21.6665" stroke="#F9F9F8" strokeWidth="1.2" />
                    </svg>
                  </td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <span id="socialpurpose" className="base-circle">10</span>
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 text-right align-middle">F:</td>
                  <td className="px-2"><span id="femalepoint" className="base-circle">5</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>

      {/* General & Planetary Purpose */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-[#0e0c24] border border-indigo-900/50 rounded-xl shadow-2xl backdrop-blur-md text-center">
        <div className="max-w-sm mx-auto">
          <h3 className="font-cinzel text-lg text-cyan-400">Tujuan Umum</h3>
          <p className="text-sm mt-2 text-white/90">Apa jalan spiritual saya?</p>
          <span id="generalpurpose" className="base-circle mt-4">12</span>
        </div>
        <div className="max-w-sm mx-auto">
          <h3 className="font-cinzel text-lg text-magenta-400">Tujuan Planet</h3>
          <p className="text-sm mt-2 text-white/90">Panggilan jiwa secara global</p>
          <span id="planetarypurpose" className="base-circle mt-4">15</span>
        </div>
      </div>
    </div>
  );
}
