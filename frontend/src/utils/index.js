

export const mapOrdersDataToTable = (data) => {
    return data.map((item) => {
        return {
            customerId: item.customer_id,
            orderStarted: item.order_started,
            orderCompleted: item.order_completed,
            orderCompleteDate: item.order_complete_date,
            orderStartDate: item.order_start_date,
            orderProblem: item.order_problem,
            id: item.order_id,
            worker: item.worker_id
        }
    })
}

export const mapWorkersDataToTable = (data) => {
    return data.map((item) => {
        return {
            id: item.worker_id,
            email: item.worker_email,
            name: item.worker_name,
            phone: item.worker_phone_number,
            salary: item.worker_salary
        }
    })
}

export const mapReviewsDataToTable = (data) => {
    return data.map((item) => {
        return {
            id: item.review_id,
            order: item.order_id,
            customers: item.customer_id,
            text: item.text,
            rate: item.rate
        }
    })
}

export const mapDevicesToTable = (data) => {
    return data.map((item) => {
        return {
            id: item.device_id,
            model: item.device_model,
            customerId: item.customer_id,
        }
    })
}
