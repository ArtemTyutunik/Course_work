import TableItem from "../Table.jsx";
import AddButton from "../AddButton.jsx";
import {useNavigate} from "react-router-dom";


const Orders = (props) => {
    const navigate = useNavigate()
    if (!props.items) {
        return null
    }

    const cols = [
        {label: 'Order id', value: 'order_id'},
        {label: 'Order started', value: 'order_started'},
        {label: 'Order complete date', value: 'order_complete_date'},
        {label: 'Order completed', value: 'order_completed'},
        {label: 'Order problem', value: 'order_problem'},
        {label: 'Order start date', value: 'order_start_date'},
    ]

    return (
        <>
            <TableItem items={props.items} cols={cols} title='Orders'></TableItem>
            <AddButton item={'order'} onClick={() => navigate('/create-order')}/>
        </>

    )
}

export default Orders
