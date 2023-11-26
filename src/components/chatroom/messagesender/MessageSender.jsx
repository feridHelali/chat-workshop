import { useState } from 'react'
import './MessageSender.css'

function MessageSender({ send }) {
  const [message, setMessage] = useState('');
  return (
    <div className='message-sender'>
      <input
        type='text'
        className='message-sender__input'
        placeholder='Type your message...'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button className='message-sender__button' onClick={
        (e) => {
          e.preventDefault();
          send(message);
        }}>Send</button>
    </div>
  )
}

export default MessageSender