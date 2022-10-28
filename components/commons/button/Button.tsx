import React from 'react'

type Props = {
    text: string;
  };

const Button = ({text}:Props) => {
  return (
    <div className='bg-white rounded-full py-2 px-5 min-w-[10rem] text-blue-700 font-bold text-xl cursor-pointer z-20'>{text}</div>
  )
}

export default Button