import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewProfile() {
    var userId = sessionStorage.getItem("UserId");
    const navigate = useNavigate();
    const [Admin, setAdmin] = useState(
        {
            "addedDate": "",
            "name": "",
            "emailId": "",
            "contact": "",
            "password": "",
            "permanentAddress": "",
            "imagePath": "",
            "role": "",
            "flatId": 0
        }
    );
    useEffect(() => { getAdmin() }, [])

    const getAdmin = () => {
        debugger;
        var helper = new XMLHttpRequest()
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText)

                console.log(responseReceived)
                setAdmin(responseReceived)
                console.log(Admin)
            }
        };

        helper.open("GET", "http://localhost:7078/admin/getAdmin/" + userId)
        helper.send()
    }

    const UpdateProfile = () => {
        navigate("/updateprofile");
    }

    const onTextChange = (args) => {

        var copyofAdmin = { ...Admin };
        copyofAdmin[args.target.name] = args.target.value;

        console.log(new Date().getDate());
        // copyofAdmin.role = Admin.role;
        // copyofAdmin.addedDate = Admin.addedDate;

        setAdmin(copyofAdmin);
        console.log(Admin);
    }
    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>View Profile</legend></center>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Name" name="name" onChange={onTextChange} value={Admin.name} disabled />
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" className="form-control" id="" placeholder="Enter Email" name="emailId" onChange={onTextChange} value={Admin.emailId} disabled />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Number" name="contact" onChange={onTextChange} value={Admin.contact} disabled />
                    </div>

                    <div className="form-group">
                        <label>Permanent Address</label>
                        <textarea className="form-control" id="" placeholder="Enter Address" name="permanentAddress" onChange={onTextChange} value={Admin.permanentAddress} disabled />
                    </div>
                    <div className="form-group">
                        <label>Added Date</label>
                        <input type="text" className="form-control" id="" placeholder="Enter date" name="password" onChange={onTextChange} value={Admin.addedDate} disabled />
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <input type="text" className="form-control" id="" placeholder="Enter date" name="password" onChange={onTextChange} value={Admin.role} disabled />
                    </div>
                    <div className="form-group">
                        <center>
                            <input type="button" className="btn-primary" id="" name="password" onClick={UpdateProfile} value={"Update"} />

                        </center>
                    </div>

                </form>
            </div>
        </div>
    </>);
}

export default ViewProfile;