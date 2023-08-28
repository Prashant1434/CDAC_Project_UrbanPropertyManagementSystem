import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddTenant() {

    const navigate = useNavigate();

    var [flatid, setflatid] = useState('');

    var a;

    var [Flat, setFlat] = useState([]);

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
    const onOptionChange = (event) => {
        debugger;
        a = event.target.value;
        setflatid(a);

        console.log("Flat iD  : " + flatid);
    }

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
        if(a == null){
            toast.warn("Select Flat")
        }
    }

    const addTenant = () => {
       Validation();
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                //  var responseReceived = JSON.parse(helper.responseText);
                navigate("/Tenant")
            }
        }
        helper.open("POST", "http://localhost:7078/Tenant/assignFlatToTenant/" + a);
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(Tenant));

    }

    useEffect(() => { getFlatList() }, [])

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

        helper.open("GET", "http://localhost:7078/Tenant/flatlist/" + sessionStorage.getItem("UserId"))
        helper.send()
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
        <div className="AddTenant">
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
                        <select onChange={onOptionChange} className='inputBox'>
                            <option>Select Flat</option>
                            {Flat.map((item) => {
                                return <option key={item.flatId} value={item.flatId}>
                                    {item.flatNo}
                                </option>
                            })}
                        </select>
                    </div>

                    <center>
                        <button type="button" className="btn btn-primary" onClick={addTenant}>Add Tenant</button>
                    </center>
                </form>
            </div>
        </div>
    </>);

}

export default AddTenant;