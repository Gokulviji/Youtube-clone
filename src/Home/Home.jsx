import React from 'react'
import Vedio from '../video/Video'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/Feed/Feed'
import { useState } from 'react'

const Home = ({sidebar}) => {

  let [category,setcategory]=useState(0)

  return (
    <div className='flex'>
     <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
     <div  className={`${sidebar?"":"largecontainer"} grid grid-cols-4  grid-flow-* gap-x-8 gap-y-10 mt-7 w-full mr-5 ml-2 h-[100vh] overflow-auto`}>
         <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home
