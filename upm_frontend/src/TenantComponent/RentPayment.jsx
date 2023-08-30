import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function RentPayment() {
    var { id } = useParams();
    const navigate = useNavigate();
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

    useEffect(() => { getUtility() }, [])

    const getUtility = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log("responseReceived : " + responseReceived);
                // ReverseToBuilder();
                // navigate("/")
                setUtility(responseReceived);
            }
        }
        helper.open("GET", "http://localhost:7078/tenant/getUtilityByUtilityId/" + id);
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type","application/json");
        helper.send();

    }

    const payRent = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log("responseReceived : " + responseReceived);
                // ReverseToBuilder();
                // navigate("/")
                setUtility(responseReceived);
                toast.success(responseReceived.message);
                navigate("/getUtilityListOfTenant")
            }
        }
        helper.open("PUT", "http://localhost:7078/tenant/rentPayment/" + id);
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type","application/json");
        helper.send();

    }
    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Pay Utility</legend></center>

                    <div className="form-group">
                        <label>Gas Bill</label>
                        <input type="number" className="form-control" id=""  name="gasBill" value={Utility.gasBill} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Water Bill</label>
                        <input type="number" className="form-control" id="" name="waterBill" value={Utility.waterBill} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Electricity Bill</label>
                        <input type="number" className="form-control" id="" name="electricityBill" value={Utility.electricityBill} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Rent Amount</label>
                        <input type="number" className="form-control" id="" name="rentAmount" value={Utility.rentAmount} readOnly />
                    </div>

                    <div className="form-group">
                        <label>Added Date</label>
                        <input type="Date" className="form-control" id="" name="addedDate" value={Utility.addedDate} readOnly />
                    </div>
                    <div className="form-group">
                        <label>Total</label>
                        <input type="number" className="form-control" id="" name="addedDate" value={parseFloat(Utility.waterBill) + parseFloat(Utility.gasBill) + parseFloat(Utility.electricityBill) + parseFloat(Utility.rentAmount)} readOnly />
                    </div>

                    <center>
                        <button type="button" className="btn btn-primary" onClick={payRent}>Pay</button>
                    </center>
                </form>
            </div>
        </div>
    </>);
}

export default RentPayment;