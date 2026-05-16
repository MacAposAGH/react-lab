import './App.css';
import "milligram";
import {useState} from "react";
import LoginForm from "./LoginForm";

function App() {
    const [logged, setLogged] = useState(false)
    const [email, setEmail] = useState("test.email@gmail.com")
    let text = email.length < 5 ? "Ale masz krótki adres!" : `Twój e-mail to ${email}`

    const handleChange = e => {
        setEmail(e.target.value)
    }

    const handleClick = () => {
        if (!logged) {
            window.alert(email)
        }
        setLogged(!logged)
    }

    const login = (t) => {
        console.log(t)
    }

    return (
        <LoginForm onLogin={login} hidden={logged}/>

        // <>
        //     <div>System do zapisu zdjęć</div>
        //     <h2>{text}</h2>
        //     <input type="text" value={email} onChange={handleChange} hidden={logged}/>
        //     <div hidden={!logged}>Witaj {email}!</div>
        //     <button onClick={handleClick}>{logged ? "Wyloguj" : "Wchodzę"}</button>
        // </>
    );
}

export default App;
