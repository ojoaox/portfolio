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
                        <a href="mailto:souzajoaovictor555@gmail.com" className="flex items-center mt-2 text-blue-500 hover:underline">
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 4-8 5-8-5v10h16V8zm-8 3 8-5H4l8 5z"></path>
                            </svg>
                            souzajoaovictor555@gmail.com
                        </a>
                    </div>
                    
                    <div className="mt-8">
                        <h2 className="text-lg font-semibold">Redes Sociais</h2>
                        <div className="flex space-x-4 mt-3">
                            <a href="https://github.com/ojoaox" className="text-blue-500 hover:text-blue-600">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                        <g transform="scale(10.66667,10.66667)">
                                            <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-0.9 0.2,-1.3c0,-0.2 0.2,-0.3 0.3,-0.3h0.1c0.5,0.1 1.5,0.4 2.4,1.3c0.6,-0.2 1.3,-0.3 2,-0.3c0.7,0 1.4,0.1 2,0.3c0.9,-0.9 2,-1.2 2.5,-1.3h0.1c0.2,0 0.3,0.1 0.4,0.3c0,0.4 0,0.9 0,1.3c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path>
                                        </g>
                                    </g>
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
                        className="w-full rounded-lg py-3 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg py-3 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        id="assunto"
                        placeholder="Assunto"
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)}
                        className="w-full rounded-lg py-3 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        id="mensagem"
                        placeholder="Mensagem"
                        rows={5}
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        className="w-full rounded-lg px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm pt-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-3 transition"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;