import { Card } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'

function viewScore() {
    return (
        <>
        <Navbar2 />
            <Row>
                <Col></Col>
                <Col md={9}>                
                    <Card>
                        <Card.Header style={{backgroundColor:'#e6ac00'}}><h3 className='text-center'>VIEW SCORE</h3></Card.Header>
                        <Card.Body>
                            <Table striped bordered hover className='text-center'>
                                <thead>
                                    <tr>
                                        <th>POOL</th>
                                        <th>SCORE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>tbd...</td>
                                        <td>tbd...</td>
                                    </tr>
                                    <tr>
                                        <td>tbd...</td>
                                        <td>tbd...</td>
                                    </tr>
                                    <tr>
                                        <td>tbd...</td>
                                        <td>tbd...</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
            <Outlet />
        </>
    )
}

export default viewScore