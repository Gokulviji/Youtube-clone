import React from 'react'
import Suggestion from '../components/Suggestion/Suggestion'
import Playvideo from '../components/Playvideo/Playvideo'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId,categoryId}=useParams();
  console.log(useParams())
   
  return (
    <div className='flex  flex-wrap justify-between mx-[29px]'>
    <div className= 'bg-white  '>
        <Playvideo videoId={videoId}/>
    </div>
    <div className='mr-5 w-fit rounded-2xl '>
         <Suggestion categoryId={categoryId}/>
    </div>
      </div>
  )
}

export default Video