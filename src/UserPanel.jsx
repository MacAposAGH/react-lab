import MeetingsPage from "./MeetingsPage";

export default function UserPanel({user, onNewMeeting, onLogout}) {
    return (
        <>
            <div>Witaj {user.email}!</div>
            <MeetingsPage meetings={user.meetings} onNewMeeting={m => onNewMeeting(m)}/>
            <button type="button" onClick={() => onLogout()}>
                Wychodzę
            </button>
        </>
    )
}