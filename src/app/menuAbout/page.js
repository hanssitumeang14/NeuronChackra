// app/about/page.js

'use client'

import { useEffect, useState } from "react";

export default function About() {
  const sections = [
    {
      id: "inner-self",
      number: 1,
      title: "My Inner Self",
      image: "/images/innerSelf.png",
      text: `Di pusat bagan Destiny Matrix terdapat elemen penting yang disebut Arcana Sentral, atau dikenal juga sebagai Jati Diri. Elemen ini mencerminkan energi paling mendasar dalam hidup Anda dan menjadi kunci untuk memahami siapa diri Anda sebenarnya. Arcana Sentral sering kali berkaitan dengan energi kelahiran, yang mencakup sifat kepribadian inti, kekuatan alami, serta tantangan utama yang mungkin Anda hadapi sepanjang hidup.<br/><br/>
<b>Peran Arcana Sentral</b><br/><br/>
Arcana Sentral berfungsi sebagai cermin bagi dunia batin Anda, mencerminkan esensi terdalam dari siapa Anda sebenarnya. Ia menjadi kekuatan penuntun yang memengaruhi keputusan, hubungan, dan arah hidup Anda secara keseluruhan. Dengan memahami arcana ini, Anda dapat terhubung lebih dalam dengan diri sejati, menggali motivasi bawah sadar, serta memahami tema-tema besar yang mewarnai perjalanan hidup Anda.<br/><br/>
<b>Cara Menafsirkan Arcana Sentral</b><br/><br/>
Menafsirkan Arcana Sentral berarti memahami makna simbolisnya dan melihat bagaimana energi ini hadir dalam kehidupan sehari-hari. Beberapa aspek yang bisa dipelajari antara lain:<br/><br/>
- <b>Sifat Kepribadian</b>: Sifat apa yang ditunjukkan oleh Arcana Sentral Anda? Apakah Anda seorang pemimpin alami, penyembuh, atau mungkin seorang visioner?<br/>
- <b>Pelajaran Hidup</b>: Tema atau pelajaran inti apa yang dibawa oleh arcana Anda? Apakah Anda ditakdirkan untuk belajar tentang kemandirian, kasih sayang, atau ekspresi diri?<br/><br/>
<b>Penerapan Arcana Sentral dalam Kehidupan</b><br/><br/>
Setelah memahami Arcana Sentral Anda, pengetahuan ini bisa dijadikan panduan untuk mengambil keputusan yang lebih selaras dengan jati diri Anda. Ini membantu Anda menyusun tujuan yang sesuai dengan nilai-nilai terdalam, memilih jalur hidup yang bermakna, dan tumbuh secara pribadi. Baik saat menghadapi keputusan penting, mencari pengembangan diri, maupun ingin memahami hubungan dengan orang lain, Arcana Sentral merupakan alat yang kuat untuk penemuan dan pemberdayaan diri.`
    },
    {
      id: "outer-self",
      number: 2,
      title: "My Outer Self",
      image: "/images/outerSelf.png",
      text: `<b>Outer Self</b>, yang juga dikenal sebagai Portrait Zone, adalah aspek penting dalam Destiny Matrix yang menggambarkan bagaimana Anda menampilkan diri kepada dunia. Zona ini mengatur citra luar Anda dan berperan besar dalam membentuk bagaimana orang lain melihat Anda.<br/><br/>
<b>Peran Portrait Zone</b><br/><br/>
Portrait Zone mencerminkan persona atau gambaran yang Anda tunjukkan dalam kehidupan sehari-hari. Jika Central Arcana menggambarkan inner self Anda, maka Portrait Zone fokus pada ekspresi luar—citra yang Anda pilih untuk diperlihatkan.<br/><br/>
<b>Mengeksplorasi Self-Image</b><br/><br/>
Portrait Zone mendorong Anda untuk merenungkan:<br/><br/>
- <b>Bagaimana saya ingin dilihat oleh orang lain?</b><br/>
- <b>Apakah citra luar saya mencerminkan inner self saya?</b><br/>
- <b>Apakah saya nyaman dengan cara saya menampilkan diri?</b><br/><br/>
Keaslian dalam Portrait Zone akan menghasilkan interaksi yang lebih tulus dan berdampak positif pada kehidupan sosial Anda.`
    },
    {
      id: "karmic-tail",
      number: 3,
      title: "My Karmic Tail",
      image: "/images/karmicTail.png",
      text: `<b>Karmic Tail</b> adalah elemen penting dalam Destiny Matrix Chart yang mewakili tugas dan pelajaran yang belum terselesaikan dari kehidupan lampau, yang masih memengaruhi kehidupan Anda saat ini. Mirip dengan konsep Tikkun dalam Kabbalah yang berarti koreksi jiwa, Karmic Tail Anda menggambarkan tujuan utama dan tantangan yang harus Anda hadapi dalam kehidupan ini. Ini menjadi sumber hambatan terbesar, sekaligus kunci untuk pertumbuhan dan transformasi Anda yang paling berarti.<br/><br/>
<b>Memahami Karmic Tail</b><br/><br/>
Karmic Tail adalah benang merah yang menghubungkan inkarnasi masa lalu Anda, membawa karma yang belum terselesaikan untuk diatasi di kehidupan sekarang. Karmic Tail mengungkap pola-pola tersembunyi, kejadian yang berulang, dan pengaruh-pengaruh mendasar yang membentuk pengalaman Anda hari ini. Dengan memahami Karmic Tail, Anda bisa melihat akar penyebab tantangan saat ini dan bekerja secara sadar untuk memperbaikinya, sehingga jiwa Anda dapat sembuh dan berkembang.<br/><br/>
<b>Peran Karmic Tail dalam Hidup Anda</b><br/><br/>
Karmic Tail berfungsi sebagai panduan untuk pelajaran hidup yang paling sulit. Pelajaran ini sering muncul sebagai situasi berat atau masalah yang berulang, seolah mengikuti Anda kemanapun pergi. Namun, tantangan ini bukan untuk menghukum, melainkan memberikan kesempatan untuk pertumbuhan dan kesadaran diri yang mendalam.<br/><br/>
<b>Menavigasi Karmic Tail Anda</b><br/><br/>
Ada 26 konfigurasi Karmic Tail yang berbeda, masing-masing merepresentasikan tema dan pelajaran karma yang spesifik. Memahami konfigurasi mana yang Anda miliki akan memberikan kejelasan tentang tantangan khusus yang sedang Anda hadapi. Ini tentang mengenali pola karma yang berulang sepanjang hidup dan mengambil langkah sadar untuk mengatasinya.<br/><br/>
Misalnya, jika Karmic Tail Anda berkaitan dengan tema kekuasaan dan kontrol, Anda mungkin sering menemui situasi di mana Anda harus menegaskan diri atau belajar melepaskan kendali. Pemahaman ini memungkinkan Anda menghadapi situasi tersebut dengan kesadaran, mengubahnya dari sumber frustrasi menjadi peluang untuk evolusi pribadi.<br/><br/>
<b>Membuka Takdir Melalui Kesadaran Karmic</b><br/><br/>
Dengan mendalami Karmic Tail Anda, Anda membuka rahasia takdir Anda. Anda mulai menyadari bagaimana tindakan masa lalu berdampak pada masa kini dan membentuk masa depan. Kesadaran ini memberi kekuatan untuk membuat pilihan yang lebih sadar, menghindari situasi negatif, dan akhirnya menjalankan tujuan karma yang harus Anda selesaikan.`
    },
    {
      id: "love-line",
      number: 4,
      title: "My Love Line",
      image: "/images/loveLine.png",
      text: `<b>Destiny Matrix Love Line</b> memberikan wawasan mendalam tentang perjalanan romantis Anda, mengungkap bagaimana pola karma masa lalu, keinginan Anda saat ini, dan arah hubungan di masa depan membentuk kehidupan cinta Anda. Tiga posisi utama—<b>karmic influence</b> (masa lalu), <b>My Desire</b> (masa kini), dan <b>future love potential</b> (yang terkait dengan Money Line)—menunjukkan hal-hal yang perlu Anda sembuhkan, hargai, dan kembangkan agar dapat menciptakan hubungan yang memuaskan dan harmonis. Memahami aspek-aspek ini membantu Anda menyelaraskan pertumbuhan pribadi dengan keberhasilan emosional dan finansial.`
    },
    {
      id: "money-line",
      number: 5,
      title: "My Money Line",
      image: "/images/moneyLine.png",
      text: `<b>A financial compass</b><br/><br/><b>My Money Line</b><br/><br/>The Money Line in your Destiny Matrix Chart reveals key insights into your financial potential. Comprised of three core numbers called the Money Line and a fourth number known as the Money Lock, this section helps you understand how money flows in your life, suggests areas to explore for career choices, and offers ways to improve your financial well-being.<br/><br/>The three core numbers of the Money Line represent different financial energies that influence your earning potential and money management. The <b>Money Lock</b>, which is the node on the farthest right of your chart, acts as a gateway—it can either block or enhance the flow of financial energy. When received in the negative, the Money Lock manifests as financial obstacles, but by working to clear these blocks, you can unlock greater financial success and stability.<br/><br/>By exploring the energies in your Money Line, you can discover strategies to clear these blocks and positively influence your financial outcomes.`
    },
    {
      id: "talents",
      number: 6,
      title: "My Talents",
      image: "/images/talents.png",
      text: `<b>Bagian Talents</b> dalam Destiny Matrix Chart menyoroti keterampilan dan kemampuan alami yang Anda miliki. Talenta ini merupakan kekuatan bawaan yang, ketika disadari dan dikembangkan, dapat memberikan nilai besar bagi dunia di sekitar Anda.<br/><br/><b>Menemukan dan Memahami Talenta</b><br/><br/>Memahami talenta Anda bukan hanya soal mengenali apa yang Anda kuasai, tapi juga menemukan bagaimana Anda bisa menggunakan kemampuan tersebut untuk memberikan dampak positif. Dengan menyelaraskan tindakan Anda dengan talenta alami, Anda tidak hanya akan merasakan kepuasan lebih dalam pekerjaan dan kehidupan pribadi, tetapi juga memberikan kontribusi bermakna bagi orang lain.<br/><br/><b>Aplikasi dalam Kehidupan</b><br/><br/>Chart Anda mengungkapkan talenta-talenta ini, menunjukkan di mana kekuatan Anda berada dan bagaimana cara terbaik untuk mengaplikasikannya. Baik dalam karier, hobi, atau hubungan, memanfaatkan talenta Anda bisa membawa hidup yang lebih kaya dan penuh makna.`
    }
  ];

  const [activeId, setActiveId] = useState(null);
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        const rect = el?.getBoundingClientRect();
        if (rect?.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveId(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      <nav className="hidden lg:flex flex-col w-64 px-6 py-12 border-r border-gray-800 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-300 mb-4 uppercase tracking-wide">Table of Contents</h2>
        <ul className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block hover:text-purple-400 transition ${
                  activeId === section.id ? "text-purple-400 font-semibold" : "text-gray-400"
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 px-6 md:px-12 lg:px-32 py-16 space-y-32">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-purple-300 tracking-wide">
          Discover Your Soul Structure
        </h1>

        {sections.map((section, index) => {
          const isExpanded = expanded[section.id];
          const shortText = section.text.split('<br/><br/>').slice(0, 3).join('<br/><br/>');
          const showReadMore = section.text.split('<br/><br/>').length > 3;

          return (
            <section
              key={index}
              id={section.id}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-start gap-12 lg:gap-24 scroll-mt-24`}
            >
              <div className="w-full max-w-md flex-shrink-0">
                <img
                  src={section.image}
                  alt={`Ilustrasi ${section.title}`}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="max-w-2xl w-full">
                <h2 className="text-3xl font-bold text-purple-300 mb-4">
                  {section.number}. {section.title}
                </h2>
                <div
                  className="text-lg text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: isExpanded || !showReadMore ? section.text : shortText
                  }}
                />
                {showReadMore && (
                  <button
                    onClick={() => toggleExpanded(section.id)}
                    className="mt-4 text-sm text-purple-400 hover:underline"
                  >
                    {isExpanded ? "Tampilkan lebih sedikit" : "Baca selengkapnya..."}
                  </button>
                )}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
