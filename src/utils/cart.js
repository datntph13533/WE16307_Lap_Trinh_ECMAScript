let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
    const exitsProduct = cart.find((item) => item.id === newProduct.id);
    if (!exitsProduct) {
        cart.push(newProduct);
    } else {
        exitsProduct.quantity += +newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};