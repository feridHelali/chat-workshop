import './ChatroomHeader.css'

// eslint-disable-next-line react/prop-types
function ChatroomHeader({ sender }) {
    return (
        <div className='chatroom-header'>
            <div className='chatroom-header__avatar'>
               <img src={sender.avatarUrl} alt="avatar" />
            </div>
            <div className='chatroom-header__sender-name'>
                {sender.username}
            </div>
        </div>
    )
}

export default ChatroomHeader