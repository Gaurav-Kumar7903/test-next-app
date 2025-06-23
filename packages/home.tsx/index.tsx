export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-blue-100 to-white px-4">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Gaurav 👋</h1>
        <p className="text-xl text-gray-600 max-w-xl">
          A passionate full-stack developer who loves to build scalable, clean, and real-world web apps.
        </p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-center">
          I’m a software engineer with 4.5+ years of experience in building scalable frontend and backend systems using
          React, Node.js, MongoDB, and more. I enjoy learning, optimizing code, and building things that matter.
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-3">
          {/* Project Card 1 */}
          <div className="border rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
            <p className="text-gray-600 mb-4">
              Full-stack app with React, Node.js, MongoDB, and integrated payment using Juspay.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View project →
            </a>
          </div>

          {/* Project Card 2 */}
          <div className="border rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold mb-2">Portfolio Site</h3>
            <p className="text-gray-600 mb-4">
              A fully responsive static portfolio built using Next.js and Tailwind CSS.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View project →
            </a>
          </div>

          {/* Project Card 3 */}
          <div className="border rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Admin panel for managing users, analytics, and orders — built with React + Chart.js.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View project →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="py-10 bg-gray-100 text-center text-gray-600 text-sm">
        Built by <span className="font-medium text-gray-800">Gaurav</span> with <span className="text-red-500">❤️ from india.</span>
        </footer>
    </main>
  );
}
