import { Nav } from "react-bootstrap";

const MyNavbar = ({payoff}) =>
    (
  
        <>
            <Nav className="justify-content-center" activeKey="#">
                <Nav.Item className="">
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="">
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="">
                    <Nav.Link eventKey="link-2">Browse</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1 className="text-center mb-4">{payoff}</h1>
        </>
   
)
    

export default MyNavbar;