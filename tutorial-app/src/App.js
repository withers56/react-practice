

import {Route, Switch} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavoritesPage from './pages/Favorites';
import MainNav from "./componets/layout/MainNav";

function App() {
    return (
        <div>
            <MainNav />
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupsPage/>
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;