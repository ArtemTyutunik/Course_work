import {Route, Routes} from "react-router-dom";
import Orders from "./components/Orders/Orders.jsx";
import useAllData from "./utils/useAllData.js";
import Item from "./components/Orders/OrderItem.jsx";
import Workers from "./components/workers/Workers.jsx";
import {getOrderById} from "./api/api.js";
import Reviews from "./components/Reviews/Reviews.jsx";
import Devices from "./components/Devices/Devices.jsx";
import OrderForm from "./components/Orders/createOrder.jsx";
import WorkerForm from "./components/workers/CreateWorkerFrom.jsx";

const Routing = () => {
    const data = useAllData()

    if (!data) {
        return <>Loading...</>
    }

    return (
        <Routes>
            <Route path="/orders" element={<Orders items={data.orders}/>} />
            <Route path="/orders/:id" element={<Item getItem={getOrderById}/>} />
            <Route path="/workers" element={<Workers items={data.workers}/>} />
            <Route path="/Reviews" element={<Reviews items={data.reviews}/>} />
            <Route path="/Devices" element={<Devices items={data.devices}/>} />
            <Route path="/create-order" element={<OrderForm items={data.orders}/>} />
            <Route path="/create_worker" element={<WorkerForm/>} />
        </Routes>
    )
}

export default Routing;
