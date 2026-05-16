import './App.css';
import "milligram";
import {useEffect, useState} from "react";
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

    const readMeeting = (meeting) => {
        return meetings.find(m => m.organizer === meeting.organizer);
    }

    const handleNewMeeting = (meeting) => {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }


    const handleUpdateMeeting = (meeting) => {
        let find = meetings.find(m => m.organizer === meeting.organizer);
        find = meeting;

        setMeetings(nextMeetings);
    }

    useEffect(() => {
        console.log("test")
    }, [meetings]);

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
