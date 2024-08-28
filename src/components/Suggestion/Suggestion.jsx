import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const value_converter =(value)=>{
  if(value>1000000){
      return Math.floor(value/1000000)+"M views";
  }else if (value > 1000){
      return Math.floor(value/1000)+"k views"
  }else{
      return value
  }
}
const Suggestion = ({ categoryId }) => {
  const key = 'AIzaSyCtZOd6Zcyz3jTk4im_4zBupF0FqjRZA1Y';
  const [recdata, setRecdata] = useState([]);

  const fetchData = async () => {
    try {
      const videoList_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}&key=${key}`;
      const response = await fetch(videoList_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setRecdata(result.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (recdata.length === 0) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <>
      {recdata.map((item, index) => (
        <Link  to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='mb-7'>
          <div className='flex gap-5 mt-5'>
            <img
              className='w-44 rounded-lg'
              src={item.snippet?.thumbnails?.medium?.url || ''}
              alt={item.snippet?.title || 'Thumbnail'}
            />
            <div className='w-52'>
              <h4 className='text-sm font-semibold'>{item.snippet?.title || 'Title not available'}</h4>
              <p className='text-sm text-gray-700'>{item.snippet?.channelTitle || 'Channel not available'}</p>
              <p className='text-xs text-gray-600'>{value_converter(item.statistics?.viewCount) || '0'} Views</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Suggestion;
