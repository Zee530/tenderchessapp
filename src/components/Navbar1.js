import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import image from '../images/logo.jpg'

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
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar1