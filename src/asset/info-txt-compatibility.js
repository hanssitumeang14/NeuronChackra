export default function InfoTxtCompatibility() {
  const baseCircleStyle =
    "w-10 h-10 rounded-full border border-cyan-300 text-white text-sm font-bold flex items-center justify-center bg-black/40";

  return (
    <div className="info-txt space-y-6 flex flex-col items-center justify-center text-white py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#1e1b3a] via-[#2a1a3b] to-[#14121f] border border-cyan-500/40 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center">
          <h3 className="font-bold text-xl text-cyan-300 mb-2">Hubungan</h3>
          <p className="text-sm text-[#e2e8f0]">Tujuan bersama, pertumbuhan spiritual, mencari stabilitas</p>
          <div className="flex items-center justify-center mt-6">
            <table>
              <tbody>
                <tr>
                  <td className="pr-2 text-right">Sky:</td>
                  <td className="px-2">
                    <span id="compatibilitySkypoint" className={baseCircleStyle}>3</span>
                  </td>
                  <td rowSpan={2} className="px-2 align-middle">
                    <svg width="45" height="75" viewBox="0 0 45 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.42 1.06H21.67V60.07H0.42" stroke="#94fdfd" strokeWidth="1.2" />
                      <path d="M44.68 30.56H21.67" stroke="#94fdfd" strokeWidth="1.2" />
                    </svg>
                  </td>
                  <td rowSpan={2}>
                    <span id="compatibilityRelationship" className={baseCircleStyle}>7</span>
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 text-right">Earth:</td>
                  <td className="px-2">
                    <span id="compatibilityEarthpoint" className={baseCircleStyle}>4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1e1b3a] via-[#2a1a3b] to-[#14121f] border border-cyan-500/40 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center">
          <h3 className="font-bold text-xl text-cyan-300 mb-2">Kebersatuan</h3>
          <p className="text-sm text-[#e2e8f0]">Realisasi potensi keuangan, penyatuan dua genus</p>
          <div className="flex items-center justify-center mt-6">
            <table>
              <tbody>
                <tr>
                  <td className="pr-2 text-right">M:</td>
                  <td className="px-2">
                    <span id="compatibilityMalepoint" className={baseCircleStyle}>5</span>
                  </td>
                  <td rowSpan={2}>
                    <svg width="45" height="75" viewBox="0 0 45 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.42 1.06H21.67V60.07H0.42" stroke="#94fdfd" strokeWidth="1.2" />
                      <path d="M44.68 30.56H21.67" stroke="#94fdfd" strokeWidth="1.2" />
                    </svg>
                  </td>
                  <td rowSpan={2}>
                    <span id="compatibilityUnion" className={baseCircleStyle}>9</span>
                  </td>
                </tr>
                <tr>
                  <td className="pr-2 text-right">F:</td>
                  <td className="px-2">
                    <span id="compatibilityFemalepoint" className={baseCircleStyle}>4</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1e1b3a] via-[#2a1a3b] to-[#14121f] border border-cyan-500/40 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center">
          <h3 className="font-bold text-xl text-cyan-300 mb-2">Keharmonisan</h3>
          <p className="text-sm text-[#e2e8f0]">Hubungan saling menghormati dan merasakan kesatuan</p>
          <div className="flex items-center justify-center mt-6">
            <table>
              <tbody>
                <tr>
                  <td className="px-2">
                    <span id="compatibilityHarmony1" className={baseCircleStyle}>6</span>
                  </td>
                  <td rowSpan={2}>
                    <svg width="45" height="75" viewBox="0 0 45 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.42 1.06H21.67V60.07H0.42" stroke="#94fdfd" strokeWidth="1.2" />
                      <path d="M44.68 30.56H21.67" stroke="#94fdfd" strokeWidth="1.2" />
                    </svg>
                  </td>
                  <td rowSpan={2}>
                    <span id="compatibilityHarmony" className={baseCircleStyle}>3</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-2">
                    <span id="compatibilityHarmony2" className={baseCircleStyle}>6</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
