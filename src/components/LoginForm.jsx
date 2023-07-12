import { useState } from "react";
import axios from 'axios';

const projectID = "62087a2f-0ae6-4dd1-8b91-57f24cf1d5a7";


const LoginForm = () => {
    /*2 usedStates  */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        // try to access the user= ((userName) && (password) ) => chatengine -> to give back us the messages 
        // make a new object for authorization
        const authObject = {
            'Project-ID': projectID,
            'User-Name': username,
            'User-Secret': password
        };

        //  use the try-catch method =>
        try {
            // use the asynchronous code 
            /*we are going to make the inner working of the chat engine api */

            // works => logged in
            // this is to authorize the userss 
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            // if the user is found then localStorage ma item ne set karya pachi -> we need to reload the page
            window.location.reload();
            /*this means there is no error  */
            setError('');
        } catch (error) {

            // error => you are not our user -> try again... 
            setError('Oops, incorrect credentialss!!')
        }
    };
    return (<div className="wrapper">
        <div className="form">
            <h1 className="title">CHAT APPLICATION!!</h1>
            <form onSubmit={handleSubmit}>
                {/* itvors=> itvors -> input type value onChange setFunction required */}
                <input type="text" value={username} onChange={(event) => {
                    setUsername(event.target.value)
                }} className="input" placeholder="Username" required />
                <input type="text" value={password} onChange={(event) => {
                    setPassword(event.target.value)
                }} className="input" placeholder="Password" required />

                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting </span> </button>
                </div>
                <h2 className="error">{error} </h2>
            </form>
        </div>
    </div>);
}

export default LoginForm;