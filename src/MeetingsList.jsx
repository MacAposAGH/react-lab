export default function MeetingsList({user, meetings}) {
    const handleSignIn = (meeting) => {
        meeting.signedIn.push(user)
    }

    const handleDelete = (meeting) => {
        meeting.signedIn.push(user)
    }


    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>

                    <td>
                        <button
                            onClick={() => handleSignIn(meeting)}>{meeting.signedIn.indexOf(user) === -1 ? "Zapisz się" : "Wypisz się"}</button>
                        {meeting.organizer === user && <button>Usuń</button>}
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    );
}