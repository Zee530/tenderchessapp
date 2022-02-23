import './App.css';
import { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import image from './images/chess-2730034_1920.jpg'
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
        <div className="text-center p-3">
            <img src={image}
                width='950px'
                height='auto'
                alt='chessboard'/>
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
