const initialState = {
  cart: []
};

const cartReducerHandle = (state = initialState , action) =>{
    switch (action.type) {
        case "ADDTOCART":
          return {
            ...state,
            cart: [...state.cart, action.payload]
          };
       
        case "REMOVECART":
          return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
          };
   
        default:
          return state;
      }
}

export default cartReducerHandle;