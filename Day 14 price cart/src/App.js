import { Badge, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Cards } from './components/card';

import Stateless from './components/stateless';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const[value, setValue]=useState(" dark")
  
  const data = [
    {
    productImage:"https://th.bing.com/th/id/OIP.I2ZnXbGbJn7ZfcjFgVBICwHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Iphone 15 pro max",
    price:"Rs: 150000",
   
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.4ZZcNFdO8UWAXH9hIyZcTAHaEU?w=274&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Samsung Galaxy s22",
    price:"Rs: 98000",
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.yzu_DuNVskMsFbb98-3xSAHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Google pixel",
    price:"Rs: 45000",
  
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.3U5kL-4QPX4aoCWY-OChFQHaFe?w=222&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"One plus",
    price:"Rs: 50000",
  },
  {
    productImage:"https://th.bing.com/th?q=Redmi+Note+7+Pro+Caracteristicas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    productName:"Redmi note 12 pro",
    price:"Rs: 12000",
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.VfV3VbE0urmJQ1HImQk4oAHaFI?w=238&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Vivo v23e",
    price:"Rs: 20000",
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.AbU5vjKcjPQrptXFr5_d1AHaIg?w=169&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Sony Xperia 10",
    price:"Rs: 10000",
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.a9qDEtC967v_9-JNkYs5rAHaE8?w=263&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Samsung Galaxy s23 ultra",
    price:"Rs: 150000",
  }
];
  return (
    <div className='App'>

<div className=''>
     <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/prod.productName">
                All products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Popular item</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                New arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='template'>
      
      
    </div>
    <div className='cart-value'>
        
        <Badge bg="success">
          🛒Cart {count}
        </Badge>
        </div>
      
      <div className='card-container'>
       {data.map((prod,idx)=> <Cards
        key = {idx}
        idx = {idx}
        prod={prod}
        count={count}
        setCount={setCount}/>      
  )}
       
     </div> 
     <Stateless/> 
    
    </div>
    </div>
  );
    
  }
  


export default App;
