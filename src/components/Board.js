import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'
import { Chess } from 'chess.js'

import Chessboard from 'chessboardjsx'

function board(){
    // var board1 = ChessBoard('myBoard')
    // const styler = {
    //     backgroundColor: 'grey',
    //     size: 'xl'
    // }
    // var board = Chessboard('myBoard')
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
                                    <Chessboard position='start'/>
                                    <Row>
                                        <Col/>
                                        <Col md={10}><Button size='logger' className='mt-4'>SUBMIT</Button></Col>     
                                        <Col/>
                                    </Row> 
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