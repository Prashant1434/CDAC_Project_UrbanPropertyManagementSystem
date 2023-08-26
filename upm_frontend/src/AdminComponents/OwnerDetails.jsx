import { useEffect, useState } from "react";

function OwnerDetails() {

    const [Owner, setOwner] = useState([]);

    useEffect(() => { getOwnerList() }, []);
    const getOwnerList = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                setOwner(responseReceived);
                console.log("responseReceived : " + responseReceived);
            }
        }
        helper.open("GET", "http://localhost:7078/admin/ownerlist/" + sessionStorage.getItem("UserId"));
        helper.send();
    }
    return (<>
        <div class="container">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>EmailId </th>
                            <th>Contact </th>
                            <th>Address </th>
                            <th>Role </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Owner.map((owner) => {
                                return <tr>
                                    <td>{owner.name}</td>
                                    <td>{owner.emailId}</td>
                                    <td>{owner.contact}</td>
                                    <td>{owner.permanentAddress}</td>
                                    <td>{owner.role}</td>
                                </tr>
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>


    </>);
}

export default OwnerDetails;