import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({user, meetings, onNewMeeting}) {
    const [addMeeting, setAddMeeting] = useState(false);

    return (
        <div>
            {addMeeting ?
                <NewMeetingForm user={user} onSubmit={(m) => onNewMeeting(m)}/> :
                <button onClick={() => setAddMeeting(true)}>Dodaj zajęcie</button>
            }
            {meetings.length > 0 ?
                <>
                    <h2>Zajęcia ({meetings.length})</h2>
                    <MeetingsList user={user} meetings={meetings}/>
                </> :
                <div>Brak zajęć</div>
            }
        </div>
    )
}