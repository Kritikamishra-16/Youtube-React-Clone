import React from 'react';
import img from "../img/images.png"

const CommentsData=[
    {
        name: "Kritika Mishra",
        text: "Music Director Amit Trivedi should get as much applause as possible. He brought back the soulful music with classic touch back to today’s generation 😊",
        replies:[
            {
                name: "Deepti Tripathi",
                text: "Having goosebumps listening it❤",
                replies:[
                    {
                        name: "Adarsh Shukla",
                        text: "The trio - singing, lyrics & music is just fantastic. What a voice,  so soothing!!",
                        replies:[
                            {
                                name: "Adarsh Rai",
                                text: "Singer's voice itself creates a music of its own according to the ultra phonic words. The music transcends the listeners in to a wonderful world of tranquillity along with the lingering music of soothness.Simply Fantastic.",
                                replies:[
                                    
                                ]
                            }, {
                                name: "Himanshu Gupta",
                                text: "wonderful, masterpiece of classical music in todays time",
                                replies:[
                                    
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Kartikey Mishra",
                text: "This song is Real Honey. What a Composition,what a Singing, how sweet is Music. Salute to whole team.",
                replies:[]
            },
        ]
    },
    {
        name: "Das",
        text: "I feel heaven listening this song, my heartfelt blessing to whole team, specifically Amit Trivedi.The whole world of music enriched by this song.",
        replies:[
            
        ]
    },
    {
        name: "Anamika",
        text: "Amit Trivedi always makes miracles ❤ this time he has found Sireesha result is here 👏 history will always be grateful to them both 😍",
        replies:[
            
        ]
    },
    {
        name: "Sheetal",
        text: "Lorem epsum dolor sit amet, jgfit ggauabg",
        replies:[
            
        ]
    },
    {
        name: "Sanjay Mishra",
        text: "❤  touching the soul, both emotional and healing, BEAUTIFUL.",
        replies:[
            
        ]
    },
    {
        name: "Sonia Mishra",
        text: "i can't be tired even i listen 100 times a day. so much soulful, heart overwhelming. the real beauty in music.",
        replies:[
            
        ]
    },
    {
        name: "Namu Mishra",
        text: "are we in real world !!! .... the intense of feelings can make any one stop once to hear once again as the music and lyrics have been really shattered to give a glimpse of life... Hats offs to team !!!",
        replies:[
            
        ]
    },
]

const Comment=(({data})=>{
    const {name,text}=data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-2'>
            <img className='w-6 h-6' 
            src="data:image/jpeg;base64,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"
            alt="user image"></img>
            <div className='px-3'>
                <p className='font-medium'>{name}</p>
                <p className='text-sm'>{text}</p>
            </div>
        </div>
    )
});

const CommentsList=({commentsData})=>{
    return (
        commentsData.map((comment,index)=>{
            return(
                <div  key={index}>
                    <Comment data={comment}/>
                    <div className='pl-5 ml-3 border border-l-gray-400'>
                        <CommentsList commentsData={comment.replies}/>
                    </div>
                </div>
            )
        })
    )
}

const CommentsContainer = () => {
  return (
    <div className='mx-3 p-2 pt-4 w-[90%]'>
        <h1 className="text-lg font-bold">Comments:</h1>
        <CommentsList commentsData={CommentsData}/>
    </div>
  )
}

export default CommentsContainer