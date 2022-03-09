import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'
import Chessboard from 'chessboardjsx'

function board(){
    // var board1 = ChessBoard('myBoard')
    return (
        <>
            <Navbar2 />
            <Row>
                <Col></Col>
                <Col md={9}>
                    <Card>
                        <Card.Header style={{backgroundColor:'#e6ac00'}}><h3 className='text-center'>CHESS BOARD</h3></Card.Header>
                        <Card.Body>
                            <Row>
                                <Col/>
                                <Col>
                                    <Chessboard position='3krb2/2p2p2/8/8/8/8/3PPP2/3RKNQP w - - 25 80'/> 
                                </Col>
                                <Col/>
                            </Row>                           
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <Outlet />
        </>
    )
}

export default board