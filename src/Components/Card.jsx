import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
const Card = ({ data,reference }) => {
    return (
        <motion.div drag dragConstraints={reference}  whileDrag={{ scale: 1.1 }}   dragElastic={0.2}    className=' relative flex-shrink-0 h-[230px] w-[200px] bg-zinc-900/90 rounded-[30px] text-white p-4 overflow-hidden'>
            <FaFileAlt />
            <p className='text-[12px] mt-[5vh]'>{data.desc}</p>

            {data.tag.isopen ? <div className='absolute bottom-9 w-full h-[50px] left-0 ml-2 flex translate-x-[-4%] pb-3 items-center'>
                <div className=' footer w-[12vw] py-6 h-[50px] flex  items-center justify-between pl-4  left-0  text-sm'>
                    <div className='text-[13px]'> {data.size}</div>
                    <div className='w-6 h-6 rounded-full bg-zinc-700 p-1 text-sm text-[12px]'>
                        {data.close ? <IoMdClose /> : <FaDownload />}

                    </div>

                </div>
            </div> : 
            <div className='absolute bottom-0 w-full h-[50px] left-0 ml-2 flex translate-x-[-4%] pb-3 items-center'>
                <div className=' footer w-[12vw] py-6 h-[50px] flex  items-center justify-between pl-4  left-0  text-sm'>
                    <div className='text-sm'> {data.size}</div>
                    <div className='w-6 h-6 rounded-full bg-zinc-700 p-1 text-sm '>
                        {data.close ? <IoMdClose /> : <FaDownload />}
                    </div>
                </div>
            </div>
            }
            

            {data.tag.isopen && (<div className='w-full absolute bottom-0 h-[40px] bg-green-600 left-0'>
                <h5 className='absolute left-12 bottom-3 font-semibold text-sm '>Download Now</h5>
            </div>)}
        </motion.div>
    )
}

export default Card
