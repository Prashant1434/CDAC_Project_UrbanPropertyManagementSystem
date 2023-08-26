import { useEffect, useState } from "react";

function AdminDetails() {

    const [Admin, setAdmin] = useState([]);

    useEffect(() => { getOwnerList() }, []);
    const getOwnerList = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                setAdmin(responseReceived);
                console.log("responseReceived : " + responseReceived.emailId);
            }
        }
        helper.open("GET", "http://localhost:7078/builder/adminlist/" +sessionStorage.getItem("UserId"));
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
                            Admin.map((admin) => {
                                return <tr>
                                    <td>{admin.name}</td>
                                    <td>{admin.emailId}</td>
                                    <td>{admin.contact}</td>
                                    <td>{admin.permanentAddress}</td>
                                    <td>{admin.role}</td>
                                </tr>
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>


    </>);
}

export default AdminDetails;