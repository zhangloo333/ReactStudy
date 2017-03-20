import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //你可以自定义一些 videos
 // const videos = props.videos;
 // props.videos.map((video) => {
 //   const videoItems = props.videos.map((video) => {
 //     return <VideoListItem video = {video} /}
 //   });
 //   return <VideoListItem video={video} />
 // })
 const videoItems = props.videos.map((video) => {
  //  console.log(video);
   return (
     <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key= {video.etag}
      video={video} />
   );
 });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;
