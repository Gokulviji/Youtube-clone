import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa6'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaCirclePlus } from 'react-icons/fa6'
import { FaBell } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { FaMicrophone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'





const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex justify-between items-center text-xl  sticky top-0 pt-6 pb-3  z-10 bg-white  '> 
        <div className='flex items-center gap-5'>
                     <i
               className='ml-5 p-2 rounded-full hover:bg-gray-200 cursor-pointer'
               onClick={()=>setSidebar(prev=>prev===false?true:false)}
             >
             <FaBars />
             </i>

         <Link to='/'><p className='text-red-500 flex items-center gap-1 text-3xl cursor-pointer'><FaYoutube/><h1 className=' font-bold text-lg text-black'>Youtube</h1></p></Link>
        </div>
        <div className='flex items-center'>
            <div  className='flex items-center divide-solid  border-gray-400 px-4 py-[8px] border-[1px] rounded-l-full'>    
            <input placeholder= 'Search' type="text" className=' outline-none text-sm w-[450px]' />
            </div>
            <i className='border-[1px] hover:bg-gray-100 border-gray-400 px-4 py-[8px] rounded-r-full cursor-pointer border-l-4border-transparent'><FaMagnifyingGlass/></i>
           <i className='ml-3 p-2 rounded-full bg-gray-100  hover:bg-gray-200 cursor-pointer'><FaMicrophone/></i> 
        </div>
        <div className='flex items-center gap-3 mr-5'>
        <i className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'><FaCirclePlus/></i>
        <i className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'><FaBell/></i>
        <i className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'><FaUser/></i>
        <i></i>
        </div>
    </nav>
  )
}

export default Navbar
