const reducer = (state = [], action) => {
     switch(action.type){
         case "ADD":
         return [...state,{quantity:action.data,price: 125.00,description: "Fall Limited Edition Sneakers",cost: action.data * 125.00} ];
         case "DELETE":
            return state.filter((item,index) => index != action.data);
        case "CHECKOUT":
            return []; 
        default:
        return state;
     }
}
export default reducer;