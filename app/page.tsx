export default function Home() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30">
      {/* Шапка */}
      <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">IVAN.DEV</div>
        <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs">
          Available for projects
        </div>
      </nav>

      {/* Главный блок */}
      <section className="flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-purple-400 rounded-full bg-purple-400/10 border border-purple-400/20">
          Future Full-stack Developer
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Creating digital <br /> experiences.
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10">
          Привет! Я Иван. Строю современные приложения, пока готовлюсь к переезду 12 марта. 
          Это моё первое живое портфолио.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
            Связаться со мной
          </a>
        </div>
      </section>

      {/* Стек технологий */}
      <section className="max-w-6xl mx-auto px-8 py-20 border-t border-white/5">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12 text-center">Мой стек технологий</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors text-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Футер/Контакты */}
      <footer id="contact" className="max-w-6xl mx-auto px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Есть идея для проекта?</h2>
        <p className="text-gray-400 mb-8 text-lg">Пиши, обсудим реализацию.</p>
        <div className="text-2xl font-mono text-purple-400 hover:underline cursor-pointer">
          iv12344567@gmail.com
        </div>
      </footer>
    </main>
  );
}