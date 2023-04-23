import {useEffect, useState} from "react";
import {YOUTUBE_VIDEO_API} from "../utils/constants"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { addHistory } from '../utils/historySlice';
import { useDispatch } from "react-redux";
import Shimmer from "./Shimmer";


const VideoContainer=()=>{
    const dispatch =useDispatch();
    const [videos, setVideos]=useState([]);

    useEffect(() => {
        getVideos();
    }, [])

    const addHistoryMethod= (videoData)=>{
        dispatch(addHistory(videoData)); 
    }
    
    const getVideos=async ()=>{
        const data=await fetch(YOUTUBE_VIDEO_API);
        const json=await data.json();
        setVideos(json.items);
    }

    return !videos? <Shimmer/>: (
        <div className="flex flex-wrap w-full m-auto ">
            {videos?.map((video)=>{
                return (
                    <Link to={"/watch?v="+video.id}  key={video.id} 
                    onClick={()=>{
                        try{
                            addHistoryMethod(video);
                        }catch(err)
                        {
                            console.log(err);
                        }
                    }}>
                        <VideoCard info={video} />
                    </Link>);
            })}
        </div>
    )
}

export default VideoContainer;