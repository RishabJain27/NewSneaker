export const login = () => {
    return {
        type: 'SIGN_IN'
    };
}; 

export const first = (nm) => {
    return{
        type: 'NAME',
        payload: nm
    };
};