
const initialState = {
    cart: [],
    isCartOpen: false,
    isCartSyncing: false,
    // for the sake of simplicity here, we combine cartError and cartItemError
    error: '',
};

function reducer(state, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export { initialState, reducer };