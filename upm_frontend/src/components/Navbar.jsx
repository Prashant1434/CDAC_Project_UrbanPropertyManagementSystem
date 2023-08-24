import { useNavigate } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../css/Navbar.css'
function Navbar() {

    const navigate = useNavigate();
    const Login = () => {
        navigate('/login');
    }
    return (
        <>
            <nav class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Urban Proerty Management</a>

                </div>


                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <button type="button" class="btn btn-primary login" onClick={Login} >Login</button>

                </div>
            </nav>



        </>
    );
}

export default Navbar;