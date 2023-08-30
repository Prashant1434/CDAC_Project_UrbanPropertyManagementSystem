import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AdminDetails() {

    const [Admin, setAdmin] = useState([]);

    useEffect(() => { getAdminList() }, []);
    const getAdminList = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                var responseReceived = JSON.parse(helper.responseText);
                setAdmin(responseReceived);
                console.log("responseReceived : " + responseReceived.emailId);
                // if(Admin.length == 0){
                //     toast.warn("No Data Available")
                    
                // }
            }
        }
        helper.open("GET", "http://localhost:7078/builder/adminlist/" +sessionStorage.getItem("UserId"));
        helper.setRequestHeader("Authorization",`Bearer ${sessionStorage.getItem("token")}`);
        helper.setRequestHeader("Content-Type","application/json");
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