import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewTenantProfile()  {

    var {id} = useParams();
    var userId = sessionStorage.getItem("UserId");
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
    useEffect(() => { getTenant() }, [])

    const getTenant = () => {
        debugger;
        var helper = new XMLHttpRequest()
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText)

                console.log(responseReceived)
                setTenant(responseReceived)
                console.log(Tenant)
            }
        };

        helper.open("GET", "http://localhost:7078/owner/tenantsflat/" + id);
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type","application/json");
        helper.send()
    }

    const UpdateProfile = () => {
        navigate("/updateprofile");
    }

    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>View Tenant</legend></center>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Name" name="name"  value={Tenant.name} readOnly />
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" className="form-control" id="" placeholder="Enter Email" name="emailId"  value={Tenant.emailId} readOnly />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Number" name="contact"  value={Tenant.contact} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Permanent Address</label>
                        <textarea className="form-control" id="" placeholder="Enter Address" name="permanentAddress"  value={Tenant.permanentAddress} readOnly />
                    </div>
                    <div className="form-group">
                        <label>Added Date</label>
                        <input type="text" className="form-control" id="" placeholder="Enter date" name="password"  value={Tenant.addedDate} readOnly />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <input type="text" className="form-control" id="" placeholder="Enter date" name="password"  value={Tenant.role} readOnly />
                    </div>
                    {/* <div className="form-group">
                        <center>
                            <input type="button" className="btn-primary" id="" name="password" onClick={UpdateProfile} value={"Update"} />

                        </center>
                    </div> */}

                </form>
            </div>
        </div>
    </>);
}

export default ViewTenantProfile;