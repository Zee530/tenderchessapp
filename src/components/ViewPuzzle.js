import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function viewPuzzle() {
    return (
        <>
        <Row>
            <Col></Col>
            <Col md={9}>
                <Card>
                    <Card.Header style={{backgroundColor:'#e6ac00'}}><h3 className='text-center'>VIEW PUZZLE</h3></Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className='mt-5 mb-5'>
                                <Row>
                                    <Col></Col>
                                    <Col md={3}><Form.Label>Pool</Form.Label></Col>
                                    <Col md={6}><Form.Select>
                                    <option>Select Pool</option>
                                    <option>Pool 1</option>
                                    <option>Pool 2</option>
                                    <option>Pool 3</option>
                                    </Form.Select></Col>
                                    <Col></Col>
                                </Row>
                            </Form.Group>   
                            <Form.Group className='mb-5'>
                                <Row>
                                    <Col></Col>
                                    <Col md={3}><Form.Label>Puzzle Code</Form.Label></Col>
                                    <Col md={6}><Form.Select>
                                    <option>Select Puzzle</option>
                                    <option>Puzzle 1</option>
                                    <option>Puzzle 2</option>
                                    <option>Puzzle 3</option>
                                    </Form.Select></Col>
                                    <Col></Col>
                                </Row>
                            </Form.Group>                                
                                <Row>
                                    <Col><Button size='logger'>VIEW</Button></Col>
                                    <Col></Col>
                                    <Col><Button size='logger'>EDIT</Button></Col>
                                    <Col></Col>
                                </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
        </>
    )
}

export default viewPuzzle
