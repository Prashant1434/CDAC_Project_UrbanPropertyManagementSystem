import '../css/Homepage.css'
import Navbar from './Navbar';
import img1 from '../assets/building1.jpg';
function Homepage() {
    return (
        <>
            <Navbar/>
            <div >
                <img src={img1} alt='' className='img1' />
            </div>

            <div>
                <h1 className='about'>Urban Property Management</h1>
                <p1 className='para'>is a cutting-edge web application designed to streamline and simplify every aspect of property management. Whether you're a property owner, a building manager, or a tenant, Urban Property Management offers a comprehensive suite of tools and features that empower you to effortlessly manage buildings, tenants, payments, and flats in a single, user-friendly platform.</p1>
            </div>


        </>

    );
}

export default Homepage;