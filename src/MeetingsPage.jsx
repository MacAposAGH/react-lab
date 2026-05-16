import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({meetings, onNewMeeting}) {
    const [meetings, setMeetings] = useState([]);
    const [addMeeting, setAddMeeting] = useState(false);


    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }

    return (
        <div>
            {addMeeting ?
                <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/> :
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
