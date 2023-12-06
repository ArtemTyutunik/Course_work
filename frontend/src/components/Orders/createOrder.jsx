import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {createOrder as sendOrder} from "../../api/api.js";

const OrderForm = () => {
    const [orderProblem, setOrderProblem] = useState('');

    const handleOrderProblemChange = (event) => {
        setOrderProblem(event.target.value);
    };

    const createOrder = () => ({
        customer_id: 26,
        order_problem: orderProblem,
        device_id: 5,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        await sendOrder(createOrder());
        setOrderProblem('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Order problem"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={orderProblem}
                onChange={handleOrderProblemChange}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                Send
            </Button>
        </form>
    );
};

export default OrderForm;
