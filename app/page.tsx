export default function Home() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern online store with cart functionality and payment integration.",
      tech: ["Next.js", "Tailwind"],
      link: "#"
    },
    {
      title: "Task Manager",
      description: "Full-stack productivity app to manage your daily routines and deadlines.",
      tech: ["React", "TypeScript"],
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter italic text-white hover:text-purple-400 transition-colors cursor-default">IVAN.DEV</div>
        <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-green-400 font-medium">
          ● Available for new opportunities
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center pt-20 pb-24 px-4 text-center">
        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-purple-400 rounded-full bg-purple-400/10 border border-purple-400/20">
          Software Engineer
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Code. Design. <br /> Deliver.
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 mx-auto">
          I build high-performance web applications focused on speed and user experience. 
          Ready to turn your ideas into reality.
        </p>
        <a href="mailto:iv12344567@gmail.com" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
          Let's Talk
        </a>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex gap-2 mb-8">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded-md text-gray-300 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <span className="text-sm font-bold text-white hover:underline cursor-pointer">Live Demo →</span>
                <span className="text-sm font-bold text-gray-500 hover:underline cursor-pointer">View Code</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20 border-t border-white/5 text-center">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          {skills.map((skill) => (
            <span key={skill} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-8 py-32 text-center border-t border-white/5">
        <h2 className="text-5xl font-bold mb-12 tracking-tighter">Get in touch.</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-xl font-bold">
          <a href="mailto:iv12344567@gmail.com" className="text-purple-400 hover:text-white transition-colors flex items-center gap-2">
            Email
          </a>
          <a href="https://t.me/@qtvkn" target="_blank" className="text-purple-400 hover:text-white transition-colors flex items-center gap-2">
            Telegram
          </a>
          <a href="www.linkedin.com/in/ivan-dan-68a9b33a9" target="_blank" className="text-purple-400 hover:text-white transition-colors flex items-center gap-2">
            LinkedIn
          </a>
        </div>
        <p className="mt-16 text-gray-600 text-sm italic">
          Software Engineer & Web Developer
        </p>
      </footer>
    </main>
  );
}