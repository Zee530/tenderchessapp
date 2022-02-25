import './App.css';
import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import chess1 from './images/chess1.jpg'
import chess2 from './images/chess2.jpg'
import chess3 from './images/chess3.jpg'
import chess4 from './images/chess4.jpg'
import chess5 from './images/chess5.png'
import chess6 from './images/chess6.jpg'
import chess7 from './images/chess7.jpg'
// import LoginModal from './LoginModal'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Outlet } from 'react-router-dom'
import Navbar1 from './components/Navbar1'

function App() {
    const [adminShow, setadminShow] = useState(false);
    const [contestantShow, setcontestantShow] = useState(false)
    return (
    <>
        {/* <LoginModal /> */}
        <Navbar1 />
        <Container>
        <div id='chessSlide' class='carousel slide mt-3 mb-3' data-bs-ride='carousel'>
            <div class='carousel-indicators'>
                <button type='button' data-bs-target='#chessSlide' data-bs-slide-to='0' class='active' aria-current='true' aria-label='Slide 1'></button>
                <button type='button' data-bs-target='#chessSlide' data-bs-slide-to='1' aria-label='Slide 2'></button>
                <button type='button' data-bs-target='#chessSlide' data-bs-slide-to='2' aria-label='Slide 3'></button>
                <button type='button' data-bs-target='#chessSlide' data-bs-slide-to='3' aria-label='Slide 4'></button>
                <button type='button' data-bs-target='#chessSlide' data-bs-slide-to='4' aria-label='Slide 5'></button>
                <button type='button' data-bs-target='#chessSlide' data-bs-slide-to='5' aria-label='Slide 6'></button>
                <button type='button' data-bs-target='#chessSlide' data-bs-slide-to='6' aria-label='Slide 7'></button>
            </div>
            <div class='carousel-inner'>
                <div class='carousel-item'>
                    <img src={chess1} alt='c1' class='d-block w-100'/>
                </div>
                <div class='carousel-item'>
                    <img src={chess2} alt='c2' class='d-block w-100'/>
                </div>
                <div class='carousel-item'>
                    <img src={chess3} alt='c3' class='d-block w-100'/>
                </div>
                <div class='carousel-item active'>
                    <img src={chess4} alt='c4' class='d-block w-100'/>
                </div>
                <div class='carousel-item'>
                    <img src={chess5} alt='c5' class='d-block w-100'/>
                </div>
                <div class='carousel-item'>
                    <img src={chess6} alt='c6' class='d-block w-100'/>
                </div>
                <div class='carousel-item'>
                    <img src={chess7} alt='c7' class='d-block w-100'/>
                </div>
            </div>
            <button class='carousel-control-prev' type='button' data-bs-target='#chessSlide' data-bs-slide='prev'>
                <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                <span class='visually-hidden'>Previous</span>
            </button>
            <button class='carousel-control-next' type='button' data-bs-target='#chessSlide' data-bs-slide='next'>
                <span class='carousel-control-next-icon' aria-hidden='true'></span>
                <span class='visually-hidden'>Next</span>
            </button>
        </div>
            <Button className='button1' size='xxl' onClick={() => setadminShow(true)}>ADMIN <br/>LOGIN</Button>  
            <Button className='button2' size='xxl' onClick={() => setcontestantShow(true)}>CONTESTANT <br/>LOGIN</Button> 

            <Modal
                show={adminShow}
                onHide={() => setadminShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        ADMIN LOGIN
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password'/>
                        </Form.Group>
                        <Link to='/admin'><Button size='logger'>LOGIN</Button></Link>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal
                show={contestantShow}
                onHide={() => setcontestantShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        CONTESTANT LOGIN
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Contestant ID</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Contestant Password</Form.Label>
                            <Form.Control type='password'/>
                        </Form.Group>
                        <Link to='/contestant'><Button size='logger'>LOGIN</Button></Link>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
            <Outlet />
    </>
  );
}

export default App;