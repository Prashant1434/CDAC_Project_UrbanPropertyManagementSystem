
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function SuperAdmin() {
    const navigate = useNavigate();

    const GoToAddBuilder = () => {
        navigate("/addBuilder");
    }
    const GoToOwnerDetails = () => {
        navigate("/builderDetailsdetails");
    }
    const GoToAddBuildingDetails = () => {
        navigate("/buildingDetails")
    }
    return (<>
    <Navbar login="logout"/>
    <div className="container">

    </div>
        <div style={{ paddingTop: "5%", paddingLeft: "2%" }}>
            <input type='button' onClick={GoToOwnerDetails} value="Owner Details" /><br></br><br />
            <input type='button' onClick={GoToAddBuilder} value="AddBuilder" /><br></br><br />

            <input type='button' onClick={GoToAddBuildingDetails} value="Building Details" /><br></br><br />
        </div>
        
        
        </>);
}

export default SuperAdmin;