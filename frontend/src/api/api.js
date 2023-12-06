const base_url = 'http://localhost:3000'

export const getOrders = async () => {
    const response = await fetch(base_url + '/order/get_all', {
        method: 'GET',
    })
    return response
}

export const getWorkers = async () => {
    const response = await fetch(base_url + '/worker/get_all', {
        method: 'GET',
    })
    return response
}

export const getOrderById = async (order) => {
    if (!order) {
        return null
    }

    const response = await fetch(base_url + '/order/get/' + order)
    return response
}

export const getReviews = async () => {
    const response = await fetch(base_url + '/review/get_all', {
        method: 'GET',
    })

    return response
}

export const getDevices = async () => {
    const response = await fetch(base_url + '/device/get_all', {
        method: 'GET',
    })

    return response;
}

export const createOrder = async (order) => {
    const response = await fetch(base_url + '/order/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
}

export const createWorker = async (worker) => {
    const response = await fetch(base_url + '/worker/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(worker)
    })

    return response;
}

export const deleteDevice = async (deviceId) => {
    const response = await fetch(base_url + '/device/delete/' + deviceId, {
        method: 'DELETE',
    })

    return response
}
