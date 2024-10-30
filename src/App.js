import './App.css';
import Login from './Login';
import CustomNavbar from './CustomNavbar';
import SafeEntrance from './SafeEntrance';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid style={{backgroundColor:"#f4f7ff"}}>
      <SafeEntrance/>
      <CustomNavbar/>
      <Login/>
      <Footer/>
      </Container>
  );
}

export default App;



/*

1. Links lead nowhere
2. Mistakes in design, 
3. No 2 factors-Authentication. (espacially when it is a goverment site)
4. Weird IP
5. Urgent Language

*/