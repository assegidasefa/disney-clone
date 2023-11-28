import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='flex items-center gap-3 mb-2 text-[18px] text-white font-semibold cursor-pointer hover:underline underline-offset-8'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem