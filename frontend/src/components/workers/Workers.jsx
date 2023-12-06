import WorkerTable from "./workerTable.jsx";
import AddButton from "../AddButton.jsx";
import {useNavigate} from "react-router-dom";

const Workers = (props) => {
    const navigate = useNavigate()
    if (!props.items) {
        return null
    }

    console.log(props.items)

    const cols = [
        {label: 'id', value: 'order_id'},
        {label: 'email', value: 'order_started'},
        {label: 'name', value: 'order_complete_date'},
        {label: 'phone', value: 'order_completed'},
        {label: 'salary', value: 'order_problem'},
    ]

    return (
        <>
            <WorkerTable items={props.items} cols={cols} title='Workers'></WorkerTable>
            <AddButton item={'new worker'} onClick={() => navigate('/create_worker')}/>
        </>
    )
}

export default Workers;
