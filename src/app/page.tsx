'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 max-w-3xl mx-auto font-sans">
      {/* Header */}
      <header className="text-center border-b pb-6 mb-8">
        <img
          src="/putra.png"
          alt="Putra's Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 border"
        />
        <h1 className="text-3xl font-bold">Putra Saputra</h1>
        <p className="text-gray-600">Web Developer | Frontend Engineer | UI/UX Enthusiast</p>
        <div className="mt-4 text-sm text-gray-700 space-x-4">
          <a href="mailto:putra@email.com" className="hover:underline">putra@email.com</a>
          <a href="https://github.com/putrausername" target="_blank" className="hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/putrausername" target="_blank" className="hover:underline">LinkedIn</a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 border-b pb-1">Professional Summary</h2>
        <p className="text-gray-800 text-justify">
          Seorang Web Developer dengan pengalaman membangun aplikasi front-end modern menggunakan React dan Next.js. Memiliki ketertarikan kuat pada performa web, pengalaman pengguna, dan desain sistem UI yang skalabel. Terbiasa bekerja dengan tim, cepat beradaptasi, dan terbuka terhadap teknologi baru.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 border-b pb-1">Technical Skills</h2>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-800 text-sm">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>HTML / CSS / Tailwind</li>
          <li>Node.js / Express</li>
          <li>Git & GitHub</li>
          <li>REST API / JSON</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 border-b pb-1">Experience</h2>
        <div className="mb-4">
          <p className="font-semibold text-gray-900">Frontend Developer – PT Teknologi Digital | 2023 - Present</p>
          <ul className="list-disc list-inside text-sm text-gray-800 mt-1">
            <li>Membangun dan memelihara antarmuka pengguna menggunakan React dan Tailwind.</li>
            <li>Berkoordinasi dengan tim backend dalam mengkonsumsi REST API.</li>
            <li>Meningkatkan performa web hingga 40% melalui optimasi code-splitting.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 border-b pb-1">Education</h2>
        <p className="text-sm text-gray-800">
          S1 Teknik Informatika – Universitas XYZ, 2019 - 2023
        </p>
      </section>

      {/* Download CV */}
      <section className="text-center mt-10">
        <a
          href="/PutraCV.pdf"
          download
          className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Download Full CV (PDF)
        </a>
      </section>
    </main>
  );
}
