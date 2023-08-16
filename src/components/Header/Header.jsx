import {Container,Navbar} from 'react-bootstrap';
const Header = ()=>{
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">color_picker official</Navbar.Brand>
        </Container>
      </Navbar>
    )
}
export default Header;
