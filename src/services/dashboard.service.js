export const dashboardService = {
    getMedicineOrders,
    getHomecareOrders,
};

function getMedicineOrders() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/orders', requestOptions).then(handleResponse);
}


function getHomecareOrders() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/homecareorders', requestOptions).then(handleResponse);
}


function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}