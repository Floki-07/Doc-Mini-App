import React from 'react'
import Card from './Card'
import { data } from 'autoprefixer'
import { useRef  } from 'react'
const Foreground = () => {

  const Fdata = [
    {
      desc: "This is the first card.",
      size: "9mb",
      close: false,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "This is the first card.",
      size: "9mb",
      close: false,
      tag: { isopen: false, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "This is the first card.",
      size: "9mb",
      close: true,
      tag: { isopen: false, tagtitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "This is the first card.",
      size: "9mb",
      close: false,
      tag: { isopen: true, tagtitle: "Download Now", tagcolor: "green" },
    },
  ]

  const ref = useRef(null)
  return (
    <div>
      <div ref={ref}className='h-screen w-full z-[3]  absolute top-0 px-2 flex  flex-wrap gap-5'>
        {Fdata.map((item,index)=>{
         return <Card key={index} data={item} reference={ref}  />
        })}    

      </div>
    </div>
  )
}

export default Foreground
