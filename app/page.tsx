export default function Home() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">IVAN.DEV</div>
        <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-green-400">
          ● Available for new opportunities
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-purple-400 rounded-full bg-purple-400/10 border border-purple-400/20">
          Full-stack Developer
        </div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Building the <br /> future of web.
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 mx-auto">
          Hi, I'm Ivan. I specialize in building high-performance web applications 
          with modern technologies. Focused on clean code and exceptional user experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:iv12344567@gmail.com" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
            Get in touch
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20 border-t border-white/5">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-8 py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
        <a href="mailto:iv12344567@gmail.com" className="text-2xl font-mono text-purple-400">
          iv12344567@gmail.com
        </a>
      </footer>
    </main>
  );
}