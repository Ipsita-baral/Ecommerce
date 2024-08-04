export const addToCart = (product) => ({
    type: "ADDTOCART",
    payload: product
  });
  
  export const removeFromCart = (productId) => ({
    type: "REMOVECART",
    payload: productId
  });