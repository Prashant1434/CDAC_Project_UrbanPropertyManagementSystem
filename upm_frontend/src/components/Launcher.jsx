import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "../AdminComponents/Homepage";
import Navbar from "./Navbar";
import Login from '../AdminComponents/Login';
import Admin from '../AdminComponents/Admin';
import Owner from '../AdminComponents/Owner';
import AddOwner from "../AdminComponents/AddOwner";
import Builder from "../AdminComponents/Builder";
import Tenant from "../AdminComponents/Tenant";
import OwnerDetails from "../AdminComponents/OwnerDetails";
import BuildingList from "../AdminComponents/BuildingList";
import GetFlatList from "../AdminComponents/GetFlatList";
import UpdateProfile from '../AdminComponents/UpdateProfile';
import ViewProfile from '../AdminComponents/ViewProfile';
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
            <Route exact path="/getflatlist/:id" Component={GetFlatList}/>
            <Route exact path="/updateprofile" Component={UpdateProfile}/>
            <Route exact path="/viewprofile" Component={ViewProfile}/>
        </Routes>
    </Router>);
}
export default Launcher;