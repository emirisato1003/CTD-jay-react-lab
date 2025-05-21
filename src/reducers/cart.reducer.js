
const initialState = {
    cart: [],
    isCartOpen: false,
    isCartSyncing: false,
    // for the sake of simplicity here, we combine cartError and cartItemError
    error: '',
};

function reducer(state, action) {
    switch (action.type) {
        case "open":
            return {
                ...state,
                isCartOpen: true,
            };
        case "close":
            return {
                ...state,
                isCartOpen: false,
            };
        default:
            return state;
    }
}

const open = { value: 'open' };
const close = { value: 'close' };

export { initialState, reducer };