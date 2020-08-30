

export const todoReducer = (state = [], {type, payload}) => {
    switch (type) {
        case 'Add':
            return [...state, payload];    
        default:
            return state;
    }
}
