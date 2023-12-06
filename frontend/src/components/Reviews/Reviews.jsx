import ReviewsTable from "./ReviewsTable.jsx";

const Reviews = (props) => {

    if (!props.items) {
        return null
    }

    const cols = [
        {label: 'id', value: 'order_id'},
        {label: 'order', value: 'order_complete_date'},
        {label: 'customers', value: 'order_started'},
        {label: 'text', value: 'order_completed'},
        {label: 'rate', value: 'order_problem'},
    ]

    return (
        <ReviewsTable items={props.items} cols={cols} title={'Reviews'}/>
    )
}

export default Reviews;
