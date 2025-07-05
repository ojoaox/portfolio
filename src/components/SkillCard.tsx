import React from 'react';

interface SkillCardProps {
  iconUrl: string;
  skillName: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ iconUrl, skillName }) => {
  return (
    <div className="bg-neutral-700/20 p-6 rounded-lg flex flex-col items-center hover:bg-neutral-800/30 transition duration-300">
      <img 
        src={iconUrl} 
        alt={skillName} 
        className="w-12 h-12 mb-4"
      />
      <p className="text-white font-bold">{skillName}</p>
    </div>
  );
};

export default SkillCard;