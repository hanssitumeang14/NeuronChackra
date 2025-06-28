import Information from "@/asset/information";
import Compatibility from "@/asset/svg-compatibility";
import InfoTxtCompatibility from "@/asset/info-txt-compatibility";
import Script from "next/script";

export const metadata = {
    title: "Compatibility Matrix",
};

export default function CompatibilityMatrix() {
    return (
        <>
            <div className="relative bg-gradient-to-b from-[#0d0b1f] to-[#1a103d] min-h-screen font-body overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,0,204,0.1),transparent_70%)]" />
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,255,255,0.1),transparent_70%)]" />
                    <div className="w-full h-full grid grid-cols-12 gap-px opacity-5">
                        {Array.from({ length: 144 }).map((_, i) => (
                            <div key={i} className="bg-white/10 aspect-square" />
                        ))}
                    </div>
                </div>

                <div className="container max-w-[1920px] mx-auto relative z-10">
                    <div className="relative flex justify-center items-center uppercase py-12 text-white text-center">
                        <div className="absolute inset-0 flex justify-center items-center -z-10">
                            <div className="w-[50em] h-[1.875em] bg-[#fff8db] blur-[4.6875em]" />
                        </div>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-bold font-[Cinzel] tracking-wide text-[#ffd700] drop-shadow-[0_1px_5px_rgba(255,215,0,0.6)]">
                            💫 Kalkulator Matriks Kompatibilitas 💫
                        </p>
                    </div>

                    <div className="birthday-container px-4 py-6 max-w-4xl mx-auto bg-gradient-to-br from-sky-600/80 via-indigo-700/80 to-purple-900/90 p-8 rounded-2xl shadow-xl backdrop-blur-md border border-indigo-800/40">
                        <p className="text-lg text-center font-medium text-white mb-6">
                            Masukkan Nama, Tanggal Lahir Anda dan Pasangan Anda
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-900">
                            <div>
                                <label htmlFor="name-partner1" className="block text-sm font-semibold text-white mb-2">
                                    Nama Partner 1
                                </label>
                                <input
                                    type="text"
                                    id="name-partner1"
                                    name="partner1"
                                    placeholder="Masukkan nama partner 1"
                                    className="w-full bg-[#fff8db]/90 text-slate-900 placeholder-slate-600 border border-[#5a4dff] rounded-xl px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="name-partner2" className="block text-sm font-semibold text-white mb-2">
                                    Nama Partner 2
                                </label>
                                <input
                                    type="text"
                                    id="name-partner2"
                                    name="partner2"
                                    placeholder="Masukkan nama partner 2"
                                    className="w-full bg-[#fff8db]/90 text-slate-900 placeholder-slate-600 border border-[#5a4dff] rounded-xl px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="date_person1" className="block text-sm font-semibold text-white mb-2">
                                    Tanggal Lahir Partner 1
                                </label>
                                <input
                                    type="date"
                                    id="date_person1"
                                    name="partner1"
                                    className="w-full bg-[#fff8db]/90 text-slate-900 border border-[#5a4dff] rounded-xl px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="date_person2" className="block text-sm font-semibold text-white mb-2">
                                    Tanggal Lahir Partner 2
                                </label>
                                <input
                                    type="date"
                                    id="date_person2"
                                    name="partner2"
                                    className="w-full bg-[#fff8db]/90 text-slate-900 border border-[#5a4dff] rounded-xl px-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                            </div>

                            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                                <button
                                    id="createChart"
                                    className="w-full max-w-xs py-3 bg-gradient-to-r from-[#c084fc] to-[#38bdf8] hover:from-[#a855f7] hover:to-[#0ea5e9] text-white font-semibold rounded-2xl shadow-lg transition"
                                    style={{ display: "none" }}
                                >
                                    Buat Hitungan
                                </button>
                            </div>
                        </div>

                        <div className="errorOutput1 text-red-500 mt-4 text-sm text-center" />
                    </div>

                   <div className="flex flex-col text-white my-16 compatibility-container items-center scroll-mt-28">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#00ffff] drop-shadow-lg mb-6">
                            ✨ Kecocokan Kalian ✨
                        </h1>
                        <div
                            className="output2 text-[#fff8db] mt-4 p-6 bg-gradient-to-br from-[#0b0c2a] via-[#1e1b4b] to-[#1e293b] rounded-2xl shadow-2xl backdrop-blur-md border border-[#fff8db]/10">
                        </div>

                        <Compatibility />
                        <InfoTxtCompatibility />
                       

                        <div className="flex flex-col items-center mb-14 space-y-4 mt-10">
                            <div className="flex flex-col items-center gap-6 mt-12 mb-16">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-purple-600 
                                                    opacity-20 blur-xl rounded-full animate-pulse group-hover:opacity-30 transition"></div>
                                    <button id="showPDF" className="relative z-10 px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide 
                                                bg-gradient-to-br from-[#3a0ca3] via-[#7209b7] to-[#4361ee] text-yellow-100 
                                                shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]
                                                transition-all duration-300 ease-in-out">
                                    ✨ Bingung bacanya gimana?
                                    </button>
                                </div>
                                <button id="downloadPDF"
                                    className="px-8 py-4 rounded-full text-lg font-semibold font-cosmic tracking-wide text-cyan-100 
                                    bg-[#1e1b4b] border border-white/20 backdrop-blur-md shadow-[0_0_12px_rgba(255,255,255,0.08)] 
                                    hover:bg-[#2c2674] hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] transition-all duration-300 ease-in-out">
                                    ⬇️ Download PDF
                                </button>
                            </div>
                        </div>
                         <Information />
                    </div>
                </div>
            </div>
           <Script src="/inputs_compatibility.js" strategy="lazyOnload" />
        </>
    );
}
