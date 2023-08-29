import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddBilding() {
    
    const navigate = useNavigate()

    
    
    const ReverseToBuilder = () => {
        navigate("/BUILDER");
    }

 
    const addBilding = () => {
        Validation();
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
              //  var responseReceived = JSON.parse(helper.responseText);
               // console.log("responseReceived : " + responseReceived);
               toast("Building Added Successfully")
                ReverseToBuilder();
            }
        }
        helper.open("POST", "http://localhost:7078/builder/addBuilding/"+sessionStorage.getItem("UserId"));
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);

        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(Building));

    }

    const Validation = () => {
        if (Building.name.length == "") {
            toast.warn("Name Can Not Be Empty")
        }
        if (Building.floorCount.length == "") {
            toast.warn("Floor Count Can Not Be Empty")
        }
        if (Building.phone.length == "") {
            toast.warn("Contact Can Not Be Empty")
        }
        if (Building.madeYear.length == "") {
            toast.warn("Made Year Can Not Be Empty")
        }
        if (Building.address.length == "") {
            toast.warn("Address Can Not Be Empty")
        }

    }


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

    const onTextChange = (args) => {

        var copyofBuilding = { ...Building };
        copyofBuilding[args.target.name] = args.target.value;
        copyofBuilding.addedDate = new Date().getDate();
        console.log(new Date().getDate());
        setBuilding(copyofBuilding);
        console.log(Building);
    }

    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Add Building</legend></center>

                    <div className="form-group">
                        <label>Name of Building</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Name" name="name" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Floor Count</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Floor Count" name="floorCount" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Phone Number" name="phone" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Set Made Year</label>
                        <input type="Date" className="form-control" id="" placeholder="Enter Made Year Date" name="madeYear" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" id="" placeholder="Enter Address" name="address" onChange={onTextChange} />
                    </div>
         
                    <center>
                        <button type="button" className="btn btn-primary" onClick={addBilding}>Add Building</button>
                    </center>
                </form>
            </div>
        </div>
    </>);

    
}

export default AddBilding;