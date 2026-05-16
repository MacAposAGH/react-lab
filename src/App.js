import './App.css';
import {useState} from "react";

function App() {
    const [ email, setEmail] = useState("test.email@gmail.com")

    const handleChange = e => {
        setEmail(e.target.value)
    }

    let text = email.length < 5 ? "Ale masz krótki adres!" : `Twój e-mail to ${email}`

    return (
        <>
            <div>System do zapisu zdjęć</div>
            <h2>{text}</h2>
            <input type="text" value={email} onChange={handleChange}/>
        </>
    );
}

export default App;
