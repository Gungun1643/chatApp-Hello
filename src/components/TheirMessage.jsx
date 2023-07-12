// in the newer technologies of the react=> it is not mandatory to import the "react"- module 

const TheirMessage = ({ lastMessage, message }) => {

    /*isFirstMessageByUser=> how do you know that it is the first message by the user ... */
    const isFirstMessageByUser =
        /*if there is not last message then we need to render it  */
        /*it is to check whether the message is the first message sent by the specific user in a given context or not  */
        (!lastMessage)
        ||
        (lastMessage.sender.username !== message.sender.username);
    /*if the lastMessage.sender.username is not equal to the message.sender.username  */

    /*agar jo there is no lastMessage -> that means it was the very first message  */

    /*it compares the 'username' property of the sender object of the 'lastMessage'
     withe the 'username' property of the sender object of the current 'message' =>
      if the two usernames are diffeent it indicate the current message is from the
       different user who is different from the different user compared to the last
        message  */
    return (
        <div className="message-row">
            {/* is there a firstMessageByUser and then we need to find out who is it  */}
            {
                (isFirstMessageByUser)
                &&
                (<div className="message-avatar" style={{ backgroundImage: 'url(${message?.sender?.avatar})' }} />)};
            {
                (message?.attachments?.length > 0)
                    ?
                    (
                        /*sacis*/
                        <img
                            src={message.attachments[0].file}
                            alt="message-attachment"
                            className="message-image"
                            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                        />
                    )
                    :
                    ( /*cfbm => c2 b2 mf*/
                        <div className="message"
                            style={{ float: 'left', backgroundColor: '#CABCDC' }}>
                            {message.text}
                        </div>
                    )
            }
        </div>);
}

export default TheirMessage;