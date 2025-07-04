export default function TextInfo() {
  return (
    <div className="text-white font-[Roboto] w-full space-y-10">
      <style>
        {`
          .base-circle {
            border: 2px solid #00ffff;
            border-radius: 50%;
            width: 2.5em;
            height: 2.5em;
            display: inline-block;
            text-align: center;
            line-height: 2.5em;
            background: radial-gradient(circle at center, #1e1b3a, #0a0a23);
            box-shadow: 0 0 10px #00ffff88, inset 0 0 5px #00ffff44;
            font-family: 'Cinzel', serif;
            color: #ffd700;
            font-size: 1rem;
            font-weight: bold;
          }
        `}
      </style>

      {/* Leluhur */}
      <div className="grid grid-cols-1 gap-6 bg-[#0e0c24] border border-indigo-800/50 rounded-xl shadow-lg backdrop-blur-md p-4">
        <div className="text-center space-y-2">
          <h3 className="font-cinzel text-base text-[#ffd700] tracking-wider">Garis Leluhur (Pria)</h3>
          <div className="flex justify-center gap-2">
            <span id="malelinepoint1" className="base-circle">18</span>
            <span id="malelinepoint2" className="base-circle">18</span>
            <span id="malelinepoint3" className="base-circle">18</span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="font-cinzel text-base text-[#ff00cc] tracking-wider">Garis Leluhur (Wanita)</h3>
          <div className="flex justify-center gap-2">
            <span id="femalelinepoint1" className="base-circle">18</span>
            <span id="femalelinepoint2" className="base-circle">18</span>
            <span id="femalelinepoint3" className="base-circle">18</span>
          </div>
        </div>
      </div>

      {/* Tujuan Personal, Sosial, Spirit */}
      <div className="flex flex-col gap-6">
        {/* Tujuan Personal */}
        <div className="bg-[#0f0c2d] border border-purple-800/60 rounded-xl p-4 shadow-md backdrop-blur">
          <h3 className="font-cinzel text-center text-sm text-cyan-300">Tujuan Personal</h3>
          <p className="text-xs text-center text-white/80 mt-1">
            Minat, bakat, kebiasaan, serta keseimbangan energi maskulin dan feminin
          </p>
          <div className="flex justify-center mt-4">
            <table className="table-auto text-sm">
              <tbody>
                <tr>
                  <td className="pr-1 text-right align-middle">Sky:</td>
                  <td className="px-1"><span id="skypoint" className="base-circle">13</span></td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <svg width="40" height="65" viewBox="0 0 45 61" fill="none">
                      <path d="M0.422852 1.06299H21.6661V60.0719H0.422852" stroke="#F9F9F8" strokeWidth="1.2" />
                      <path d="M44.68 30.5674H21.6665" stroke="#F9F9F8" strokeWidth="1.2" />
                    </svg>
                  </td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <span id="perspurpose" className="base-circle">5</span>
                  </td>
                </tr>
                <tr>
                  <td className="pr-1 text-right align-middle">Earth:</td>
                  <td className="px-1"><span id="earthpoint" className="base-circle">19</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tujuan Sosial */}
        <div className="bg-[#0f0c2d] border border-pink-500/40 rounded-xl p-4 shadow-md backdrop-blur">
          <h3 className="font-cinzel text-center text-sm text-pink-400">Tujuan Sosial</h3>
          <p className="text-xs text-center text-white/80 mt-1">
            Tugas terhadap genus, hasil di masyarakat
          </p>
          <div className="flex justify-center mt-4">
            <table className="table-auto text-sm">
              <tbody>
                <tr>
                  <td className="pr-1 text-right align-middle">M:</td>
                  <td className="px-1"><span id="malepoint" className="base-circle">5</span></td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <svg width="40" height="65" viewBox="0 0 45 61" fill="none">
                      <path d="M0.422852 1.06299H21.6661V60.0719H0.422852" stroke="#F9F9F8" strokeWidth="1.2" />
                      <path d="M44.68 30.5674H21.6665" stroke="#F9F9F8" strokeWidth="1.2" />
                    </svg>
                  </td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <span id="socialpurpose" className="base-circle">10</span>
                  </td>
                </tr>
                <tr>
                  <td className="pr-1 text-right align-middle">F:</td>
                  <td className="px-1"><span id="femalepoint" className="base-circle">5</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tujuan Umum & Planet */}
        <div className="grid grid-cols-2 gap-4 bg-[#0e0c24] border border-indigo-900/50 rounded-xl p-4 shadow-md backdrop-blur text-center">
          <div>
            <h3 className="font-cinzel text-sm text-cyan-400">Tujuan Umum</h3>
            <p className="text-xs text-white/90 mt-1">Apa jalan spiritual saya?</p>
            <span id="generalpurpose" className="base-circle mt-3 inline-block">12</span>
          </div>
          <div>
            <h3 className="font-cinzel text-sm text-purple-300">Tujuan Planet</h3>
            <p className="text-xs text-white/90 mt-1">Panggilan jiwa secara global</p>
            <span id="planetarypurpose" className="base-circle mt-3 inline-block">15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
