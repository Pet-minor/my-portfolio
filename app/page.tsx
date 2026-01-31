export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-zinc-800/30 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-zinc-800/30 lg:p-4">
          Status: <span className="text-green-500 ml-2">Building Portfolio 🚀</span>
        </p>
      </div>

      <div className="flex flex-col items-center mt-20">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Ivan
        </h1>
        <p className="text-2xl mt-4 text-gray-400">
          Full-stack Developer (React / Next.js / TS)
        </p>
        
        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition">
            View My Projects
          </button>
          <button className="px-6 py-3 border border-gray-700 rounded-full font-bold hover:bg-gray-900 transition">
            Contact Me
          </button>
        </div>
      </div>

      <div className="mt-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-700 hover:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold text-blue-400">Next.js 15</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Fast, SEO-friendly apps.</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-700 hover:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold text-purple-400">TypeScript</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Safe and scalable code.</p>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-700 hover:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold text-teal-400">Tailwind</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">Modern UI design.</p>
        </div>
      </div>
    </main>
  );
}