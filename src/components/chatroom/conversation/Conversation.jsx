import './Conversation.css'
function Conversation({ conversation }) {
    return (
        <div className='conversation'>
        {conversation.map((message) => (
          <div
            key={message.id}
            className={`conversation__message conversation__message--${message.type === 'sent' ? 'sent' : 'received'}`}
          >
            <img
              src={message.user.avartUrl}
              alt='Avatar'
              className='conversation__avatar'
            />
            <div className='conversation__message-content'>
              <div className='conversation__username'>{message.user.username}</div>
              <div>{message.message}</div>
            </div>
          </div>
        ))}
      </div>
    )
}

export default Conversation