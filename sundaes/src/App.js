import logo from './logo.svg';
import './App.css';
import Container from "react-bootstrap/Container"
import OrderEntry from "./pages/entry/OrderEntry";
import {OrderDetailsProvider} from "./context/OrderDetails";
import SummaryForm from "./pages/summary/summaryForm";

function App() {
  return (
    <Container>
        <OrderDetailsProvider>
            <OrderEntry />
            <SummaryForm/>
        </OrderDetailsProvider>
    </Container>
  );
}

export default App;
