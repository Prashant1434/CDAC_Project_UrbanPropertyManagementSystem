import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Login from './Login';
import Admin from '../AdminComponents/Admin';
import Owner from '../AdminComponents/Owner';
import Tenant from '../AdminComponents/Tenant';
import AddOwner from '../AdminComponents/AddOwner';
import OwnerDetails from '../AdminComponents/OwnerDetails';
import BuildingList from '../AdminComponents/BuildingList';
import GEtFlatList from '../AdminComponents/GetFlatList';
import SuperAdmin from '../SuperAdminComponent/SuperAdmin';
import Help from './Help';
import AddBuilder from '../SuperAdminComponent/AddBuilder';
import AddAdmin from '../BuilderComponent/AddAdmin';
import AddBilding from '../BuilderComponent/AddBuilding';
import BuildersBuildingList from '../BuilderComponent/BuildersBuildingList';
import AdminDetails from '../BuilderComponent/AdminDetails';
import Builder from '../BuilderComponent/Builder';

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
            <Route exact path="getflatlist" Component={GEtFlatList}/>
            <Route exact path='/SUPERADMIN' Component={SuperAdmin}/>
            <Route exact path='/Help' Component={Help}/>
            <Route exact path='/addbuilder' Component={AddBuilder}/>
            <Route exact path='/addadmin' Component={AddAdmin}/>
            <Route exact path='/addbuilding' Component={AddBilding}/>
            <Route exact path='/builders_buildinglist' Component={BuildersBuildingList}/>
            <Route exact path='/admin_details' Component={AdminDetails}/>
        </Routes>
    </Router>);
}
export default Launcher;