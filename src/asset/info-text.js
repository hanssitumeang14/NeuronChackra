export default function TextInfo() {
  return (
    <div className="text-[#ffffff] font-[Roboto] w-full space-y-8 sm:space-y-10">
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
            font-size: 1.1rem;
            font-weight: bold;
          }
        `}
      </style>

      {/* Tujuan Personal */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="bg-[#0f0c2d] border border-[#6b21a8] rounded-xl p-4 sm:p-6 shadow-md backdrop-blur">
          <h3 className="font-cinzel text-center text-lg sm:text-xl lg:text-2xl text-[#67e8f9]">Tujuan Personal</h3>
          <p className="text-sm sm:text-base text-center text-[#cccccc] mt-2">
            Minat, bakat, kebiasaan, serta keseimbangan energi maskulin dan feminin
          </p>
          <div className="flex justify-center mt-4">
            <table className="table-auto text-sm sm:text-lg">
              <tbody>
                <tr>
                  <td className="pr-2 text-right align-middle">Sky:</td>
                  <td className="px-2">
                    <span id="skypoint" className="base-circle">13</span>
                  </td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <svg width="45" height="70" viewBox="0 0 45 61" fill="none">
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
                  <td className="px-2">
                    <span id="earthpoint" className="base-circle">19</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tujuan Sosial */}
        <div className="bg-[#0f0c2d] border border-[#6b21a8] rounded-xl p-4 sm:p-6 shadow-md backdrop-blur">
          <h3 className="font-cinzel text-center text-lg sm:text-xl lg:text-2xl text-[#f9a8d4]">Tujuan Sosial</h3>
          <p className="text-sm sm:text-base text-center text-[#cccccc] mt-2">
            Tugas terhadap genus, hasil di masyarakat
          </p>
          <div className="flex justify-center mt-4">
            <table className="table-auto text-sm sm:text-lg">
              <tbody>
                <tr>
                  <td className="pr-2 text-right align-middle">M:</td>
                  <td className="px-2">
                    <span id="malepoint" className="base-circle">5</span>
                  </td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <svg width="45" height="70" viewBox="0 0 45 61" fill="none">
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
                  <td className="px-2">
                    <span id="femalepoint" className="base-circle">5</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tujuan Umum & Planet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 bg-[#0e0c24] border border-[#312e81] rounded-xl p-4 sm:p-6 shadow-md backdrop-blur text-center">
          <div>
            <h3 className="font-cinzel text-lg sm:text-xl lg:text-2xl text-[#67e8f9]">Tujuan Umum</h3>
            <p className="text-sm sm:text-base text-[#e5e5e5] mt-2">Apa jalan spiritual saya?</p>
            <span id="generalpurpose" className="base-circle mt-3 inline-block">12</span>
          </div>
          <div>
            <h3 className="font-cinzel text-lg sm:text-xl lg:text-2xl text-[#c4b5fd]">Tujuan Planet</h3>
            <p className="text-sm sm:text-base text-[#e5e5e5] mt-2">Panggilan jiwa secara global</p>
            <span id="planetarypurpose" className="base-circle mt-3 inline-block">15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
