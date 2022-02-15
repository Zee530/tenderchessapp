import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import image from '../images/chess-2730034_1920.jpg'

function contestHome() {
    return (
        <>
        <Container>
            <div className="text-center p-3">
                <img src={image}
                    width='950px'
                    height='auto'
                    alt='chessboard'/>
            </div>
            <Button className='button1' size='xxl'>Start Tournament</Button>  
            <Button className='button2' size='xxl'>View Score/Rank</Button> 
        </Container>
        </>
    )
}

export default contestHome