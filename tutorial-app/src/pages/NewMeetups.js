import {useHistory} from 'react-router-dom'
import NewMeetupForm from "../componets/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        const requestObject = {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch('https://react-practice-c1b93-default-rtdb.firebaseio.com/meetups.json', requestObject).then(function (){
            history.replace('/')
        });
    }
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupsPage;