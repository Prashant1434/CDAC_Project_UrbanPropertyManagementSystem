import '../css/Homepage.css'
import Navbar from './Navbar';
import img1 from '../assets/building1.jpg';
import img2 from '../assets/image2.jpg';
 function Homepage() {
    return (
        <>
            <Navbar login="login" />
            <div className='container text-center'  >
                <img src={img1} alt='' className='img1' />
            </div>

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">

                    <div class="item active">
                        <img src={img1} alt="Los Angeles" style={{height:"20%",width:"30%"}}/>
                            <div class="carousel-caption">
                                <h3>Los Angeles</h3>
                                <p>LA is always so much fun!</p>
                            </div>
                    </div>

                    <div class="item">
                        <img src={img2} alt="Chicago" style={{height:"20%",width:"30%"}}/>
                            <div class="carousel-caption">
                                <h3>Chicago</h3>
                                <p>Thank you, Chicago!</p>
                            </div>
                    </div>

                    <div class="item">
                        <img src={img1} alt="New York" style={{height:"20%",width:"30%"}} />
                        <div class="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                </div>

                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
       

            <div class="jumbotron">
                <div className='container'>
                    <h1 className='about'>Urban Property Management</h1>
                    <p1 className='para'>is a cutting-edge web application designed to streamline and simplify every aspect of property management. Whether you're a property owner, a building manager, or a tenant, Urban Property Management offers a comprehensive suite of tools and features that empower you to effortlessly manage buildings, tenants, payments, and flats in a single, user-friendly platform.</p1>
                </div>
            </div>



        </>

    );
}

export default Homepage;