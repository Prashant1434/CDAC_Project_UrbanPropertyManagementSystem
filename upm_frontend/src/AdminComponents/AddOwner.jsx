import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddOwner() {
    var buildingId = sessionStorage.getItem("buildingId");
    // var [buildingId, setBuildingId] = useState("")
    // var [flatId, setFlatId] = useState("1")
    var flatId = sessionStorage.getItem("flatId");

    const [isValidPassed, setIsValidPassed] = useState(false)

    const navigate = useNavigate()

    const [buildingList, setBuildingList] = useState([])

    const [flatList, setFlatList] = useState([])

    const ReverseToOwner = () => {
        navigate("/ADMIN");

    }

    useEffect(() => {
        getBuildingList();
    }, [])

    var adminId = sessionStorage.getItem("UserId");



    const onOptionChange = (event) => {
        debugger;
        var id = event.target.value;
        sessionStorage.setItem("buildingId", id);
        console.log("building iD  : " + buildingId);
        getFlatList();
    }

    const onOptionChangeFlat = (event) => {
      debugger
        // setFlatId(event.target.value);
        sessionStorage.setItem("flatId", event.target.value);

        console.log("flat Id" + flatId);
    }

    const getBuildingList = () => {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log(responseReceived);
                setBuildingList(responseReceived);
                console.log(buildingList);
            }
        };

        helper.open("GET", "http://localhost:7078/admin/buildinglist/" + adminId);
        helper.setRequestHeader("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send();
    }
    const getFlatList = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                console.log(responseReceived);
                setFlatList(responseReceived);
                console.log(flatList);
            }
        };

        helper.open("GET", "http://localhost:7078/admin/emptyflats/" + parseInt(buildingId));
        helper.setRequestHeader("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send();
    }
    const Validation = () => {
        let isValid = true;
        if (Owner.name.length == "") {
            toast.warn("Name Can Not Be Empty")
            isValid = false;
        }
        if (Owner.emailId.length == "") {
            toast.warn("Email Can Not Be Empty")
            isValid = false;
        }
        if (Owner.contact.length == "") {
            toast.warn("Contact Can Not Be Empty")
            isValid = false;
        }
        if (Owner.password.length == "") {
            toast.warn("Password Can Not Be Empty")
            isValid = false;
        }
        if (Owner.permanentAddress.length == "") {
            toast.warn("Address Can Not Be Empty")
            isValid = false;
        }
        if (buildingId == null) {
            toast.warn("Select Building")
            isValid = false;
        }
        if (flatId == null) {
            toast.warn("Select Flat")
            isValid = false;
        }
        if (isValid) {
            setIsValidPassed(isValid)
        }
    }
    const addOwner = () => {
        Validation();
        if (isValidPassed) {
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                if (helper.readyState == 4 && helper.status == 200) {
                    var responseReceived = JSON.parse(helper.responseText);
                    console.log("responseReceived : " + responseReceived);
                    toast.success(responseReceived.message)
                    ReverseToOwner();
                }
            }
            helper.open("PUT", "http://localhost:7078/admin/addFlatToOwner/" + parseInt(flatId));
            helper.setRequestHeader("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
            helper.setRequestHeader("Content-Type", "application/json");
            helper.send(JSON.stringify(Owner));
        }
    }

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

    const onTextChange = (args) => {

        var copyofOwner = { ...Owner };
        copyofOwner[args.target.name] = args.target.value;
        copyofOwner.addedDate = new Date().getDate();
        console.log(new Date().getDate());
        copyofOwner.role = "OWNER";
        setOwner(copyofOwner);
        console.log(Owner);
    }

    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Add Owner</legend></center>

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
                        <label>Upload Photo</label>

                        <input type="file" className="btn btn-default"/>
                        <br></br>
                        <button className="btn btn-success">
                            Upload!
                        </button>
                    </div> */}
                    <div className="form-group">
                        {buildingList.length == 0 ?
                            <select onChange={onOptionChange} className='inputBox'>
                                <option>No Building Available</option>
                            </select>
                            :
                            <select onChange={onOptionChange} className='inputBox'>
                                <option>Select Building</option>
                                {buildingList.map((item) => {
                                    return <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                })}
                            </select>

                        }

                    </div>
                    <div className="form-group">
                        {flatList.length == 0
                            ?
                            <select className='inputBox'>
                                <option>No Flat Available</option>  </select>
                            :
                            <select onChange={onOptionChangeFlat} className='inputBox'>
                                <option>Select Flat</option>
                                {flatList.map((item) => {
                                    return <option key={item.id} value={item.flatId}>
                                        {item.flatNo}
                                    </option>
                                })}
                            </select>
                        }

                    </div>
                    <center>
                        <button type="button" className="btn btn-primary" onClick={addOwner}>Add Owner</button>
                    </center>
                </form>
            </div>
        </div>
    </>);


}

export default AddOwner;