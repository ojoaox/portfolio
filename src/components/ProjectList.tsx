import React from "react";
import ProjectCard from "./ProjectCard";


const ProjectList: React.FC = () => {

  const projects = [
    { imageUrl: "https://github.com/ojoaox/my-portifolio/blob/main/public/img/EcoLeaf.png?raw=true", projectName: "EcoLeaf", projectDescription: "EcoLeaf é uma empresa especializada em jardinagem e manutenção de ambientes verdes, além de oferecer sistemas de coleta de água da chuva. Nosso objetivo é promover soluções sustentáveis para transformar e cuidar de ambientes com foco na preservação do meio ambiente e na melhoria da qualidade de vida.", projectUrl: "https://github.com/vbzt/EcoLeaf", projectThemeOne: "Natureza", projectThemeTwo: "Sustentabilidade", projectThemeThree: "Tecnologia", projectThemeFour: "Inteligência Artificial"},
    { imageUrl: "/FitLifeApp.png", projectName: "FitLife", projectDescription: "Este projeto foi desenvolvido para promover o lançamento do aplicativo fictício FitLife, uma plataforma de fitness que oferece treinos personalizados, acompanhamento nutricional e dicas de saúde. A landing page foi projetada para ser moderna, responsiva e focada em conversão, capturando e-mails de usuários interessados no aplicativo.", projectUrl: "https://github.com/ojoaox/fit-life", projectThemeOne: "Saúde", projectThemeTwo: "Saúde Física", projectThemeThree: "Tecnologia", projectThemeFour: "Esporte" },




  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageUrl={project.imageUrl}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          projectUrl={project.projectUrl}
          projectThemeOne={project.projectThemeOne}
          projectThemeTwo={project.projectThemeTwo}
          projectThemeThree={project.projectThemeThree}
          projectThemeFour={project.projectThemeFour}
        />
      ))}
    </div>
  );
};

export default ProjectList;