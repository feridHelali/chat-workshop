import './Chatroom.css'
import Conversation from './conversation/Conversation'
import ChatroomHeader from './header/ChatroomHeader'
import MessageSender from './messagesender/MessageSender'
import { useState } from 'react'

function Chatroom() {
  const [conversation,setConversation] =useState([
    {
      id:1,
      type:'sent',
      user:{username:'Ferid',avartUrl:'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?t=st=1700996212~exp=1700996812~hmac=19d673fc78c6fa39fac3c45949d53f7956409b3b8c53224413f386d7ed405c30'},
      message:'Hi every One',
    },
    {
      id:2,
      type:'recieved',
      user:{username:'Salem',avartUrl:'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?t=st=1700996212~exp=1700996812~hmac=19d673fc78c6fa39fac3c45949d53f7956409b3b8c53224413f386d7ed405c30'},
      message:'Hello',
    },
    {
      id:3,
      type:'recieved',
      user:{username:'Salem',avartUrl:'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?t=st=1700996212~exp=1700996812~hmac=19d673fc78c6fa39fac3c45949d53f7956409b3b8c53224413f386d7ed405c30'},
      message:"Whats Up",
    },
    {
      id:4,
      type:'sent',
      user:{username:'Ferid',avartUrl:'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?t=st=1700996212~exp=1700996812~hmac=19d673fc78c6fa39fac3c45949d53f7956409b3b8c53224413f386d7ed405c30'},
      message:'Fine And You :) ?',
    },
  ]);


  const me={
    username:'Ferid',
    avatarUrl:'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?t=st=1700996212~exp=1700996812~hmac=19d673fc78c6fa39fac3c45949d53f7956409b3b8c53224413f386d7ed405c30'
  }

  
  function handleSend(message){
      
      const newMessage={
        id:conversation.length+1,
        type:'sent',
        user:{username:'Ferid',avartUrl:'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?t=st=1700996212~exp=1700996812~hmac=19d673fc78c6fa39fac3c45949d53f7956409b3b8c53224413f386d7ed405c30'},
        message,
      }
      setConversation([...conversation,newMessage])
      console.log(conversation)
      console.log(typeof conversation)
  }

  return (
    <div className='container'>
        <div className='chatroom__header'>
            <ChatroomHeader sender={me}/>
        </div>
        <div className='chatroom__conversation'>
            <Conversation conversation={conversation}/>
        </div>
        <div className='chatroom__messagesender'>
            <MessageSender send={handleSend}/>
        </div>
    </div>
  )
}

export default Chatroom