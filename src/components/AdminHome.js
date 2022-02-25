import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import image from '../images/chess2.jpg'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card"

function adminHome() {
    return (
        <>
        <Navbar2 />  
        <Row>
            <Col></Col>            
            <Col md={9}>
                <Card>
                    <Card.Header style={{backgroundColor:'#e6ac00'}}><h3 className="text-center">ADMIN HOME</h3></Card.Header>
                    <Card.Body>        
                            <div className="text-center p-3">
                                <img src={image}
                                    width='950px'
                                    height='auto'
                                    alt='chessboard'/>
                            </div>
                            <Link to='/puzzle'><Button className='button1' size='xxl'>Create Puzzle</Button></Link>
                            <Link to='/view'><Button className='button2' size='xxl'>Manage Puzzle</Button></Link>
                        <Outlet />
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>      
        </>
    )
}

export default adminHome