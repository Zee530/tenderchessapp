import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import image from '../images/chess-2730034_1920.jpg'


function Home() {
    return (
    <>
        <Container>
        <div className="text-center p-3">
            <img src={image}
                width='950px'
                height='auto'
                alt='chessboard'/>
        </div>
            <Button className='button1' size='xxl'>ADMIN <br/>LOGIN</Button>  
            <Button className='button2' size='xxl'>CONTESTANT <br/>LOGIN</Button> 
        </Container>
    </>
    )
}

export default Home