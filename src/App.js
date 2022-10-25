import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx'
//Style
import './App.css'
import LoginForm from './components/LoginForm.jsx'


export default function App(){
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <div className='App'>
            <ChatEngine
                height='100vh'
                userName='john'
                userSecret='password'
                projectID='b2bcdee6-a99c-47a1-86b0-af9556988322'
                renderChatFeed = {(chatAppProps) => <ChatFeed { ...chatAppProps} />
                }
                onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
            />
            
        </div>
    )
}