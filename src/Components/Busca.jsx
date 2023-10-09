import React from 'react'


function Busca({value, onChange}) {
  return (
    <input type="text" 
    value={value}
    onChange={onChange}
    className='bg-slate-500 h-10 w-36 text-center input'
    placeholder='Add Guests'/>
  );
}

export default Busca;