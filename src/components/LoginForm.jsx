import { useState } from "react";
import axios from "axios";

const projectID = "b2bcdee6-a99c-47a1-86b0-af9556988322";

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        const authObject = { 
            'Project-ID': projectID,
            'User-Name': username, 
            'User-Secret': password
        }

    let myHeaders = new Headers();
        myHeaders.append("Project-ID", "{{projectID}}");
        myHeaders.append("User-Name", "{{username}}");
        myHeaders.append("User-Secret", "{{password}}");

        var raw = "{\n    \"title\": \"Surprise Party\",\n    \"is_direct_chat\": false\n}";

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        try{
            // await axios.get('https://api.chatengine.io/chats', requestOptions);
        await fetch("https://api.chatengine.io/chats/", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();
        }catch(err){
            setError(err.message)
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" />
                    <div align="center">
                        <button className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error && error}</h1>
            </div>
        </div>
    )

}
export default LoginForm;