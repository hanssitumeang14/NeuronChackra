import Personal from "@/asset/svg-personal";
import ChakraTable from "@/asset/chakra-table";
import Information1 from "@/asset/information1";
import TextInfo from "@/asset/info-text";
import Script from "next/script";

export const metadata = {
  title: "Personal Matrix",
};

export default function PersonalMatrix() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen font-body overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full grid grid-cols-12 gap-px opacity-5">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-[#ffffff0d] aspect-square" />
            ))}
          </div>
        </div>

        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          <div className="relative flex justify-center items-center uppercase py-16 text-white">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="w-[50em] h-[1.875em] bg-[#fef9c340] blur-[75px]" />
            </div>

            <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] rounded-3xl shadow-lg w-full p-6 sm:p-8 md:p-10 border border-[#334155] backdrop-blur-md ring-1 ring-[#475569]">
              {/* Judul */}
              <div className="p-4 sm:p-6 md:px-20 lg:px-40">
                <div className="personal-calculator bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#475569] text-center">
                  <p className="text-[#fcefb4] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wider font-[Cinzel] drop-shadow-sm text-center px-4">
                    ✨ Temukan Nasibmu ✨
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-center text-white px-4">
                  Masukkan nama, tanggal lahir, dan pilih jenis kelamin:
                </p>

                <div className="px-4">
                  <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-md border border-[#334155]">
                    <div className="space-y-6 max-w-xl mx-auto">
                      <input
                        id="name"
                        type="text"
                        placeholder="Masukkan nama"
                        className="w-full bg-white/80 text-slate-900 placeholder-slate-600 border border-slate-500 rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                      />

                      <input
                        id="date"
                        type="date"
                        className="w-full bg-white/80 text-slate-900 border border-slate-500 rounded-xl px-4 py-3 sm:px-6 sm:py-4 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
                      />

                      {/* Radio */}
                      <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="laki-laki"
                            name="gender"
                            value="laki-laki"
                            className="text-blue-500 focus:ring-blue-300"
                          />
                          <label htmlFor="laki-laki" className="text-white text-sm sm:text-base">Laki-laki</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="perempuan"
                            name="gender"
                            value="perempuan"
                            className="text-pink-500 focus:ring-pink-300"
                          />
                          <label htmlFor="perempuan" className="text-white text-sm sm:text-base">Perempuan</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tombol Hitung */}
              <div className="birthday-container flex flex-col justify-center items-center mb-16 mt-10">
                <div className="w-full max-w-lg mx-auto flex flex-col items-center gap-6">
                  <button
                    id="get_the_answer"
                    className="bg-gradient-to-r from-[#7e74d9] to-[#5dbde0] hover:from-[#6c63ff] hover:to-[#38bdf8] text-white font-semibold px-10 py-4 rounded-2xl transition shadow-md text-base md:text-lg"
                  >
                    Buat Hitungan
                  </button>
                </div>
                <div className="errorOutput text-base text-red-500 mt-4" />
              </div>

              {/* Matrix */}
              <div className="matrix-wrapper w-full">
                <div className="matrix-container">
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="personal-calculator bg-gradient-to-br from-[#1f1a3a] via-[#121428] to-[#1c1e2f] p-4 sm:p-6 rounded-2xl shadow-lg border border-[#4338ca4d]">
                      <p className="text-[#fcefb4] text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider font-[Cinzel] drop-shadow-sm text-center">
                        Hasil Perhitungan Personal
                      </p>
                    </div>
                    <div className="output-personal-date text-[#fff8db] mt-4 p-6 bg-gradient-to-br from-[#121428] via-[#1e1b4b] to-[#1e293b] rounded-2xl shadow-lg backdrop-blur-md border border-[#fff8db1a]" />

                    <Personal />

                    <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 px-4">
                      <div className="w-full lg:w-1/2 overflow-x-auto">
                        <ChakraTable />
                      </div>
                       <div id="info-text" className="w-full lg:w-1/2 flex-grow">
                    <TextInfo />
                  </div>
                    </div>

                    <div className="mt-14 w-full px-4 sm:px-6 md:px-12">
                      <Information1 />
                    </div>

                    <div className="flex flex-col items-center mb-14 space-y-4 mt-16">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-purple-500 opacity-10 blur-xl rounded-full animate-pulse group-hover:opacity-20 transition" />
                        <button
                          id="decode-matrix-btn"
                          className="relative z-10 px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide bg-gradient-to-br from-[#5e5fcf] via-[#6f88d2] to-[#4361ee] text-yellow-100 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                        >
                          ✨ Bingung bacanya gimana?
                        </button>
                      </div>

                      <button
                        id="downloadPDF"
                        className="px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide text-cyan-100 bg-[#2c2a5a] border border-white/20 backdrop-blur-md shadow-md hover:bg-[#3a396b] transition-all duration-300 ease-in-out"
                      >
                        ⬇️ Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/script_person.js" strategy="lazyOnload" />
    </>
  );
}
