import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./Homepage";
import Navbar from "./Navbar";

function Launcher() {
    return ( <Router>
        <Routes>
            <Route exact path='/Homepage' Component={Homepage}/>
            <Route exact path='/Navbar' Component={Navbar}/>
        </Routes>
    </Router>);
export default Launcher;