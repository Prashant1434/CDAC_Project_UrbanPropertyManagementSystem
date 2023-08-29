import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AssignUtilityToTenant() {
    const navigate = useNavigate();

    // var [flatid, setflatid] = useState('');

    var flatid;

    var [Flat, setFlat] = useState([]);

    var TenantId;

    const [Utility, setUtility] = useState(
        {
            "gasBill": "",
            "waterBill": "",
            "electricityBill": "",
            "billStatus": "",
            "rentAmount": "",
            "addedDate": "",
            "rentPaidDate": ""
        }
    );

    const Validate = () =>{
        if(Utility.gasBill.length == ""){
            toast.warn("Gas Bill Can Not Be Empty")
        }
        if(Utility.waterBill.length == ""){
            toast.warn("Water Bill Can Not Be Empty")
        }
        if(Utility.electricityBill.length == ""){
            toast.warn("Electricity Bill Can Not Be Empty")
        }
        if(Utility.rentAmount.length == ""){
            toast.warn("Rent Amount Can Not Be Empty")
        }
        if(Utility.addedDate.length == ""){
            toast.warn("Date Can Not Be Empty")
        }
    }

    const [Tenant, setTenant] = useState([]);

    const onOptionChange = (event) => {
        debugger;
        flatid = event.target.value;
        // setflatid(a);

        console.log("Flat iD  : " + flatid);
    }

    const addUtility = () => {
        Validate();
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                //  var responseReceived = JSON.parse(helper.responseText);
                // console.log("responseReceived : " + responseReceived);
                // ReverseToBuilder();
                navigate("/OWNER")
            }
        }
        helper.open("POST", "http://localhost:7078/owner/assignUtilityToTenant/" + flatid + "/" + TenantId);
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);

        helper.setRequestHeader("Content-Type", "application/json");        helper.send(JSON.stringify(Utility));

    }

    useEffect(() => { getFlatList(); getTenantList() }, [])

    const getFlatList = () => {
        var helper = new XMLHttpRequest()
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText)

                console.log(responseReceived)
                setFlat(responseReceived)
                console.log(Flat)
            }
        };

        helper.open("GET", "http://localhost:7078/owner/flatlist/" + sessionStorage.getItem("UserId"))
        helper.send()
    }

    const getTenantList = () => {
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

        helper.open("GET", "http://localhost:7078/owner/tenantlist/" + sessionStorage.getItem("UserId"))
        helper.send()
    }

    const onTextChange = (args) => {

        var copyofUtility = { ...Utility };
        copyofUtility[args.target.name] = args.target.value;
        
        setUtility(copyofUtility);
        console.log(Utility);
    }

    const onOptionChangeTenant = (event) =>{
        debugger;
        TenantId=event.target.value;
    debugger;
    }

    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Assign Utility To Flat</legend></center>

                    <div className="form-group">
                        <label>Gas Bill</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Gas Bill" name="gasBill" onChange={onTextChange} />
                    </div>
                  
                    <div className="form-group">
                        <label>Water Bill</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Water Bill" name="waterBill" onChange={onTextChange} />
                    </div>
                  
                    <div className="form-group">
                        <label>Electricity Bill</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Electricity Bill" name="electricityBill" onChange={onTextChange} />
                    </div>

                    <div className="form-group">
                        <label>Rent Amount</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Rent Amount" name="rentAmount" onChange={onTextChange} />
                    </div>

                    <div className="form-group">
                        <label>Added Date</label>
                        <input type="Date" className="form-control" id="" placeholder="Enter Rent Amount" name="addedDate" onChange={onTextChange} />
                    </div>

                    <div className="form-group">
                        <label>Total</label>
                        <input type="number" className="form-control" id="" name="addedDate" value={parseFloat(Utility.waterBill) + parseFloat(Utility.gasBill) + parseFloat(Utility.electricityBill) + parseFloat(Utility.rentAmount)} readOnly/>
                    </div>

                    <div className="form-group">
                        <select onChange={onOptionChange} className='inputBox'>
                            <option>Select Flat</option>
                            {Flat.map((item) => {
                                return <option key={item.flatId} value={item.flatId}>
                                    {item.flatNo}
                                </option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <select onChange={onOptionChangeTenant} className='inputBox'>
                            <option>Select Tenant</option>
                            {Tenant.map((item) => {
                                return <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            })}
                        </select>
                    </div>

                    <center>
                        <button type="button" className="btn btn-primary" onClick={addUtility}>Add Utility</button>
                    </center>
                </form>
            </div>
        </div>
    </>);
}

export default AssignUtilityToTenant;