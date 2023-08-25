import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Admin() {
    const navigate = useNavigate();
    const GoToAddOwer = () => {
        navigate("/addOwner");
    }
    const GoToOwnerDetails = () => {
        navigate("/");
    }
    return (<>
    <Navbar login="logout"/>
    <div className="container">

    </div>
        <div style={{ paddingTop: "5%", paddingLeft: "2%" }}>
            <input type='button' onClick={GoToOwnerDetails} value="Owner Details" /><br></br><br />
            <input type='button' onClick={GoToAddOwer} value="AddOwner" /><br></br><br />
        </div>
        
        
        </>);
}

export default Admin;