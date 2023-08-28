import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


function AssignFlatToTenant() {
    var { id } = useParams()
    var {flatNo} = useParams();
    const navigate = useNavigate();


    const [Tenant, setTenant] = useState(
        {
            "addedDate": "",
            "name": "",
            "emailId": "",
            "contact": "",
            "password": "",
            "permanentAddress": "",
            "imagePath": "",
            "role": "",
            "status": "",
            "leaveDate": "",
            "deposite": ""
        }
    );

    const Validation = () => {
        if(Tenant.name.length == ""){
            toast.warn("Name Can Not Be Empty")
        }
        if(Tenant.emailId.length == ""){
            toast.warn("Email Can Not Be Empty")
        }
        if(Tenant.contact.length == ""){
            toast.warn("Contact Can Not Be Empty")
        }
        if(Tenant.password.length == ""){
            toast.warn("Password Can Not Be Empty")
        }
        if(Tenant.permanentAddress.length == ""){
            toast.warn("Address Can Not Be Empty")
        }
        if(Tenant.deposite.length == ""){
            toast.warn("Deposite Can Not Be Empty")
        }
        
    }


    const addTenant = () => {
        Validation();
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                //  var responseReceived = JSON.parse(helper.responseText);
                // console.log("responseReceived : " + responseReceived);
                // ReverseToBuilder();
                navigate("/OWNER")
            }
        }
        helper.open("POST", "http://localhost:7078/owner/assignFlatToTenant/" + id);
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(Tenant));

    }

    const onTextChange = (args) => {

        var copyofTenant = { ...Tenant };
        copyofTenant[args.target.name] = args.target.value;
        copyofTenant.addedDate = new Date().getDate();
        console.log(new Date().getDate());
        copyofTenant.role = "TENANT";
        setTenant(copyofTenant);
        console.log(Tenant);
    }



    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Assign Tenant To Flat</legend></center>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Name" name="name" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" className="form-control" id="" placeholder="Enter Email" name="emailId" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Number" name="contact" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Set Password</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Password" name="password" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Permanent Address</label>
                        <textarea className="form-control" id="" placeholder="Enter Address" name="permanentAddress" onChange={onTextChange} />
                    </div>
                    {/* <div className="form-group">
                        <label>Leave Date</label>
                        <input type="date" className="form-control" id="" placeholder="Enter Address" name="leaveDate" onChange={onTextChange} />
                    </div> */}
                    <div className="form-group">
                        <label>Deposite</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Address" name="deposite" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Flat No</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Address" name="deposite" onChange={onTextChange} value={flatNo} readOnly />
                    </div>
                    <center>
                        <button type="button" className="btn btn-primary" onClick={addTenant}>Assign Tenant</button>
                    </center>
                </form>
            </div>
        </div>
    </>);

}

export default AssignFlatToTenant;