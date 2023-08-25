import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function AddOwner() {
    const [buildingId, setBuildingId] = useState("")
    var [flatId, setFlatId] = useState("1")
    
    const navigate = useNavigate()

    const [buildingList, setBuildingList] = useState([])
    
    const [flatList, setFlatList] = useState([])
    
    const ReverseToOwner = () => {
        navigate("/ADMIN");

    }

    // const [User, setUser] = useState(
    //         {
    //             "id": 0,
    //             "addedDate": "",
    //             "name": "",
    //             "emailId": "",
    //             "contact": "",
    //             "password": "",
    //             "permanentAddress": "",
    //             "imagePath": null,
    //             "role": ""
    //         });

    useEffect(() => {
        getBuildingList();

    }, [])

    var adminId = sessionStorage.getItem("UserId");


    const onOptionChange = (event) => {
        debugger;
        var id = event.target.value;
        setBuildingId(id);
        console.log("building iD  : " + buildingId);
        getFlatList(id);
        debugger;
    }

    const onOptionChangeFlat = (event) => {
        // debugger;
        // setFlatId(event.target.value);
        // console.log(flatId);
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
        helper.send();
    }
    const getFlatList = (buildingId) => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = (helper.responseText);
                console.log(responseReceived);
                setFlatList(responseReceived);
                console.log(flatList);
            }
        };

        helper.open("GET", "http://localhost:7078/admin/emptyflats/" + parseInt(buildingId));
        helper.send();
    }

    const addOwner = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                console.log("responseReceived : " + responseReceived);
                ReverseToOwner();
            }
        }
        helper.open("PUT", "http://localhost:7078/admin/addFlatToOwner/" + parseInt(flatId));
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(Owner));

    }


    // private Long id;


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
                        <select onChange={onOptionChange} className='inputBox'>
                            <option>Select Building</option>
                            {buildingList.map((item) => {
                                return <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            })}
                        </select>

                    </div>
                    <div className="form-group">
                        <select onChange={onOptionChange} className='inputBox'>
                            <option>Select Flat</option>
                            {flatList.map((item) => {
                                return <option key={item.id} value={item.id}>
                                    {item.flatNo}
                                </option>
                            })}
                        </select>

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