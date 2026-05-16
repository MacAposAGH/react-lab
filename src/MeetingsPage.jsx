import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({meetings, onNewMeeting}) {
    const [addMeeting, setAddMeeting] = useState(false);

    return (
        <div>
            {addMeeting ?
                <NewMeetingForm onSubmit={(m) => onNewMeeting(m)}/> :
                <button onClick={() => setAddMeeting(true)}>Dodaj zajęcie</button>
            }
            {meetings.length > 0 &&
                <>
                    <h2>Zajęcia ({meetings.length})</h2>
                    <MeetingsList meetings={meetings}/>
                </>
            }
        </div>
    )
}