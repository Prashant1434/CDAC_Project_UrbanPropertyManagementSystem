import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetUtilityListOfTenant() {
    var [Utility, setUtility] = useState([]);
    useEffect(() => { getUtilityList() }, [])

    const getUtilityList = () => {
        var helper = new XMLHttpRequest()
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText)

                console.log(responseReceived)
                setUtility(responseReceived)
                console.log(Utility)
            }
        };

        helper.open("GET", "http://localhost:7078/tenant/getUtilityListOfTenant/" + sessionStorage.getItem("UserId"))
        helper.send()
    }
    return (<>
        <div class="container">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Gas Bill </th>
                            <th>Water Bill</th>
                            <th>Electricity Bill </th>
                            <th>Rent Amount</th>
                            <th>Total</th>
                            <th>Added Date</th>
                            <th>Paid Status</th>
                            <th>Paid Date </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Utility.map((utiltiy) => {
                                return <tr>
                                    <td>{utiltiy.gasBill}</td>
                                    <td>{utiltiy.waterBill}</td>
                                    <td>{utiltiy.electricityBill}</td>
                                    <td>{utiltiy.rentAmount}</td>
                                    <td>{utiltiy.waterBill + utiltiy.gasBill + utiltiy.electricityBill + utiltiy.rentAmount}</td>
                                    <td>{utiltiy.addedDate}</td>
                                    <td>{utiltiy.billStatus == false ? <Link to={`/payRent/${utiltiy.id}`}>Pay Rent</Link> : "Paid"}</td>
                                    <td>{utiltiy.rentPaidDate == null ? "---" : utiltiy.rentPaidDate}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default GetUtilityListOfTenant;