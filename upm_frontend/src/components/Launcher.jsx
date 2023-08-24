import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Login from './Login';
import Admin from './Admin';
import Owner from './Owner';

function Launcher() {
    return ( <Router>
        <Routes>
            <Route exact path='/' Component={Homepage}/>
            <Route exact path='/navbar' Component={Navbar}/>
            <Route exact path='/login' Component={Login}/>
            <Route exact path='/ADMIN' Component={Admin}/>
            <Route exact path='/Owner' Component={Owner}/>
        </Routes>
    </Router>);
}
export default Launcher;