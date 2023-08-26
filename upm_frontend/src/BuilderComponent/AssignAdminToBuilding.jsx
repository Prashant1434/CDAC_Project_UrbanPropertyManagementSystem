import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AssignBuildingToAdmin() {
    const navigate = useNavigate();

    const [AdminList, setAdminList] = useState([]);

    const [adminId,setAdminId] =useState("");
    
    const ReverseToBuilder = () => {
        navigate("/BUILDER");

    }

    const {id} =useParams()

    const [Building, setBuilding] = useState(
        {
            "addedDate": "",
            "name": "",
            "phone": "",
            "floorCount": "",
            "address": "",
            "madeYear":""
        }
    );

    const onOptionChange = (event) => {
       debugger;
        setAdminId(event.target.value);
    }

    const getBuilding= () => {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log(responseReceived);
                setBuilding(responseReceived);
                console.log(Building);
            }
        };

        helper.open("GET", "http://localhost:7078/builder/getBuilding/" + id);
        helper.send();
    }
 
    const assignBuildingToAdmin = () => {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
              //  var responseReceived = JSON.parse(helper.responseText);
               // console.log("responseReceived : " + responseReceived);
                ReverseToBuilder();
            }
        }
        helper.open("PUT", "http://localhost:7078/builder/assignBuilding/"+parseInt(adminId)+"/"+id);
        helper.send();

    }
    useEffect(() => { getAdminList() ;getBuilding()}, []);

    const getAdminList = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                setAdminList(responseReceived);
                console.log("responseReceived : " + responseReceived.emailId);
            }
        }
        helper.open("GET", "http://localhost:7078/builder/adminlist/" +sessionStorage.getItem("UserId"));
        helper.send();
    }

  

    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Assign Admin</legend></center>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={Building.name} id=""  name="name" readOnly/>
                    </div>
                    <div className="form-group">
                        <label>floorCount</label>
                        <input type="email" className="form-control" value={Building.floorCount} id=""  name="emailId"  readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" value={Building.phone} id=""  name="contact" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Made Year</label>
                        <input type="text" className="form-control" value={Building.madeYear} id="" name="password" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" value={Building.address} id="" name="password" readOnly />
                    </div>
                  
                    <div className="form-group">
                        <select onChange={onOptionChange} className='inputBox'>
                            <option>Select Admin</option>
                            {AdminList.map((item) => {
                                return <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            })}
                        </select>

                    </div>
         
                    <center>
                        <button type="button" className="btn btn-primary" onClick={assignBuildingToAdmin}>Assign Admin</button>
                    </center>
                </form>
            </div>
        </div>
    </>);

    
}

export default AssignBuildingToAdmin;