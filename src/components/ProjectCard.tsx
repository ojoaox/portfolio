import React from 'react';

// Mapeamento de temas para cores
const themeColors = {
  natureza: "#4CAF50", // Verde
  sustentabilidade: "#8BC34A", // Verde claro
  tecnologia: "#2196F3", // Azul
  "tecnologia da informação": "#2196F3", // Azul
  "inteligência artificial": "#9C27B0", // Roxo
  ti: "#2196F3", // Azul
  educação: "#FFC107", // Amarelo
  saúde: "#F44336", // Vermelho
  "saúde física": "#4CAF50", // Verde
  finanças: "#FF5722", // Laranja
  "e-commerce": "#795548", // Marrom
  "design gráfico": "#607D8B", // Cinza
  "marketing digital": "#00BCD4", // Azul claro
  fotografia: "#673AB7", // Roxo escuro
  moda: "#E91E63", // Rosa
  "desenvolvimento web": "#3F51B5", // Azul escuro
  "desenvolvimento mobile": "#FF9800", // Laranja claro
  "user experience": "#9E9E9E", // Cinza claro
  "user interface": "#FFEB3B", // Amarelo claro
  música: "#9C27B0", // Roxo
  arte: "#E91E63", // Rosa
  viagem: "#FF5722", // Vermelho
  esporte: "#4CAF50", // Verde
  jogos: "#2196F3", // Azul
  filmes: "#F44336", // Vermelho
  livros: "#FFC107", // Amarelo
  culinária: "#795548", // Marrom
  beleza: "#607D8B", // Cinza
  animais: "#00BCD4", // Azul claro
  "saúde mental": "#673AB7", // Roxo escuro
  produtividade: "#FF9800", // Laranja claro
  empreendedorismo: "#3F51B5", // Azul escuro
  html: "#e34f26", // Cor do HTML
  css: "#264de4", // Cor do CSS
  tailwindcss: "#06B6D4", // Cor do Tailwind CSS
  bootstrap: "#7952b3", // Cor do Bootstrap
  javascript: "#f7df1e", // Cor do JavaScript
  react: "#61dafb", // Cor do React
  node: "#68a063", // Cor do Node
  python: "#306998", // Cor do Python
  django: "#092e20", // Cor do Django
  flask: "#000", // Cor do Flask
  "machine learning": "#f0db4f", // Cor do Machine Learning
  "data science": "#008abc", // Cor do Data Science
  "front-end": "#61dafb", // Cor do Front-end
  "back-end": "#68a063", // Cor do Back-end
  ux: "#FFEB3B", // Cor do UX
  ui: "#FFEB3B", // Cor do UI
  mundo : "#6B7280", // Cor do Mundo
};

interface ProjectCardProps {
  imageUrl: string;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  projectThemeOne: string;
  projectThemeTwo: string;
  projectThemeThree: string;
  projectThemeFour: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  projectName,
  projectDescription,
  projectUrl,
  projectThemeOne,
  projectThemeTwo,
  projectThemeThree,
  projectThemeFour,
}) => {
  // Função para obter a cor de um tema
  const getThemeColor = (theme: string) => {
    return themeColors[theme.toLowerCase() as keyof typeof themeColors] || "#6B7280"; // Cor padrão caso o tema não exista
  };

  return (
    <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-zinc-800 border border-zinc-700">
      {/* Container da imagem */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={projectName}
          className="w-full h-full object-cover"
        />

        {/* Ícone do GitHub posicionado acima da imagem */}
        <div className="absolute top-3 right-3 group">
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="w-8 hover:scale-125 duration-200 hover:stroke-none hover:fill-white"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            GitHub
          </span>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{projectName}</div>
        <p className="text-zinc-300 text-base">{projectDescription}</p>
      </div>

      {/* Temas do projeto */}
      <div className="px-6 pt-4 pb-6">
        <span
          style={{ backgroundColor: getThemeColor(projectThemeOne) }}
          className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {projectThemeOne}
        </span>
        <span
          style={{ backgroundColor: getThemeColor(projectThemeTwo) }}
          className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {projectThemeTwo}
        </span>
        <span
          style={{ backgroundColor: getThemeColor(projectThemeThree) }}
          className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {projectThemeThree}
        </span>
        <span
          style={{ backgroundColor: getThemeColor(projectThemeFour) }}
          className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {projectThemeFour}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;