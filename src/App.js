import logo from './logo.svg';
import './App.css';
import { Container, Navbar,Nav} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Navbar sticky="top" variant="dark" style={{backgroundColor:'royalblue',padding:15}}>
    <Container style={{marginLeft:15}}>
      <Navbar.Brand href="#home" >
     <b>College Search</b> 
   &emsp;&emsp;
      </Navbar.Brand>
     <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>



    </div>
  );
}


export default App;
