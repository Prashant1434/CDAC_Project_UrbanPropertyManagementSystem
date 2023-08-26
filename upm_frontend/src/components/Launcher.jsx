import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Login from './Login';
import Admin from '../AdminComponents/Admin';
import AddOwner from '../AdminComponents/AddOwner';
import OwnerDetails from '../AdminComponents/OwnerDetails';
import BuildingList from '../AdminComponents/BuildingList';
import SuperAdmin from '../SuperAdminComponent/SuperAdmin';
import Help from './Help';
import AddBuilder from '../SuperAdminComponent/AddBuilder';
import AddAdmin from '../BuilderComponent/AddAdmin';
import AddBilding from '../BuilderComponent/AddBuilding';
import BuildersBuildingList from '../BuilderComponent/BuildersBuildingList';
import AdminDetails from '../BuilderComponent/AdminDetails';
import Builder from '../BuilderComponent/Builder';
import UpdateProfile from '../AdminComponents/UpdateProfile'
import ViewProfile from '../AdminComponents/ViewProfile'
import GetFlatList from '../AdminComponents/GetFlatList';
import AssignBuildingToAdmin from '../BuilderComponent/AssignAdminToBuilding';

function Launcher() {
    return (<Router>
        <Routes>
            <Route exact path='/' Component={Homepage} />
            <Route exact path='/navbar' Component={Navbar} />
            <Route exact path='/login' Component={Login} />
            <Route exact path='/ADMIN' Component={Admin} />
            <Route exact path='/BUILDER' Component={Builder} />
            <Route exact path='/addowner' Component={AddOwner} />
            <Route exact path="/ownerDetails" Component={OwnerDetails} />
            <Route exact path="/buildingDetails" Component={BuildingList} />
            <Route exact path="/getflatlist/:id" Component={GetFlatList}/>
            <Route exact path='/SUPERADMIN' Component={SuperAdmin}/>
            <Route exact path='/Help' Component={Help}/>
            <Route exact path='/addbuilder' Component={AddBuilder}/>
            <Route exact path='/addadmin' Component={AddAdmin}/>
            <Route exact path='/addbuilding' Component={AddBilding}/>
            <Route exact path='/builders_buildinglist' Component={BuildersBuildingList}/>
            <Route exact path='/admin_details' Component={AdminDetails}/>
            <Route exact path='/updateprofile' Component={UpdateProfile}/>
            <Route exact path='/viewprofile' Component={ViewProfile}/>
            <Route exact path='/assign_building/:id' Component={AssignBuildingToAdmin}/>
            
        </Routes>
    </Router>);
}
export default Launcher;