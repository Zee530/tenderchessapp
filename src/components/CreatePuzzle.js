import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function createPuzzle() {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Text Question</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>FEN Code Question</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>FEN Code Solution</Form.Label>
                    <Form.Control type='text'/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Question Bank</Form.Label>
                    <Form.Select>
                        <option>Select bank</option>
                        <option>Bank 1</option>
                        <option>Bank 2</option>
                        <option>Bank 3</option>
                    </Form.Select>
                </Form.Group>
                <Button size='logger'>CREATE</Button>
            </Form>
        </>
    )
}

export default createPuzzle
