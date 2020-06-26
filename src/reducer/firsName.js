const firstNameReducer = (state = '', action) => {
    switch(action.type){
        case 'NAME':
            return action.payload
        default:
            return state
    }
};

export default firstNameReducer;