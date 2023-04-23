import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, generateRandomText} from '../utils/helper';

const LiveChat = () => {

    const dispatch=useDispatch();
    const chatMessages=useSelector(store=>store.chat.messages);
    const [liveMessage,setLiveMessage]=useState("");


    useEffect(()=>{
        const timer=setInterval(()=>{
            //API POLLING
            dispatch(addMessages({
                name: generateRandomName(),
                message: generateRandomText(30)+"🚀",
            }))
        },1500);

        return()=>{
            clearInterval(timer);
        }

    },[]);

  return (
    <>
    <div className='h-[470px] mr-4 p-2 border border-gray-400 bg-gray-100 rounded-t-md overflow-y-scroll flex flex-col-reverse'>
        {
            chatMessages.map((msg,idx)=>
                <ChatMessage 
                key={idx}
                name={msg.name}
                message={msg.message}/>)
        }
    </div>

    <form className='w-[374px] p-2 border border-gray-300 rounded-b-md'
          onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessages({
                name:"Kritika",
                message: liveMessage
            }))
            setLiveMessage("");
          }}>
        <input  
            className='w-[300px] px-2' 
            type="text" 
            value={liveMessage}
            placeholder='Start Chating'
            onChange={(e)=>{
            setLiveMessage(e.target.value);
        }}/>
        <button  className='px-2 mx-1 bg-blue-100 rounded-md hover:bg-blue-300'>Sent</button>
    </form>
    </>
  )
}

export default LiveChat