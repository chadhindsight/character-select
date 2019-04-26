// reducer

export default (state ={}, action) => {
    switch (action.type) {
        case 'SELECT_CHARACTER':
            return action.payload
            break;

        default:
            return state
            break;
    }
}
