import './App.css';
import "milligram";
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const emptyUser = {email: "", meetings: [""]};
    const [users, setUsers] = useState([])
    const [loggedIn, setLoggedIn] = useState(emptyUser)

    const login = (email) => {
        let existingUser = users.find((u) => u.email === email);
        if (!existingUser) {
            existingUser = {email, meetings: []}
            setUsers([...users, existingUser]);
        }
        setLoggedIn(existingUser)
    }

    const logout = () => {
        setLoggedIn(emptyUser)
    }

    const handleNewMeeting = (meeting) => {
        const existingUser = users.find(u => u.email === loggedIn.email);
        existingUser.meetings.push(meeting)
        setLoggedIn({...existingUser})
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn.email
                    ? <UserPanel user={loggedIn} onLogout={logout} onNewMeeting={handleNewMeeting}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
