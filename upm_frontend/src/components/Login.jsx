import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../cssfiles/common.css'
import Logo from '../assets/icons/logo black line.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [Credentials, setCredentials] = useState({ emailId: "", password: "" });
    // const [User, setUser] = useState(
    //     {
    //         "id": 0,
    //         "addedDate": "",
    //         "name": "",
    //         "emailId": "",
    //         "contact": "",
    //         "password": "",
    //         "permanentAddress": "",
    //         "imagePath": null,
    //         "role": ""
    //     });
    const option = ['BUILDER','ADMIN', 'OWNER', 'TENANT','SUPERADMIN'];
    var [Role, SetRole] = useState("");
    const onOptionChange = (event) => {
        debugger;
        SetRole(event.target.value);
        
    }

    const navigate = useNavigate();
    const onTextChange = (args) => {

        var copyofCredentials = { ...Credentials };
        copyofCredentials[args.target.name] = args.target.value;
        setCredentials(copyofCredentials);
        console.log(Credentials.emailId + "   " + Credentials.password);
    }

    const Validation = () =>{
        if(Credentials.emailId.length == ""){
            toast.warn("Email Can Not Be Empty")
        }
        if(Credentials.password.length == ""){
            toast.warn("Password Can Not Be Empty")
        }
    }

    const SignIn = () => {
        // debugger;
        Validation();   
        if (Role == "SUPERADMIN") {
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                // debugger;
                if (helper.readyState == 4 && helper.status == 200) {
                    var responseReceived = JSON.parse(helper.responseText);
                    console.log(responseReceived.emailId + "  " + responseReceived.password);
                    if (responseReceived.emailId == Credentials.emailId && responseReceived.password == Credentials.password) {
                        SetRole("/SUPERADMIN");
                        navigate("/SUPERADMIN");
                        toast.success("Login Successfull");
                    }
                    else{
                        toast.error("Invalid Credentials");
                    }

                }
            }
            console.log(Credentials.emailId + " " + Credentials.password)
            helper.open("POST", "http://localhost:7078/users/super_admin_login");
            helper.setRequestHeader("Content-Type", "application/json");
            helper.send(JSON.stringify(Credentials));
        }
        else {
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                // debugger;
                if (helper.readyState == 4 && helper.status == 200) {
                    var responseReceived = JSON.parse(helper.responseText);
                    // setUser(responseReceived);
                    console.log(responseReceived.emailId + "  " + responseReceived.password);
                    if (responseReceived.emailId == Credentials.emailId && responseReceived.password == Credentials.password ) {
                        navigate("/" + responseReceived.role);
                        SetRole("/"+responseReceived.role);
                        sessionStorage.setItem("Role",responseReceived.role);
                        sessionStorage.setItem("UserName", responseReceived.name);
                        sessionStorage.setItem("UserId", responseReceived.id);
                        toast.success("Login Successfull");
                    }
                    else{
                        toast.error("Invalid Credentials");
                    }

                }
            }
            console.log(Credentials.emailId + " " + Credentials.password)
            helper.open("POST", "http://localhost:7078/users/login");
            helper.setRequestHeader("Content-Type", "application/json");
            helper.send(JSON.stringify(Credentials));
        }
    }
    return (
<>
        <div className='background'>

            <center>
                <div className='registerDetails'>

                    <center>
                        <table className='table-responsive'>
                            <center>
                                <div>
                                    <img src={Logo} alt='' className='logo' />
                                </div>
                                <tr>
                                    <td>
                                        Username
                                    </td>
                                    <td>
                                        <input placeholder='Enter username' className='inputBox' type='text' onChange={onTextChange} value={Credentials.emailId} name='emailId'></input>
                                    </td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        Password
                                    </td>
                                    <td>
                                        <input placeholder='Enter password' className='inputBox' type='password' onChange={onTextChange} value={Credentials.password} name='password'></input>
                                    </td>
                                </tr>
                                <br></br>
                                <tr>
                                    <select onChange={onOptionChange} className='inputBox'>
                                        <option>Select Role</option>
                                        {option.map((option, index) => {
                                            return <option key={index}>
                                                {option}
                                            </option>
                                        })}
                                    </select>
                                </tr><br />
                                <tr>
                                    <td colSpan={2}>
                                        <button className='loginButton' onClick={SignIn}>
                                            Login
                                        </button><br /><br />
                                    </td>
                                </tr>
                            </center>
                        </table>
                    </center>
                </div>
            </center>
        </div>
        
        </>
    );

}
export default Login;