import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import image from '../images/logo.jpg'
import { BiUserCircle } from 'react-icons/bi'

function Navbar1() {
    return(
        <div>
            <Navbar style={{backgroundColor:'#e6ac00'}} expand='lg'>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={image} 
                            width="30" 
                            height="auto" 
                            className='d-inline-block align-top nav'
                            alt='tclogo'/>{''}
                            <span class='title1'>TENDER CHESS EDUCATIONAL</span>
                    </Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <h4>Welcome Back <a href='#'><BiUserCircle size={35}/></a></h4>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1