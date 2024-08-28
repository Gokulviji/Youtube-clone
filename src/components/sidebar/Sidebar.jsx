import React, { useState } from 'react';
import './sidebar.css';

import { FaHome } from 'react-icons/fa';
import { FaFileVideo, FaLayerGroup, FaGamepad, FaCarSide, FaFutbol, FaTv, FaMicrochip, FaMusic, FaSquareRss, FaNewspaper, FaAddressCard, FaClockRotateLeft, FaSliders, FaCirclePlay, FaClock, FaThumbsUp, FaArrowDown } from 'react-icons/fa6';


const sidenavs = [
  { icon: <FaHome />, iconName: 'Home', key: 1,categorys:0 },
  { icon: <FaFileVideo />, iconName: 'Shorts', key: 2,categorys:25 },
  { icon: <FaLayerGroup />, iconName: 'Subscriptions', key: 3,categorys:35 },
];
const sideyou = [
  { icon: <FaAddressCard />, iconName: 'Your Channel', key: 4,categorys:110 },
  { icon: <FaClockRotateLeft />, iconName: 'History', key: 5,categorys:120 },
  { icon: <FaSliders />, iconName: 'Playlists', key: 6,categorys:130 },
  { icon: <FaCirclePlay />, iconName: 'Your videos', key: 7,categorys:140 },
  { icon: <FaClock />, iconName: 'Watch later', key: 8,categorys:150 },
  { icon: <FaThumbsUp />, iconName: 'Liked videos', key: 9,categorys:160 },
  { icon: <FaArrowDown />, iconName: 'Downloads', key: 10,categorys:170 },
];

const sidegroups = [
  { icon: <FaGamepad />, iconName: 'Gaming', key: 11,categorys:20 },
  { icon: <FaCarSide />, iconName: 'Automobiles', key: 12,categorys:2 },
  { icon: <FaFutbol />, iconName: 'Sports', key: 13,categorys:17 },
  { icon: <FaTv />, iconName: 'Entertainment', key: 14,categorys:24 },
  { icon: <FaMicrochip />, iconName: 'Technology', key: 15,categorys:28 },
  { icon: <FaMusic />, iconName: 'Music', key: 16,categorys:10 },
  { icon: <FaSquareRss />, iconName: 'Blogs', key: 17,categorys:22 },
  { icon: <FaNewspaper />, iconName: 'News', key: 18,categorys:25 },
];

const Sidebar = ({sidebar,category,setcategory}) => {
 
  
  return (
    <>
    <div className={` sidebar mt-5 h-[100vh] overflow-auto  ml-[30px] ${sidebar?"w-2/12":"w-20"}`}>
    
      {<div >
        {sidenavs.map((sidenav) => (
           <div  className={`text-gray-800 mb-3 text-md `}>
           <div className={`cursor-pointer py-1  inline-block pr-20 rounded-md w-48 ${sidebar?" hover:bg-gray-100 ":""}`} >
             <div   className={`${sidenav.categorys===category?  "active" :""} flex items-center gap-6 `}  onClick={ ()=>{setcategory(sidenav.categorys)}}>
             <i className={ `pb-1`}>{sidenav.icon}</i>
             <h1 className={`${sidebar?"block":" hidden"}`}>{sidenav.iconName}</h1>
             </div>
           </div>
         </div>
        ))}
      </div> }
      

      

      
      <hr  className={` mr-24 border-gray-400 ${sidebar?"block":" hidden"}`} />

      <div className='mt-3'>
        <h1 className='font-bold mb-4'>Explore</h1>
        {sidegroups.map((sidegroup) => (
        
        <div className='mb-3 text-md'>
        <div className={`cursor-pointer text-gray-800  py-1  inline-block pr-20 rounded-md w-48 ${sidebar?" hover:bg-gray-100 ":""}`} >
          <div className={`${sidegroup.categorys===category?  "active" :""}  flex items-center gap-6 ${sidegroup.key} `} onClick={ ()=>{setcategory(sidegroup.categorys)}}>
           <i>{sidegroup.icon}</i>
           <h1  className={`${sidebar?"block":" hidden"}`}>{sidegroup.iconName}</h1>
          </div>
        </div>
     </div>
        ))}
      </div>

      <hr className={` mr-24 border-gray-400 ${sidebar?"block":" hidden"}`} />


      <div className='mt-5'>
        <h1 className='font-bold mb-4'>You</h1>
        {sideyou.map((sideyo) => (
           <div className='mb-3 text-md'>
           <div className={`cursor-pointer  text-gray-800  py-1 inline-block  rounded-md w-48  ${sidebar?"hover:bg-gray-100 ":""} `}>
             <div className={`${sideyo.categorys===category?  "active" :""} flex items-center gap-6 ${sideyo.key}`}onClick={ ()=>{setcategory(sideyo.categorys)}}>
              <i>{sideyo.icon}</i>
              <h1  className={`${sidebar?"block":" hidden"}`}>{sideyo.iconName}</h1>
             </div>
           </div>
           </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default Sidebar;
