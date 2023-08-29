import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function GetFlatList() {
    var [Flat, setFlat] = useState([]);
    var { id } = useParams()
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

        helper.open("GET", "http://localhost:7078/admin/flatlist/" + id);
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type","application/json");
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
                            <th>Status </th>
                            <th>Flat Type </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sessionStorage.getItem("Role") == "ADMIN" ?
                                Flat.map((f) => {
                                    return <tr>
                                        <td>{f.flatId}</td>
                                        <td>{f.floorNo}</td>
                                        <td>{f.flatNo == null ? "-" : f.flatNo}</td>
                                        <td>{f.fullEmptyStatus == true ? "full" : "empty"}</td>
                                        <td>{f.flatType}</td>
                                        <td>{f.fullEmptyStatus == true ? "---" : <Link to="/addowner">assign Owner </Link>}</td>
                                    </tr>
                                })



                                :
                                Flat.map((f) => {
                                    return <tr>
                                        <td>{f.flatId}</td>
                                        <td>{f.floorNo}</td>
                                        <td>{f.flatNo == null ? "-" : f.flatNo}</td>
                                        <td>{f.fullEmptyStatus == true ? "full" : "empty"}</td>
                                        <td>{f.flatType}</td>
                                        {/* <td>{f.fullEmptyStatus == true ? "---" : <Link to="/addowner">assign Owner </Link>}</td> */}
                                    </tr>
                                })

                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default GetFlatList;