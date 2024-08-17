import React from 'react'

const Background = () => {
  return (
    <div className='h-screen w-full z-[2]'>
       <div className='absolute text-md   left-1/2  translate-x-[-70%] mt-[40px] text-zinc-300 '>Documents</div>
       <h1 className='absolute text-[140px] top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] font-semibold tracking-tight text-zinc-900'>Docs.</h1>
    </div>
  )
}

export default Background
