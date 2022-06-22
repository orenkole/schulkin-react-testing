import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container"
import OrderEntry from "./pages/entry/OrderEntry";
import {OrderDetailsProvider} from "./context/OrderDetails";

function App() {
  return (
    <Container>
        <OrderDetailsProvider>
            <OrderEntry />
        </OrderDetailsProvider>
    </Container>
  );
}

export default App;
