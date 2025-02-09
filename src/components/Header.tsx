import Accordion from './Accordion'; // Ajuste o caminho conforme necessário

export function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-zinc-800 shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo e nome */}
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span className="ml-2 text-xl font-bold text-white">João Victor</span>
          </div>

          {/* Links de navegação */}
          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="text-zinc-300 hover:text-white transition duration-300">
              Início
            </a>
            <a href="#about" className="text-zinc-300 hover:text-white transition duration-300">
              Sobre Mim
            </a>
            <a href="#technologies" className="text-zinc-300 hover:text-white transition duration-300">
              Habilidades
            </a>
            <a href="#projects" className="text-zinc-300 hover:text-white transition duration-300">
              Projetos
            </a>
          </nav>

          {/* Accordion */}
          <div className="relative">
            <Accordion />
          </div>
        </div>
      </header>
    </>
  );
}