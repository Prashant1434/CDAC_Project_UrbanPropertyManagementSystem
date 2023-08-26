import { useEffect, useState } from "react";

function GEtFlatList() {

    var [Flat,setFlat] = useState([])
    useEffect(()=>{getFlatList()},[])
    const getFlatList = (buildingId) => {
        var helper = new XMLHttpRequest()
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = (helper.responseText)
                console.log(responseReceived)
                setFlat(responseReceived)
                console.log(Flat)
            }
        };

        helper.open("GET", "http://localhost:7078/admin/emptyflats/" + 1)
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
                            Flat.map((f) => {
                                return <tr>
                                    <td>{f.flatId}</td>
                                    <td>{f.floorNo}</td>
                                    <td>{f.flatNo}</td>
                                    <td>{f.fullEmptyStatus}</td>
                                    <td>{f.flatType}</td>
                                </tr>
                            })


                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}

export default GEtFlatList;