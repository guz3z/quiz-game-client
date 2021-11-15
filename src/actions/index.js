const storeSocket = (socket) => {
    return {
        type: 'STORE_SOCKET',
        payload: socket
    }
};

const storeUser = (user) => {
    return {
        type: 'STORE_USER',
        payload: user
    }
};
