import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function OwnerDetails() {

    const [Owner, setOwner] = useState([]);

    useEffect(() => { getOwnerList() 
    }, []);
    const getOwnerList = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            debugger
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                setOwner(responseReceived);
                console.log("responseReceived : " + responseReceived);
                debugger
                // if(Owner.length == 0){
                //     toast.warn("No Data Available")
                // }
            }
        }
        helper.open("GET", "http://localhost:7078/admin/ownerlist/" + sessionStorage.getItem("UserId"));
        helper.setRequestHeader("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type", "application/json");
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