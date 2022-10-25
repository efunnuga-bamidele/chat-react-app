const TheirMassage = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName;
    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div 
                    className="message-avater"
                    style={{backgroundImage: message.sender && `url(${message.sender.avater})`}}
                />
            )}
            {message.attachment && message.attachment.lenght > 0 
                ?(
                    <img 
                        src={message.attachments.file} 
                        alt="message-attachment" 
                        className="message-image"
                        style={{ merginLeft: isFirstMessageByUser ? '4px' : '48px'}}
                    />
                )
                :(
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }
        </div>
    )
}

export default TheirMassage