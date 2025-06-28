export default function ChakraTable() {
    return (
        <div id="chakra_table" className="w-full flex justify-center items-center my-16 px-4">
            <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-indigo-500/10 to-purple-700/10 blur-2xl animate-pulse z-0"></div>

                {/* Table */}
                <div className="relative z-10 border border-cyan-400/30 rounded-2xl backdrop-blur-md bg-black/40 shadow-inner shadow-cyan-500/10">
                    <table className="chakra-table w-full table-auto border-separate border-spacing-0 text-white text-sm md:text-base">
                        <thead>
                            <tr className="chakra-tr chakra-table-header bg-gradient-to-r from-fuchsia-700 via-purple-700 to-indigo-700 text-white font-bold tracking-wide">
                                <th className="chakra-name chakra-name__radius-left px-4 py-3 text-left text-cyan-200 font-cinzel">Nama Chakra</th>
                                <th className="chakra-td px-4 py-3 text-center text-cyan-100">Fisik</th>
                                <th className="chakra-td px-4 py-3 text-center text-cyan-100">Energi</th>
                                <th className="chakra-td chakra-name__radius-right px-4 py-3 text-center text-cyan-100">Emosi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="chakra-tr bg-[#1f1f1f] text-white">
                                <td className="chakra-name chakra-name-left px-4 py-2">
                                    <span className="chakra-name-flex" id="circle-sahastrara">Sahasrara</span>
                                </td>
                                <td className="chakra-td px-4 py-2 text-center" id="sahphysics">2</td>
                                <td className="chakra-td px-4 py-2 text-center" id="sahenergy">6</td>
                                <td className="chakra-td px-4 py-2 text-center" id="sahemotions">8</td>
                            </tr>
                            <tr className="chakra-tr bg-[#1f1f1f] text-white">
                                <td className="chakra-name chakra-name-left px-4 py-2">
                                    <span className="chakra-name-flex" id="circle-ajna">Ajna</span>
                                </td>
                                <td className="chakra-td px-4 py-2 text-center" id="ajphysics">11</td>
                                <td className="chakra-td px-4 py-2 text-center" id="ajenergy">19</td>
                                <td className="chakra-td px-4 py-2 text-center" id="ajemotions">3</td>
                            </tr>
                            <tr className="chakra-tr bg-[#1f1f1f] text-white">
                                <td className="chakra-name chakra-name-left px-4 py-2">
                                    <span className="chakra-name-flex" id="circle-vishuddha">Vishuddha</span>
                                </td>
                                <td className="chakra-td px-4 py-2 text-center" id="vishphysics">9</td>
                                <td className="chakra-td px-4 py-2 text-center" id="vishenergy">13</td>
                                <td className="chakra-td px-4 py-2 text-center" id="vishemotions">22</td>
                            </tr>
                            <tr className="chakra-tr bg-[#1f1f1f] text-white">
                                <td className="chakra-name chakra-name-left px-4 py-2">
                                    <span className="chakra-name-flex" id="circle-anahata">Anahata</span>
                                </td>
                                <td className="chakra-td px-4 py-2 text-center" id="anahphysics">16</td>
                                <td className="chakra-td px-4 py-2 text-center" id="anahenergy">20</td>
                                <td className="chakra-td px-4 py-2 text-center" id="anahemotions">9</td>
                            </tr>
                            <tr className="chakra-tr bg-[#1f1f1f] text-white">
                                <td className="chakra-name chakra-name-left px-4 py-2">
                                    <span className="chakra-name-flex" id="circle-manipura">Manipura</span>
                                </td>
                                <td className="chakra-td px-4 py-2 text-center" id="manphysics">7</td>
                                <td className="chakra-td px-4 py-2 text-center" id="manenergy">7</td>
                                <td className="chakra-td px-4 py-2 text-center" id="manemotions">14</td>
                            </tr>
                            <tr className="chakra-tr bg-[#1f1f1f] text-white">
                                <td className="chakra-name chakra-name-left px-4 py-2">
                                    <span className="chakra-name-flex" id="circle-svadhishtana">Svadhishtana</span>
                                </td>
                                <td className="chakra-td px-4 py-2 text-center" id="svadphysics">6</td>
                                <td className="chakra-td px-4 py-2 text-center" id="svadenergy">16</td>
                                <td className="chakra-td px-4 py-2 text-center" id="svademotions">22</td>
                            </tr>
                            <tr className="chakra-tr chakra-name__bottom bg-[#1f1f1f] text-white">
                                <td className="chakra-name chakra-name-left px-4 py-2" style={{ borderBottomLeftRadius: '10px' }}>
                                    <span className="chakra-name-flex" id="circle-muladhara">Muladhara</span>
                                </td>
                                <td className="chakra-td px-4 py-2 text-center" id="mulphysics">9</td>
                                <td className="chakra-td px-4 py-2 text-center" id="mulenergy">17</td>
                                <td className="chakra-td chakra-name__radius-right-bottom2 px-4 py-2 text-center" id="mulemotions">8</td>
                            </tr>

                            <tr style={{ height: '20px' }}></tr>

                            <tr className="chakra-tr chakra-name__bottom chakra-name__top bg-[#1f1f1f] text-white font-semibold">
                                <td className="chakra-name chakra-name__radius-left-bottom px-4 py-2">Result:</td>
                                <td className="chakra-td px-4 py-2 text-center" id="resultphysics">6</td>
                                <td className="chakra-td px-4 py-2 text-center" id="resultenergy">17</td>
                                <td className="chakra-td chakra-name__radius-right-bottom px-4 py-2 text-center" id="resultemotions">14</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
};
