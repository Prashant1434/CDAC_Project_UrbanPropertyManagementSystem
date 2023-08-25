import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Login from './Login';
import Admin from './Admin';
import Owner from './Owner';
import AddOwner from "./AddOwner";
import Builder from "./Builder";
import Tenant from "./Tenant";
import OwnerDetails from "./OwnerDetails";
import BuildingList from "./BuildingList";
import GetFlatList from "./GetFlatList";
function Launcher() {
    return (<Router>
        <Routes>
            <Route exact path='/' Component={Homepage} />
            <Route exact path='/navbar' Component={Navbar} />
            <Route exact path='/login' Component={Login} />
            <Route exact path='/ADMIN' Component={Admin} />
            <Route exact path='/OWNER' Component={Owner} />
            <Route exact path='/BUILDER' Component={Builder} />
            <Route exact path='/TENANT' Component={Tenant} />
            <Route exact path='/addowner' Component={AddOwner} />
            <Route exact path="/ownerDetails" Component={OwnerDetails} />
            <Route exact path="/buildingDetails" Component={BuildingList} />
            <Route exact path="getflatlist" Component={GetFlatList}/>
        </Routes>
    </Router>);
}
export default Launcher;