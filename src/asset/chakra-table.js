export default function ChakraTable() {
  return (
    <div id="chakra_table" className="w-full flex justify-center items-center my-16 px-4">
      <div className="relative w-full max-w-5xl rounded-lg overflow-hidden shadow-md">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: '#111827' }}></div>

        <div className="relative z-10 border rounded-lg shadow-inner"
          style={{
            borderColor: '#374151',
            backgroundColor: 'rgba(31, 41, 55, 0.9)', // aman, setara bg-gray-800/90
          }}
        >
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm md:text-base" style={{ color: '#f3f4f6' }}>
              <thead>
                <tr>
                  {['Nama Chakra', 'Fisik', 'Energi', 'Emosi'].map((col, i) => (
                    <th
                      key={col}
                      className="px-5 py-3 text-center font-semibold"
                      style={{
                        backgroundColor: '#1D4ED8', // setara bg-blue-700
                        color: '#e5e7eb', // setara text-gray-200
                        border: '1px solid #6b7280',
                        borderTopRightRadius: i === 3 ? '0.5rem' : '0',
                      }}
                    >
                      {col}
                    </th>
                  ))}
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
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#1f2937' : '#374151', // gray-800 / gray-700
                    }}
                  >
                    <td className="px-5 py-3 border" style={{ borderColor: '#4b5563' }}>{name}</td>
                    <td className="text-center px-5 py-3 border" style={{ borderColor: '#4b5563' }} id={`${id}physics`}>{physics}</td>
                    <td className="text-center px-5 py-3 border" style={{ borderColor: '#4b5563' }} id={`${id}energy`}>{energy}</td>
                    <td className="text-center px-5 py-3 border" style={{ borderColor: '#4b5563' }} id={`${id}emotions`}>{emotions}</td>
                  </tr>
                ))}
                <tr><td colSpan={4} className="py-2" /></tr>
                <tr style={{ backgroundColor: '#374151', color: '#e5e7eb', fontWeight: 600 }}>
                  <td className="px-5 py-3 border" style={{ borderColor: '#4b5563', borderBottomLeftRadius: '0.5rem' }}>Result:</td>
                  <td className="text-center px-5 py-3 border" style={{ borderColor: '#4b5563' }} id="resultphysics">6</td>
                  <td className="text-center px-5 py-3 border" style={{ borderColor: '#4b5563' }} id="resultenergy">17</td>
                  <td className="text-center px-5 py-3 border" style={{ borderColor: '#4b5563', borderBottomRightRadius: '0.5rem' }} id="resultemotions">14</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
