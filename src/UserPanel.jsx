import MeetingsPage from "./MeetingsPage";

export default function UserPanel({user, meetings, onNewMeeting, onLogout}) {
    return (
        <>
            <div>Witaj {user}!</div>
            <MeetingsPage user={user} meetings={meetings} onNewMeeting={m => onNewMeeting(m)}/>
            <button type="button" onClick={() => onLogout()}>
                Wychodzę
            </button>
        </>
    )
}