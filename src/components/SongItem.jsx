import React from 'react';

const SongItem = ({ name, image, desc, id }) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt={name} />
      <div className='font-bold mt-2 mb-1'>{name}</div>
      <div className='text-slate-200 text-sm'>{desc}</div>
    </div>
  );
}

export default SongItem;