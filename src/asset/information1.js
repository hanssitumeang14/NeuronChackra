export default function Information1() {
  return (
    <div
      className="flex items-center justify-center rounded-2xl py-10 px-5"
      style={{
        background: 'linear-gradient(to bottom, #111827, #1f2937, #111827)',
      }}
    >
      <div id="accordion-collapse" data-accordion="collapse" className="w-full max-w-3xl">
        <h1 className="text-4xl font-cinzel text-center mb-10" style={{ color: '#60a5fa' }}>
          Penjelasan
        </h1>
        {[
          {
            title: 'Kelebihan Diri & Warisan Leluhur',
            content: [
              'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
              'Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.',
            ],
          },
          {
            title: 'Kelemahan Diri & Tugas dari Leluhur',
            content: [
              'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
              'Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.',
            ],
          },
          {
            title: 'Catatan Masa Lalu dan Forecast Masa Depan',
            content: [
              'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.',
              'Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
            ],
          },
          {
            title: 'Karir Ideal',
            content: [
              'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
              'Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.',
            ],
          },
          {
            title: 'Pasangan Ideal',
            content: [
              'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
              'Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.',
            ],
          },
        ].map((section, idx) => {
          const id = `accordion-collapse-body-${idx + 1}`;
          const headingId = `accordion-collapse-heading-${idx + 1}`;
          return (
            <div
              key={idx}
              className="mb-5 rounded-xl shadow-md backdrop-blur-sm"
              style={{
                border: '1px solid #374151',
                backgroundColor: 'rgba(31, 41, 55, 0.9)',
              }}
            >
              <h2 id={headingId}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-semibold focus:outline-none transition duration-300 ease-in-out rounded-t-xl"
                  style={{
                    borderBottom: '1px solid #374151',
                    color: '#93c5fd',
                    backgroundColor: 'transparent',
                  }}
                  data-accordion-target={`#${id}`}
                  aria-expanded="false"
                  aria-controls={id}
                >
                  <span className="text-lg font-medium" style={{ color: '#60a5fa' }}>
                    {section.title}
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-4 h-4 shrink-0 transform transition-transform ease-in-out duration-200"
                    style={{ color: '#60a5fa' }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div id={id} className="hidden" aria-labelledby={headingId}>
                <div
                  className="p-5 rounded-b-xl"
                  style={{ backgroundColor: '#111827', borderTop: '1px solid #374151' }}
                >
                  {section.content.map((para, pi) => (
                    <p
                      key={pi}
                      className="text-sm leading-relaxed"
                      style={{
                        marginBottom: pi === 0 ? '0.75rem' : '0',
                        color: '#d1d5db',
                      }}
                    >
                      {para.includes('http') ? (
                        <>
                          {para.split(' ').map((word, wi) =>
                            word.startsWith('http') ? (
                              <a
                                key={wi}
                                href={word}
                                className="hover:underline"
                                style={{ color: '#60a5fa' }}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {word}
                              </a>
                            ) : (
                              ` ${word}`
                            )
                          )}
                        </>
                      ) : (
                        para
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
