import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddFlat() {

    const [buildingList, setBuildingList] = useState([])

    var builderId = sessionStorage.getItem("UserId");

    const [buildingId, setBuildingId] = useState("");

    const TypeList = ['1BHK', '2BHk', '3BHk'];

    const navigate = useNavigate();


    const [Flat, setFlat] = useState({
        "floorNo": "",
        "flatNo": "",
        "fullEmptyStatus": "",
        "fullEmptyStatusOfTenant" : "",
        "flatType": ""
    })

    useEffect(() => { getBuildingList() }, [])

    const onTextChange = (event) => {
        var copyOfFlat = { ...Flat }
        copyOfFlat[event.target.name] = event.target.value;
        copyOfFlat.fullEmptyStatus = false;
        copyOfFlat.fullEmptyStatusOfTenant = false;
        setFlat(copyOfFlat);
        console.log(Flat);

    }

    const onOptionChange = (event) => {
        debugger;
        setBuildingId(event.target.value);

    }
    const onOptionChangeFlat = (event) => {
        debugger;
        var copyOfFlat = { ...Flat }
        copyOfFlat.flatType = event.target.value;
        setFlat(copyOfFlat);

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

        helper.open("GET", "http://localhost:7078/builder/buildinglist/" + builderId);
        helper.send();
    }
    const Validation = () =>{
        if(Flat.floorNo.length == ""){
            toast.warn("Floor No Can Not Be Empty")
        }
        if(Flat.flatNo.length == ""){
            toast.warn("Flat No Can Not Be Empty")
        }
        if(Flat.flatType.length == ""){
            toast.warn("Flat Type Can Not Be Empty")
        }
    }
    const AddFlat = () => {
        Validation();
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log(responseReceived);
                setFlat(responseReceived);
                console.log(Flat);
                navigate("/BUILDER")
            }
        };

        helper.open("POST", "http://localhost:7078/builder/addFlat/" + buildingId);
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(Flat));
    }

    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Add Flat</legend></center>



                    <div className="form-group">
                        <label>Floor No</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Floor Number" name="floorNo" onChange={onTextChange} />
                    </div>
                    <div className="form-group">
                        <label>Flat No</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Flat Number" name="flatNo" onChange={onTextChange} />
                    </div>

                    <div className="form-group">
                        <select onChange={onOptionChangeFlat} className='inputBox'>
                            <option>Select Flat Type</option>
                            {TypeList.map((option,item) => {
                                return <option key={item.id}>
                                    {option}
                                </option>
                            })}
                        </select>
                    </div>
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
                    <center>
                        <button type="button" className="btn btn-primary" onClick={AddFlat} >Add Flat</button>
                    </center>
                </form>
            </div>
        </div>
    </>);


}

export default AddFlat;