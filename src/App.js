import './App.css';
import "milligram";
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const [meetings, setMeetings] = useState([])
    const [loggedIn, setLoggedIn] = useState("")

    const login = (email) => {
        setLoggedIn(email)
    }

    const logout = () => {
        setLoggedIn("")
    }

    const handleNewMeeting=(meeting)=> {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel user={loggedIn} meetings={meetings} onLogout={logout} onNewMeeting={handleNewMeeting}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
