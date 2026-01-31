"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">IVAN.DEV</div>
        <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-green-400">
          ● Available for new opportunities
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
            <a href="#skills" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
              View Skills
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-8 py-20 border-t border-white/5">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-12 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span 
              key={skill} 
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all text-lg ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {skill}
            </span>
          ))}
        </div>