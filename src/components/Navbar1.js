import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import image from '../images/logo.jpg'
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom'

function Navbar1() {
    return(
        <div>
            <Navbar style={{backgroundColor:'#e6ac00'}} expand='lg'>
                <Container>
                    <Link to='/' style={{textDecoration:'none'}}><Navbar.Brand>
                        <img src={image} 
                            width="30" 
                            height="auto" 
                            className='d-inline-block align-top nav'
                            alt='tclogo'/>{''}
                            <span class='title1'>TENDER CHESS EDUCATIONAL</span>
                    </Navbar.Brand></Link>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default Navbar1