/*we need to import the ChatEngine and ChatFeed from the react-chat-engine  */
import { ChatEngine, ChatFeed } from 'react-chat-engine';
/*import the App.css => this is for styling  */
import './App.css';
/*this is to authenticate the users  */
import LoginForm from './components/LoginForm';

const App = () => {

    /*if we are not logged in then we need to render the login page  */
    /*if we are not able to retrieve the username from the localStorage => 
    localStorage ma we are not able to find any item with the given username  */
    if (!localStorage.getItem('username')) {
        return (<LoginForm />);
    }

    /*if we are logged in then we are going to render the 'ChatEngine' page-> 
    chpuur
    chupur-> 
    1.ChatEngine => name of the element
    2. we will be rendering the whole page ->100vh
    3.userName=> localStorage.getItem('username')
    4.projectId=> what is the project Id ...kaya project ni vat thai rahi 6 
    5.userSecret => what is secret of the current user 
    6.renderChatFeed => will take the chatAppProps ... =>
     and then we need to return the ChatFeed in which are going to open up the chatAppProps 
    */
    // we do not want to render the ChatEngine page alwayss 
    return (<ChatEngine
        height="100vh"
        projectID="62087a2f-0ae6-4dd1-8b91-57f24cf1d5a7"
        userName="gungun1643"
        userSecret="abc123"
        // userName={localStorage.getItem('username')}
        // userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
    );
};

export default App;
