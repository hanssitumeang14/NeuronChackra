export default function Information1() {
  return (
   <div className="flex items-center rounded-2xl justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-10 px-5 mb-16">
      <div id="accordion-collapse" data-accordion="collapse" className="w-full max-w-3xl">
        <h1 className="text-4xl font-cinzel text-center text-blue-400 mb-10 drop-shadow-none">
          Penjelasan
        </h1>
        {[
          {
            title: "Kelebihan Diri & Warisan Leluhur",
            content: [
              "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
              "Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.",
            ],
          },
          {
            title: "Kelemahan Diri & Tugas dari Leluhur",
            content: [
              "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
              "Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
            ],
          },
          {
            title: "Catatan Masa Lalu dan Forecast Masa Depan",
            content: [
              "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
              "Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
            ],
          },
          {
            title: "Karir Ideal",
            content: [
              "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
              "Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
            ],
          },
          {
            title: "Pasangan Ideal",
            content: [
              "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
              "Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
            ],
          },
        ].map((section, idx) => {
          const id = `accordion-collapse-body-${idx + 1}`;
          const headingId = `accordion-collapse-heading-${idx + 1}`;
          return (
            <div
              key={idx}
              className="mb-5 border border-gray-700 rounded-xl shadow-md bg-gray-800/90 backdrop-blur-sm"
            >
              <h2 id={headingId}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-semibold text-blue-300 border-b border-gray-700 rounded-t-xl focus:outline-none hover:bg-gray-700 transition duration-300 ease-in-out"
                  data-accordion-target={`#${id}`}
                  aria-expanded="false"
                  aria-controls={id}
                >
                  <span className="text-lg text-blue-400 font-medium">
                    {section.title}
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-4 h-4 shrink-0 transform transition-transform ease-in-out duration-200 text-blue-400"
                    aria-hidden="true"
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
                <div className="p-5 bg-gray-900 border-t border-gray-700 rounded-b-xl">
                  {section.content.map((para, pi) => (
                    <p
                      key={pi}
                      className={`${pi === 0 ? "mb-3" : ""} text-sm text-gray-300 leading-relaxed`}
                    >
                      {para.includes("http") ? (
                        <>
                          {para.split(" ").map((word, wi) =>
                            word.startsWith("http") ? (
                              <a
                                key={wi}
                                href={word}
                                className="text-blue-400 hover:underline"
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
