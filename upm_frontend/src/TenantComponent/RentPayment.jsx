import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log("responseReceived : " + responseReceived);
                // ReverseToBuilder();
                // navigate("/")
                setUtility(responseReceived);
            }
        }
        helper.open("GET", "http://localhost:7078/tenant/getUtilityByUtilityId/" + id);
        helper.send();

    }

    const payRent = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log("responseReceived : " + responseReceived);
                // ReverseToBuilder();
                // navigate("/")
                setUtility(responseReceived);
                window.alert("Payment Successfull !!! ");
                navigate("/getUtilityListOfTenant")
            }
        }
        helper.open("PUT", "http://localhost:7078/tenant/rentPayment/" + id);
        helper.send();

    }
    return (<>
        <div className="AddOwner">
            <div className="container registerDetails">
                <form>
                    <center><legend>Assign Utility To Flat</legend></center>

                    <div className="form-group">
                        <label>Gas Bill</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Gas Bill" name="gasBill" value={Utility.gasBill} />
                    </div>

                    <div className="form-group">
                        <label>Water Bill</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Water Bill" name="waterBill" value={Utility.waterBill} />
                    </div>

                    <div className="form-group">
                        <label>Electricity Bill</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Electricity Bill" name="electricityBill" value={Utility.electricityBill} />
                    </div>

                    <div className="form-group">
                        <label>Rent Amount</label>
                        <input type="number" className="form-control" id="" placeholder="Enter Rent Amount" name="rentAmount" value={Utility.rentAmount} />
                    </div>

                    <div className="form-group">
                        <label>Added Date</label>
                        <input type="Date" className="form-control" id="" placeholder="Enter Rent Amount" name="addedDate" value={Utility.addedDate} />
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