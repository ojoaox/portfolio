import ProjectList from "../components/ProjectList";
import SkillList from "../components/SkillList";
import ContactForm from "../components/ContactForm";

export function Home() {
    return (
        <>
            <section id="hero" className="h-[75vh] flex items-center justify-center bg-neutral-950">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-lg text-white text-center font-bold">
                            Seja bem-vindo ao meu portfólio!
                        </p>
                        <h1 className="font-bold text-white text-center text-3xl  md:text-6xl lg:text-7xl">
                            Criando Experiências Digitais
                        </h1>
                        <p className="text-lg text-white text-center">
                            Desenvolvedor Front-end & UX/UI Designer, criando interfaces intuitivas e acessíveis.
                        </p>
                        <a
                            href="#projects"
                            className="px-4 py-2 bg-neutral-700 text-white rounded-md hover:bg-neutral-600 transition duration-300 text-md font-semibold"
                        >
                            Ver Projetos
                        </a>
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-neutral-950">
                <div className=" container bg-neutral-950/30 p-8 rounded-xl mx-auto border border-neutral-700 shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-8 md:text-4xl">Sobre Mim</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <p className="text-neutral-300">
                                Sou um <strong className="text-white">desenvolvedor front-end</strong> e <strong
                                    className="text-white">designer gráfico</strong>, com aproximadamente <strong
                                        className="text-white">2 anos de experiência</strong> criando interfaces modernas e funcionais.
                                Minha paixão é transformar ideias em experiências digitais que unam <strong
                                    className="text-white">design atraente</strong> e <strong className="text-white">funcionalidade
                                        intuitiva</strong>.
                            </p>
                            <p className="text-neutral-300">
                                Tenho experiência com ferramentas como <strong className="text-white">Figma</strong> e <strong
                                    className="text-white">Adobe Illustrator</strong> para prototipagem, e domino tecnologias como
                                <strong className="text-white"> HTML</strong>, <strong className="text-white">CSS</strong>, <strong
                                    className="text-white">JavaScript</strong> e frameworks como <strong
                                        className="text-white">React</strong>, <strong className="text-white">Tailwind CSS</strong> e
                                <strong className="text-white"> Bootstrap</strong> para desenvolvimento.
                            </p>
                            <p className="text-neutral-300">
                                Além das habilidades técnicas, conto com <strong className="text-white">inglês intermediário</strong> e
                                uma boa capacidade <strong className="text-white">comunicativa</strong>, o que me permite colaborar
                                eficientemente em equipes e me adaptar a novos desafios.
                            </p>
                        </div>


                        <div className="flex flex-col justify-center items-center space-y-6">
                            <div className="grid grid-cols-3 gap-6 w-full max-w-[900px]">


                                <div className="bg-neutral-700/20 p-4 rounded-lg text-center">
                                    <span className="text-3xl font-bold text-white">3+</span>
                                    <p className="text-sm text-neutral-400 mt-1">Projetos</p>
                                </div>


                                <div className="bg-neutral-700/20 p-4 rounded-lg text-center">
                                    <span className="text-3xl font-bold text-white">2</span>
                                    <p className="text-sm text-neutral-400 mt-1">Anos de Experiência</p>
                                </div>


                                <div className="bg-neutral-700/20 p-4 rounded-lg text-center">
                                    <span className="text-3xl font-bold text-white">3º</span>
                                    <p className="text-sm text-neutral-400 mt-1">Ensino Médio Técnico Fiap School</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="technologies" className="py-20 bg-neutral-950">
                <div className="container bg-neutral-950/30 p-8 rounded-xl mx-auto border border-neutral-700 shadow-lg">
                    <h2 className="text-3xl font-bold text-white mb-12 md:text-4xl">Tecnologias</h2>
                    <div
                        className="bg-neutral-950 p-6 rounded-lg flex flex-col items-center">
                        <SkillList />
                    </div>
                </div>
            </section>

            <section id="projects" className="py-20 bg-neutral-950">
                <div className="container bg-neutral-950/30 rounded-xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 md:text-4xl">Projetos</h2>
                        <ProjectList />
                    </div>
            </section>

            <div className="bg-neutral-950">
            <ContactForm />
            </div>
        </>
    )
}