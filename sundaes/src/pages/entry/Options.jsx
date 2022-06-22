import axios from "axios";
import {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";
import AceEditor from "react-ace";
import {pricePerItem} from "../../constants";
import {useOrderDetails} from "../../context/OrderDetails";

const Options = ({optionType}) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [orderDetails, updateItemCount] = useOrderDetails();

    if(error) {
        return <AlertBanner />
    }

    useEffect(() => {
        axios.get(`http://localhost:3030/${optionType}`)
            .then(response => {
                console.log(' --- response---- ', response);
                return setItems(response.data)
            })
            .catch(error => {
                setError(true);
            })
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            updateItemCount={(itemName, newItemCount) => {updateItemCount(itemName, newItemCount, optionType)}}
        />
    ))

    return (
        <>
            <h2>{title}</h2>
            <p>{pricePerItem[optionType]} each</p>
            <p>{title} total: {orderDetails.totals[optionType]}</p>
            <Row>{optionItems}</Row>
        </>
    )
}

export default Options;
