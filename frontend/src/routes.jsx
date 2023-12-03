import {Route, Routes} from "react-router-dom";
import Orders from "./components/Orders/Orders.jsx";

const Routing = () => {
    return (
        <Routes>
            <Route path="/orders" element={<Orders/>} />
        </Routes>
    )
}

export default Routing;
