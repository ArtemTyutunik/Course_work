import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOrderById} from "../../api/api.js";

export const Record = ({data, field, label}) => {
    return (
        <li>
            <span className="">{label}</span>
            <span>{ data[field] }</span>
        </li>
    )
}

const OrderItem = (props) => {
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        props.getItem(id)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setOrder(data[0])
            })
    }, []);


    return (
        <div>
            <ul>
                {
                    Object.entries(order).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default OrderItem;
