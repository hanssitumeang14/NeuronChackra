export default function ChakraTable() {
  return (
    <div id="chakra_table" className="w-full flex justify-center items-center my-16 px-4">
      <div className="relative w-full max-w-5xl rounded-lg overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-gray-900 z-0"></div>

        <div className="relative z-10 border border-gray-700 rounded-lg bg-gray-800/90 shadow-inner">
          <table className="w-full table-auto border-collapse text-gray-100 text-sm md:text-base">
            <thead>
              <tr>
                <th
                  className="px-5 py-3 text-center border border-gray-500 bg-blue-700 font-semibold text-gray-200"
                >
                  Nama Chakra
                </th>
                <th
                  className="px-5 py-3 text-center border border-gray-500 bg-blue-700 font-semibold text-gray-200"
                >
                  Fisik
                </th>
                <th
                  className="px-5 py-3 text-center border border-gray-500 bg-blue-700 font-semibold text-gray-200"
                >
                  Energi
                </th>
                <th
                  className="px-5 py-3 text-center border border-gray-500 rounded-tr-lg bg-blue-700 font-semibold text-gray-200"
                >
                  Emosi
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "sah", name: "Sahasrara", physics: 2, energy: 6, emotions: 8 },
                { id: "aj", name: "Ajna", physics: 11, energy: 19, emotions: 3 },
                { id: "vish", name: "Vishuddha", physics: 9, energy: 13, emotions: 22 },
                { id: "anah", name: "Anahata", physics: 16, energy: 20, emotions: 9 },
                { id: "man", name: "Manipura", physics: 7, energy: 7, emotions: 14 },
                { id: "svad", name: "Svadhishtana", physics: 6, energy: 16, emotions: 22 },
                { id: "mul", name: "Muladhara", physics: 9, energy: 17, emotions: 8 },
              ].map(({ id, name, physics, energy, emotions }, idx) => (
                <tr
                  key={id}
                  className={idx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                >
                  <td className="px-5 py-3 border border-gray-600">{name}</td>
                  <td className="text-center px-5 py-3 border border-gray-600" id={`${id}physics`}>{physics}</td>
                  <td className="text-center px-5 py-3 border border-gray-600" id={`${id}energy`}>{energy}</td>
                  <td className="text-center px-5 py-3 border border-gray-600" id={`${id}emotions`}>{emotions}</td>
                </tr>
              ))}
              <tr><td colSpan={4} className="py-2" /></tr>
              <tr className="bg-gray-700 font-semibold text-gray-200">
                <td className="px-5 py-3 border border-gray-600 rounded-bl-lg">Result:</td>
                <td className="text-center px-5 py-3 border border-gray-600" id="resultphysics">6</td>
                <td className="text-center px-5 py-3 border border-gray-600" id="resultenergy">17</td>
                <td className="text-center px-5 py-3 border border-gray-600 rounded-br-lg" id="resultemotions">14</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
