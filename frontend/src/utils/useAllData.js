import {useEffect, useState} from "react";
import {getDevices, getOrders, getReviews, getWorkers} from "../api/api.js";
import {mapDevicesToTable, mapOrdersDataToTable, mapReviewsDataToTable, mapWorkersDataToTable} from "./index.js";

const useAllData = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        Promise.all([
            getOrders().then(res => res.json()),
            getWorkers().then(res => res.json()),
            getReviews().then(res => res.json()),
            getDevices().then(res => res.json())
        ]).then(res => {
            setData({
                orders: mapOrdersDataToTable(res[0]),
                workers: mapWorkersDataToTable(res[1]),
                reviews: mapReviewsDataToTable(res[2]),
                devices: mapDevicesToTable(res[3])
            })
        })
    }, []);

    return data

}

export default useAllData
