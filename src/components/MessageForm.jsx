import { useState } from "react";

/*the useState is used to track the data and the properties of the state  */
/*it is an api which will let us know whether th user is typing or not  */
import { sendMessage, isTyping } from 'react-chat-engine';

/* import the icons => SendOutlined = arrow symbol to send the message ...
 PictureOutlined = outlined images mate use karo */
import { SendOutlined, PictureOutlined } from '@ant-design/icons';


/*MessageForm na andar we will get the props -> 
and then we would be able to extract the chatId and creds from the props  */
const MessageForm = (props) => {
    /*initiate the setValue as an empty string  */
    const [value, setValue] = useState(' ');
    const { chatId, creds } = props;
    const handleSubmit = (event) => {
        /*darek vakhte writing the handleSubmit button we need to 
        add the event .preventDefault => not to refresh when the
         page is submitted */
        event.preventDefault();
        /*trim method trims off the message with the leading and trailing spaces  */
        const text = value.trim();
        /*if the length of the text is greater than  0 then we need to add an image there */
        if (text.length > 0) {
            /*it is the function comming from the react engine -> 
             here is the function to send the text message */
            /*sendMessage to chat-engine no j function 6e aena mato apde values ne fetch karine api 6e   */
            sendMessage(creds, chatId, { text });
        }
        /*now reset the text field  */
        setValue('');
    };
    /*this method is handleChange -> set the value to event.target.value ... */
    const handleChange = (event) => {
        /*ahiya thi value change thati rehse ... */
        setValue(event.target.value);
        /*agar jo ae type kari rahyo 6e then => show typing ... */
        /* aevu batavo ke same vado manas typing kari rahyo 6e.. isTyping will take the value ke kon type kari rahyo 6e */
        isTyping(props.chatId);
    };
    /*this is the method used to upload the files -> 
    we need to send the message as creds(credentials),chatId(this is the chatId), then then we
     are going to add the image file there to be submitted  */
    const handleUpload = (event) => {
        /*sendMessage will take the values ke 
         1.creds => authorized 6e ke nai 
         2.chatId => kaya chat ni vat thai 6e 
         3. su apva mango 6o -> files na andar you could add the 
         files(contact,music,recording, image,attachments) and also the text(which we call it as the caption )
         */
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
    }
    /*now is the actual part what we need to return there  */
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            { /*povico =  now the first input field is className, placeholder, value ,onChange, and onSubmit  */}
            <input
                className="message-input1"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {/* this allows us to upload the image  */}
            {/* html for anchor attribute tarike kam karse ...  */}
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            {/* picture input tag -> multiple=false => ek j file 6e that we need to upload, 
            aena button ni id is the 'upload-button'  and the style is none and on adding the 
            onUpload we are going to call the handleUpload method */}
            <input type="file" multiple={false} id="upload-button" style={{ display: 'none' }}
                onChange={handleUpload}
            />
            {/* now this is the button to submit the form and the submit button no icon has the SendOutline class  */}
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
}

export default MessageForm;