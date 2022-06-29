import {useState, useEffect} from 'react';

import MeetupsList from "../componets/meetups/MeetupsList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-practice-c1b93-default-rtdb.firebaseio.com/meetups.json').then(function (resp){
            return resp.json();
        }).then(function (data){
            const meetups = [];

            for (const keys in data) {
                const meetup = {
                    id: keys,
                    ...data[keys]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups)
        });
    }, [])

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return(
        <section>
            <h1>All Meetups</h1>
            <MeetupsList meetups={loadedMeetups} />

        </section>
    )
}

export default AllMeetupsPage;