export const storeSocket = (socket) => {
    return {
        type: 'STORE_SOCKET',
        payload: socket
    }
};

export const storeUser = (username) => {
    return {
        type: 'STORE_USER',
        payload: username
    }
};
