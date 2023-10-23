const initialState = 'uz'

const localeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCALE':
            return action.lang;
        default:
            return state;
    }
};

export default localeReducer;