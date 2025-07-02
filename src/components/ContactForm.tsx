import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [assunto, setAssunto] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const enviarFormulario = async (event: React.FormEvent) => {
        event.preventDefault();

        const webhookURL = "https://discord.com/api/webhooks/1337135427953361018/7pzKpH9fiIRp4iyAqXqIxB5qXyyZCioMUoD54xgf_QoM-lyPzD6uChX-MzgY-9l66WzU";

        const payload = {
            content: `**Nova mensagem do formulário:**\n\n**Nome:** ${nome}\n**E-mail:** ${email}\n**Assunto:** ${assunto}\n**Mensagem:** ${mensagem}`
        };

        try {
            const response = await fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                setNome('');
                setEmail('');
                setAssunto('');
                setMensagem('');
            } else {
                alert("Erro ao enviar a mensagem.");
            }
        } catch (error) {
            alert("Erro ao conectar com o webhook.");
            console.error(error);
        }
    };

    return (
        <section id="contact" className="container mx-auto py-20">
            <div className="grid sm:grid-cols-2 items-start gap-12 p-6 mx-auto bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 shadow-lg rounded-2xl">
                <div>
                    <h1 className="text-3xl font-bold">Entre em Contato</h1>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">Tem um projeto incrível em mente? Vamos conversar e trazer suas ideias para a realidade!</p>
                    
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold">E-mail</h2>
                        <a href="mailto:souzajoaovictor555@gmail.com" className="flex items-center mt-2 text-indigo-500 hover:underline">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 4-8 5-8-5v10h16V8zm-8 3 8-5H4l8 5z"></path>
                            </svg>
                            souzajoaovictor555@gmail.com
                        </a>
                    </div>
                    
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold">Redes Sociais</h2>
                        <div className="flex space-x-4 mt-3">
                            <a
                                href="https://github.com/ojoaox"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-white transition-all duration-500 hover:text-indigo-600"
                            >
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.956-.266 1.98-.399 3-.405 1.02.006 2.044.139 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.768.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.566 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <form id="formulario" className="space-y-4 w-full" onSubmit={enviarFormulario}>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full rounded-lg py-3 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg py-3 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <input
                        type="text"
                        id="assunto"
                        placeholder="Assunto"
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)}
                        className="w-full rounded-lg py-3 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <textarea
                        id="mensagem"
                        placeholder="Mensagem"
                        rows={5}
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        className="w-full rounded-lg px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm pt-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-4 py-3 transition"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;