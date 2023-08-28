import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Admin() {
    const navigate = useNavigate();
    const GoToAddAdmin = () => {
        navigate("/addAdmin");
    }
    const GoToAddBuilding = () => {
        navigate("/addBuilding");
    }
  
    const GoToAdminDetails = () => {
        navigate("/admin_details");
    }
    const GoToBuildingDetails = () => {
        navigate("/builders_buildinglist")
    }
    const GoToAddFlat  = () => {
        navigate("/addflat");
    }
    const UpdateProfile = () =>{
        navigate("/updateprofile");
    }
    const ViewProfile = () => {
        navigate("/viewprofile")
    }
    const Help = () =>{
        navigate("/Help")
    }
    
    return (<>
    <Navbar login="logout"/>
    <div className="container">

    </div>
        <div style={{ paddingTop: "5%", paddingLeft: "2%" }}>
            <input type='button' onClick={GoToAddAdmin} value="AddAdmin" /><br></br><br />
            <input type='button' onClick={GoToAddBuilding} value="AddBuilding" /><br></br><br />
            <input type='button' onClick={GoToAdminDetails} value="Admin Details" /><br></br><br />
            <input type='button' onClick={GoToBuildingDetails} value="Building Details" /><br></br><br />
            <input type='button' onClick={GoToAddFlat} value="Add Flat" /><br></br><br />
            <input type='button' onClick={UpdateProfile} value="Update Profile" /><br></br><br />
            <input type='button' onClick={ViewProfile} value="View Profile" /><br></br><br />
            <input type='button' onClick={Help} value="Help ?" /><br></br><br />
            
        </div>
        
        
        </>);
}

export default Admin;