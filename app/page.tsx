"use client";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<{id: number, text: string}[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git"];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tighter italic">IVAN.DEV</div>
        <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-green-400 font-medium">
          ● Online & Ready
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
          Junior Full-stack Developer. Building interactive apps with React & Next.js.
        </p>
        <a href="mailto:iv12344567@gmail.com" className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
          Let's Talk
        </a>
      </section>

      <section className="max-w-2xl mx-auto px-8 py-16 mb-20 bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Project: Task Manager</h2>
        <div className="flex gap-2 mb-8">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="What needs to be done?"
            className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-purple-500 outline-none text-white transition-all"
          />
          <button onClick={addTask} className="px-6 py-3 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition-all active:scale-95">
            Add
          </button>
        </div>

        <div className="space-y-3">
          {tasks.map(task => (
            <div key={task.id} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-white/20 transition-all">
              <span className="text-gray-200">{task.text}</span>
              <button onClick={() => deleteTask(task.id)} className="text-gray-600 hover:text-red-400 transition-colors px-2">✕</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-8 py-32 text-center border-t border-white/5">
        <div className="flex flex-wrap justify-center items-center gap-12 text-xl font-bold">
          <a href="mailto:iv12344567@gmail.com" className="text-purple-400 hover:text-white transition-colors">Email</a>
          <a href="https://t.me/qtvkn" target="_blank" className="text-purple-400 hover:text-white transition-colors">Telegram</a>
          <a href="https://www.linkedin.com/in/ivan-dan-68a9b33a9" target="_blank" className="text-purple-400 hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p className="mt-16 text-gray-600 text-sm italic">Available for projects from March 12th</p>
      </footer>
    </main>
  );
}