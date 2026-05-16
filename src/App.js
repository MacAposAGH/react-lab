import './App.css';
import "milligram";
import {useState} from "react";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    const [loggedIn, setLoggedIn] = useState("")

    const login = (email) => {
        setLoggedIn(email)
    }

    const logout = () => {
        setLoggedIn("")
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedIn
                    ? <UserPanel username={loggedIn} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
