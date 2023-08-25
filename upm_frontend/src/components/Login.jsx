import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../cssfiles/common.css'
import Logo from '../assets/icons/logo black line.png'
import { useNavigate } from 'react-router-dom';
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
    const option = ['BUILDER','ADMIN', 'OWNER', 'TENANT'];
    var [Role, SetRole] = useState("");
    const onOptionChange = (event) => {
        SetRole(event.target.value);
    }

    const navigate = useNavigate();
    const onTextChange = (args) => {

        var copyofCredentials = { ...Credentials };
        copyofCredentials[args.target.name] = args.target.value;
        setCredentials(copyofCredentials);
        console.log(Credentials.emailId + "   " + Credentials.password);
    }

    const SignIn = () => {
        debugger;
        if (Role == "BUILDER") {
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                debugger;
                if (helper.readyState == 4 && helper.status == 200) {
                    var responseReceived = JSON.parse(helper.responseText);
                    // setUser(responseReceived);
                    console.log(responseReceived.emailId + "  " + responseReceived.password);
                    if (responseReceived.email == Credentials.emailId && responseReceived.password == Credentials.password) {
                        navigate("/" + Role);
                        sessionStorage.setItem("UserName", responseReceived.name);
                        sessionStorage.setItem("UserId", responseReceived.builderId);
                    }

                }
            }
            console.log(Credentials.emailId + " " + Credentials.password)
            helper.open("POST", "http://localhost:7078/users/builderLogin");
            helper.setRequestHeader("Content-Type", "application/json");
            helper.send(JSON.stringify(Credentials));
        }
        else {
            var helper = new XMLHttpRequest();
            helper.onreadystatechange = () => {
                debugger;
                if (helper.readyState == 4 && helper.status == 200) {
                    var responseReceived = JSON.parse(helper.responseText);
                    // setUser(responseReceived);
                    console.log(responseReceived.emailId + "  " + responseReceived.password);
                    if (responseReceived.emailId == Credentials.emailId && responseReceived.password == Credentials.password && Role == responseReceived.role) {
                        navigate("/" + Role);
                        sessionStorage.setItem("UserName", responseReceived.name);
                        sessionStorage.setItem("UserId", responseReceived.id);
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
    );

}
export default Login;