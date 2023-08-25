import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddOwner() {
    const navigate = useNavigate
    // const Admin = useState({

    // })
    const flatList = useState([]);
    const buildingList = ["Building 1", "Building 2"];
    const ReverseToOwner = () => {
        navigate("/owner");
    }
    var adminId = sessionStorage.getItem("UserId");
    const getBuildingList = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                console.log(responseReceived);
            }
        };

        helper.open("GET", "http://localhost:7078/admin/buildinglist/" + adminId);
        helper.send();
    }

    const onOptionChange = (event) => {

    }


    // private Long id;

    // private LocalDate addedDate;

    // private String name;

    // private String emailId;

    // private String contact;

    // private String password;

    // private String permanentAddress;

    // private String imagePath;

    // private Role role;

    // private Long flatId;

    const [Owner, setOwner] = useState(
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
    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Add Owner</legend></center>

                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Name" name="name" />
                    </div>
                    <div className="form-group">
                        <label>E-Mail</label>
                        <input type="email" className="form-control" id="" placeholder="Enter Email" name="emailId" />
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Number" name="contact" />
                    </div>
                    <div className="form-group">
                        <label>Set Password</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Password" name="password" />
                    </div>
                    <div className="form-group">
                        <label>Permanent Address</label>
                        <textarea className="form-control" id="" placeholder="Enter Address" name="permanentAddress" />
                    </div>
                    {/* <div className="form-group">
                        <label>Upload Photo</label>

                        <input type="file" className="btn btn-default"/>
                        <br></br>
                        <button className="btn btn-success">
                            Upload!
                        </button>
                    </div> */}
                    <div className="form-group">
                        <select onChange={onOptionChange} className='inputBox'>
                            <option>Select Building</option>
                            {buildingList.map((option, index) => {
                                return <option key={index}>
                                    {option}
                                </option>
                            })}
                        </select>

                    </div>
                    <div className="form-group">
                        <select onChange={onOptionChange} className='inputBox'>
                            <option>Select Flat</option>
                            {flatList.map((option, index) => {
                                return <option key={index}>
                                    {option}
                                </option>
                            })}
                        </select>

                    </div>
                    <center>
                        <button type="button" className="btn btn-primary" onClick={getBuildingList}>Add Owner</button>
                    </center>
                </form>
            </div>
        </div>
    </>);
}

export default AddOwner;