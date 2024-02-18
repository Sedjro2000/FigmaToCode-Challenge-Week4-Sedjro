import React from 'react';

const SkillCard = ({ src, text }) => {
  return (
    <div className='w-48 h-48 flex flex-col items-center justify-center border border-black '>
      <img src={src} alt={text} className='w-24 h-24' />
      <p className='font-Sora font-semibold text-lg text-black text-center'>{text}</p>
    </div>
  );
};

export default SkillCard;
