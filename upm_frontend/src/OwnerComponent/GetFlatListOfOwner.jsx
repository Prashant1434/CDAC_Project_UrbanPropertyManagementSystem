import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GetFlatListOfOwner() {
    var [Flat, setFlat] = useState([]);
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

        helper.open("GET", "http://localhost:7078/owner/flatlist/" + sessionStorage.getItem("UserId"))
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);

        helper.setRequestHeader("Content-Type", "application/json");
        helper.send()
    }
    return (<>
        <div class="container">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID </th>
                            <th>Floor No </th>
                            <th>Flat No </th>
                            <th>Owner Status </th>
                            <th>Tenant Status </th>
                            <th>Flat Type </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Flat.map((f) => {
                                return <tr>
                                    <td>{f.flatId}</td>
                                    <td>{f.floorNo}</td>
                                    <td>{f.flatNo == null ? "-" : f.flatNo}</td>
                                    <td>{f.fullEmptyStatus == true ? "full" : "empty"}</td>
                                    <td>{f.fullEmptyStatusOfTenant == true ? "full" : "empty"}</td>
                                    <td>{f.flatType}</td>
                                    <td>{f.fullEmptyStatusOfTenant == true ? "---" : <Link to={`/assigntenanttoflat/${f.flatId}/${f.flatNo}`}>Assign Tenant</Link>}</td>
                                    <td>{f.fullEmptyStatusOfTenant == false ? "---" : <Link to={`/viewtenantprofile/${f.flatId}`}>View Tenant</Link>}</td>
                                    <td> <Link to={`/getUtilityList/${f.flatId}`}>View Utilities</Link> </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default GetFlatListOfOwner;