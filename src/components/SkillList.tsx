import React from 'react';
import SkillCard from './SkillCard';

const SkillList: React.FC = () => {

  const skills = [
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", skillName: "HTML" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", skillName: "CSS" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", skillName: "JavaScript" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", skillName: "React" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", skillName: "Tailwind CSS" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", skillName: "Python" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", skillName: "Figma" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg", skillName: "Illustrator" },
    { iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", skillName: "Git" },
    



    
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-[100%]">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          iconUrl={skill.iconUrl}
          skillName={skill.skillName}
        />
      ))}
    </div>
  );
};

export default SkillList;