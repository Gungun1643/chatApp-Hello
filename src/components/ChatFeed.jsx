import React from "react"
/***********************this are the user defined modules  ************************/
/*message no form  */
import MessageForm from './MessageForm';
/*maro message */
import MyMessage from './MyMessage';
/*tamaro message  */
import TheirMessage from './TheirMessage';

import GoogleTranslate from './GoogleTranslate';

const ChatFeed = (props) => {

    {googleTranslateElementInit();}
    // aa current person ni  current details 6e -> 
    /*su 6e chats then aeno activeChat su 6e then aenu userName su 6e and then aena messages su 6e  */
    const { chats, activeChat, userName, messages } = props;
    // console.log(props);
    /*chat no matlab ke current chat su 6e atle ke chats and then aena 
    chats na andar ma activeChart no swarupe su 6e  */
    const chat = (chats) && (chats[activeChat]);

    /*renderReadReceipts -> read receipients ne kai ritna render karva na ave  */
    const renderReadReceipts = (message, isMyMessage) => {


        /*agar jo ae manas eae message read kari dedho 6e then we need to add a background-image here  */
        chat.people.map((person, index) => {
            (person.last_read === message.id)
                &&
                (
                    <div key={'read_${index}'}
                        className="read-receipt"
                        style={{
                            float: isMyMessage ? 'right' : 'left',
                            backgroundImage: 'url(${person?.person?.avatar})'
                        }}
                    />)
        });
    };

    const renderMessages = () => {
        /*keys na andar messages avse  */
        const keys = Object.keys(messages);
        console.log(keys);

        return keys.map((key, index) => {
            const message = messages[key];
            /*if there are messages then make sure you get the last message  */
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            /*this is to create all the information to create different types of messages  */
            const isMyMessage = userName === message.sender.username;
            // the inner curly brackets are to specify the inner piece of code 
            /*agar jo mein message batayo hoy then maro message batavjo or else tamaro message batavjo  */
            return (<div key={'msg_${index}'} style={{ width: '100%' }}>
                <div className="message-block">
                    {
                        (isMyMessage) ?
                            (<MyMessage message={message} />)
                            : (<TheirMessage theirmessage={message} lastMessage={messages[lastMessageKey]} />)
                    }
                </div>
                {/* agar jo maro message hase then left align or else tamaro message hase to right align karidevano  */}
                <div className="read-receipts"
                    style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                    {renderReadReceipts(message, isMyMessage)}
                </div>
            </div>)
        });
    };
    console.log(chat, userName, messages);

    renderMessages();

    if (!chat) {
        return 'Loading ...';
    }
    return (<div className="chat-feed">
        <div className="chat-title-container">
            {/* use the chat-title  */}
            <div className="chat-title">
                {/* make sure that you have the chat then you need to access the title  */}
                {chat?.title}
            </div>
            {/* now show the chat-subtitle  */}

            <div className="chat-subtitle">
                {
                    chat.people.map((person) => {
                        '${person.person.username}'
                    })};
            </div>
        </div>
        {renderMessages()};
        <div style={{ height: '100px' }} />
        <div className="message-form-container" >
            <MessageForm {...props} chatId={activeChat} />
        </div>
    </div>
    );
}

export default ChatFeed;