import DevicesTable from "./DevicesTable.jsx";
import AddButton from "../AddButton.jsx";
import {useNavigate} from "react-router-dom";

const Devices = (props) => {
    const navigate = useNavigate()
    if (!props.items) {
        return null
    }

    console.log(props)

    const cols = [
        {label: 'id', value: 'order_id'},
        {label: 'model', value: 'order_complete_date'},
        {label: 'customer id', value: 'order_started'},
    ]

    return (
        <>
            <DevicesTable items={props.items} cols={cols} title={'Devices'}/>
        </>
    )
}

export default Devices;
