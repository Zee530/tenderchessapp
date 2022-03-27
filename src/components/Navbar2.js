import { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import image from '../images/logo.jpg'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { color } from '@chakra-ui/react'

import App from '../App'

function Navbar2() {
    // const [userName, setUserName] = useState({
    //     adminName: "",
    //     contestName:""
    // })
    // const handleChange = ({ target: { name, value } }) => {
    //     setUserName (prev => ({...prev, [name]: value }))
    // }
    return(
        <div>
            {/* <App onChange={handleChange} value={userName.adminName} name='adminName'/> */}
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
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <h4>Welcome Back, {App.value}<a href='#'><BiUserCircle size={35}/></a></h4>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbar2