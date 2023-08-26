import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AddBuilder() {
    
    const navigate = useNavigate()

    
    
    const ReverseToSuperAdmin = () => {
        navigate("/SUPERADMIN");

    }

 
    const addBuilder = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                console.log("responseReceived : " + responseReceived);
                ReverseToSuperAdmin();
            }
        }
        helper.open("POST", "http://localhost:7078/superadmin/addBuilder");
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(Builder));

    }


    const [Builder, setBuilder] = useState(
        {
            "addedDate": "",
            "name": "",
            "emailId": "",
            "contact": "",
            "password": "",
            "permanentAddress": "",
            "imagePath": "",
            "role": "",
        }
    );

    const onTextChange = (args) => {

        var copyofBuilder = { ...Builder };
        copyofBuilder[args.target.name] = args.target.value;
        copyofBuilder.addedDate = new Date().getDate();
        console.log(new Date().getDate());
        copyofBuilder.role = "BUILDER";
        setBuilder(copyofBuilder);
        console.log(Builder);
    }

    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Add Builder</legend></center>

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
         
                    <center>
                        <button type="button" className="btn btn-primary" onClick={addBuilder}>Add Builder</button>
                    </center>
                </form>
            </div>
        </div>
    </>);

    
}

export default AddBuilder;