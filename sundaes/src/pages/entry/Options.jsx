import axios from "axios";
import {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

const Options = ({optionType}) => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

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

    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ))

    return <div>{optionItems}</div>
}

export default Options;
