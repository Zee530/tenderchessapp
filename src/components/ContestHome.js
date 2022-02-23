import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import image from '../images/chess-2730034_1920.jpg'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'
import { Link } from "react-router-dom";

function contestHome() {
    return (
        <>
        <Navbar2 />
        <Container>
            <div className="text-center p-3">
                <img src={image}
                    width='950px'
                    height='auto'
                    alt='chessboard'/>
            </div>
            <Link to='/pool'><Button className='button1' size='xxl'>Start Tournament</Button></Link> 
            <Link to='/score'><Button className='button2' size='xxl'>View Score/Rank</Button></Link> 
        </Container>
        <Outlet />
        </>
    )
}

export default contestHome