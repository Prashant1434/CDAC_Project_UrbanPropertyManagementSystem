import { useEffect, useState } from "react";


function Help() {

    const [superAdminList,setSuperAdminList] = useState([])

    useEffect(()=>{getListofSuperAdmin()},[])

    const getListofSuperAdmin = () => {
        debugger;
       
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                debugger;
                if (helper.readyState == 4 && helper.status == 200) {
                    var responseReceived = JSON.parse(helper.responseText);
                    setSuperAdminList(responseReceived);
                    console.log(responseReceived);
                    }
            }
            helper.open("GET", "http://localhost:7078/superadmin/superadminlist");
            helper.send();
        }

    return (
        <div class="container">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>EmailId </th>
                        <th>Contact </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        superAdminList.map((s) => {
                            return <tr>
                                <td>{s.emailId}</td>
                                <td>{s.contact}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
     );
}

export default Help;