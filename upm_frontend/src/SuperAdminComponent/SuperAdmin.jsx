
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function SuperAdmin() {
    const navigate = useNavigate();

    const GoToAddBuilder = () => {
        navigate("/addBuilder");
    }

    return (<>
    <Navbar login="logout"/>
    <div className="container">

    </div>
        <div style={{ paddingTop: "5%", paddingLeft: "2%" }}>
            <input type='button' onClick={GoToAddBuilder} value="AddBuilder" /><br></br><br />
        </div>
        
        
        </>);
}

export default SuperAdmin;