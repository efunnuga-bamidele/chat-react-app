import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed.jsx'
//Style
import './App.css'

export default function App(){
    return(
        <div className='App'>
            <ChatEngine
                height="100vh"
                projectID="b2bcdee6-a99c-47a1-86b0-af9556988322"
                userName="john"
                userSecret="password"
                renderChatFeed = {(chatAppProps) => <ChatFeed { ...chatAppProps} />
                }
                onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
            />
            
        </div>
    )
}