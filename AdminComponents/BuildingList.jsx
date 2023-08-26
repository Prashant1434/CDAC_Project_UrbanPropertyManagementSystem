import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BuildingList() {
    const [Building, setBuilding] = useState([]);
    var adminId = sessionStorage.getItem("UserId");
    useEffect(() => { getBuildingList() }, [])

    const getBuildingList = () => {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger;
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                // console.log(responseReceived);
                setBuilding(responseReceived);
                console.log(Building);
            }
        };

        helper.open("GET", "http://localhost:7078/admin/buildinglist/" + adminId);
        helper.send();
    }
    return (<>


        <div class="container">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Made Year</th>
                            <th>Floor Count</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Building.map((b) => {
                                return <tr>
                                    <td>{b.name}</td>
                                    <td>{b.address}</td>
                                    <td>{b.phone}</td>
                                    <td>{b.madeYear}</td>
                                    <td>{b.floorCount}</td>
                                    <td>
                                        <Link to={`/getflatlist/${b.id}`}>View Flats</Link>
                                    </td>

                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>


    </>);
}

export default BuildingList;