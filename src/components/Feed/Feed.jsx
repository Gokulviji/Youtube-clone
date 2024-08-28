import React, { useEffect, useState } from 'react'
import tamnail from './tamnail.webp'
import { Link } from 'react-router-dom'
import { TbUserUp } from 'react-icons/tb';
import moment from 'moment';


const key = 'AIzaSyCtZOd6Zcyz3jTk4im_4zBupF0FqjRZA1Y';

const value_converter =(value)=>{
    if(value>1000000){
        return Math.floor(value/1000000)+"M views";
    }else if (value > 1000){
        return Math.floor(value/1000)+"k views"
    }else{
        return value
    }
}

const Feed = ({category}) => {

   let [data,setdata]=useState([]);
     
   const fetchData= async ()=>{
    const vedioList_URL= ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&videoCategoryId=${category}&key=${key}`;
     await fetch(vedioList_URL).then((response)=>response.json()).then((result)=>setdata(result.items))
   }  


   useEffect(()=>{
    fetchData();
   },[category])
  
console.log(data)

  return (
    <>
    {
        data.map((items,index)=>{
               return(

                <Link to={`video/${items.snippet.categoryId}/${items.id}`} key={`${items.id}`} className='card cursor-pointer '>
                <div>
                <img className=' rounded-sm' src={items.snippet.thumbnails.medium.url} alt="" />
                <h2 className=' font-normal'>{items.snippet.title}</h2>
                <h3 className='text-l font-bold'>{items.snippet.channelTitle}</h3>
                <p className='text-xs '>{value_converter(items.statistics.viewCount)}; {moment(items.snippet.publishedAt).fromNow()}</p>
                </div>
                
                </Link>
               )
        })
    }
    
    </>
    
    
  )
}

export default Feed
