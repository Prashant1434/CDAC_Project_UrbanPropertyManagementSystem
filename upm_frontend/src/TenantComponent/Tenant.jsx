import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Tenant() {
    const navigate = useNavigate();
    const ViewProfile = () => {
        navigate("/viewprofile")
    }
    const GetUtilityListOfTenant = () =>{
        navigate("/getUtilityListOfTenant")
    }
    return (<>
        <Navbar login="logout" />
        <div className="container">

        </div>
        <div style={{ paddingTop: "5%", paddingLeft: "2%" }}>
            {/* <input type='button' onClick={GoToAddTenant} value="AddTenant" /><br></br><br /> */}
            {/* <input type='button' onClick={UpdateProfile} value="Update Profile" /><br></br><br /> */}
            <input type='button' onClick={ViewProfile} value="View Profile" /><br></br><br />
            <input type='button' onClick={GetUtilityListOfTenant} value="Utility List" /><br></br><br />
            {/* <input type='button' onClick={AddUtility} value="Add Utility" /><br></br><br /> */}

        </div>
    </>);
}

export default Tenant;