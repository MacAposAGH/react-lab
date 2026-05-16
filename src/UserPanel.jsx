import MeetingsPage from "./MeetingsPage";

export default function UserPanel(props) {
    return (
        <>
            <div>Witaj {props.username}!</div>
            <button type="button" onClick={() => props.onLogout()}>
                Wychodzę
            </button>
            <MeetingsPage/>
        </>
    )
}