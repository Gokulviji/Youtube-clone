import React, { useEffect, useState } from 'react';
import { FaThumbsUp, FaThumbsDown, FaShare, FaBookmark, FaUser } from 'react-icons/fa6';
import moment from 'moment';

const key = 'AIzaSyCtZOd6Zcyz3jTk4im_4zBupF0FqjRZA1Y';

const valueConverter = (value) => {
  if (value > 1000000) {
    return Math.floor(value / 1000000) + "M ";
  } else if (value > 1000) {
    return Math.floor(value / 1000) + "k ";
  } else {
    return value;
  }
};

const Playvideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [commentdata, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${key}`;
    const response = await fetch(videoDetailsUrl);
    const result = await response.json();
    setApiData(result.items[0]);
  };

  const fetchChannelDetails = async () => {
    if (!apiData) return;
    const channelDetailsUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${key}`;
    const response = await fetch(channelDetailsUrl);
    const result = await response.json();
    setChannelDetails(result.items[0]);
  };

  const fetchComments = async () => {
    const commentsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&moderationStatus=published&order=time&videoId=${videoId}&key=${key}`;
    const response = await fetch(commentsUrl);
    const result = await response.json();
    setCommentData(result.items || []);
  };

  useEffect(() => {
    fetchVideoData();
    fetchComments();
  }, [videoId]);

  useEffect(() => {
    fetchChannelDetails();
  }, [apiData]);

  return (
    <div className='w-[950px] ml-10'>
      <iframe
        className='h-[550px] w-[950px] rounded-md'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3 className='text-xl font-semibold'>{apiData ? apiData.snippet.title : "Title will be back soon"}</h3>
      <div>
        <p className='text-xs text-gray-600 mt-4'>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "16K"} views; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2"} ago
        </p>
        <div className='flex justify-end gap-4 text-sm text-gray-900'>
          <span className='flex items-center gap-2 cursor-pointer bg-gray-200 rounded-3xl py-1 px-4'>
            <i><FaThumbsUp /></i>{apiData ? valueConverter(apiData.statistics.likeCount) : "502"}
          </span>
          <span className='flex items-center gap-2 cursor-pointer bg-gray-200 rounded-3xl py-1 px-4'>
            <i><FaThumbsDown /></i>2
          </span>
          <span className='flex items-center gap-2 cursor-pointer bg-gray-200 rounded-3xl py-1 px-4'>
            <i><FaShare /></i>Share
          </span>
          <span className='flex items-center gap-2 cursor-pointer bg-gray-200 rounded-3xl py-1 px-4'>
            <i><FaBookmark /></i>Save
          </span>
        </div>
      </div>
      <hr className='h-[1px] bg-[#ccc] my-5' />
      <div className='flex items-center justify-between mt-5'>
        <div className='flex items-center gap-2'>
          <img className='rounded-full w-10' src={channelDetails ? channelDetails.snippet.thumbnails.default.url : <FaUser />} alt="Channel Thumbnail" />
          <div>
            <p className='text-2xl font-bold'>{apiData ? apiData.snippet.channelTitle : "yANDOO"}</p>
            <span className='text-xs text-gray-600'>{channelDetails ? valueConverter(channelDetails.statistics.subscriberCount) : "1M"} subscribers</span>
          </div>
        </div>
        <button className='bg-red-600 px-4 py-1 rounded-lg text-xl font-semibold text-white'>Subscribe</button>
      </div>
      <div className='pl-[40px]'>
        <p className='text-sm text-gray-700 mt-3'>
          {apiData ? apiData.snippet.description.slice(0, 250) : "Channel that makes learning easy"}
        </p>
        <p className='text-sm text-gray-700 mb-3'>
          Subscribe to GreatStack to watch more tutorials on web development
        </p>
        <hr />
        <h4 className='mt-2 text-sm font-bold'>{valueConverter(apiData ? apiData.statistics.commentCount : 130)} Comments</h4>
        {commentdata.length > 0 ? (
          commentdata.map((item, index) => (
            <div key={index} className='my-5'>
              <div className='comments flex gap-5'>
                <img className=' rounded-full w-5 h-5' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl || <FaUser />} alt="User" />
                <div>
                  <div className='flex items-center gap-5'>
                    <h3 className='text-base font-bold'>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                    <span className='text-xs text-gray-500'>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                  </div>
                  <p className='text-sm text-gray-600'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className='comment action flex gap-3 items-center mt-3'>
                    <span className='flex items-center gap-1 text-gray-600'><FaThumbsUp /><i>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</i></span>
                    <span className='flex items-center gap-1 text-gray-600'><FaThumbsDown /><i>Dislike</i></span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
    </div>
  );
};

export default Playvideo;
