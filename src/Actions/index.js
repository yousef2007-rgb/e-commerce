export const ADD = (quantity) =>{
    return {
        type:"ADD",
        data: quantity
    };
}
export const DELETE = (index) =>{
    return {
        type:"DELETE",
        data: index
    };
}
export const CHECKOUT = () =>{
    return{
        type: 'CHECKOUT'
    }
}