/*MyMessage function na andar message as an parameter avse  */
const MyMessage = ({ message }) => {
    /*how to show an image which is shown myMessage */
    /*agar jo message na andar attachments 6e then aeni length is greater than 0 then we need to return that attachment now most probably the attachment is the file onlyy  */
    if (message?.attachments?.length > 0) {
        /*  so we need to return an image 
        1.ae su 6e => img
        2.ae kya thi avelu 6e => src ->message.attachments[0].file
        3.ae kaya jati nu 6e => className
        4. aeno dekhav kevo 6e => style -> float: right => mari baju rehje karan ke mein aeno moklelu 6e 
        */
       /*sacis*/
        return (<img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ float: 'right' }}
        />);
    }
    /*how to show the texts   */
    return (
        /*div tag na andar we write the text
        1.className is => message
        2.styling kevi ritna ni hovi joiee
        A.mein moklyu 6e then mari baju => float:right
        B.mein css check kargo to margin ketlu 18px
        C.white color hovo joie text no 
        D.background color should be the purplish
        3.content su 6e -> so we need to write it as a javascript object => {message.text}
         */
        /*c2m2bf*/
        <div className="message"
            style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text} </div>);
}

export default MyMessage; 