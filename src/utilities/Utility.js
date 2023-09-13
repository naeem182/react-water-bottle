const getStoredCard = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return [];
}
const SaveCartToLocalStorage = (cart) => {
    const cartStrigified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStrigified)

}

const AddToLocalStorage = id => {
    const cart = getStoredCard();
    cart.push(id)
    ///save to ls
    SaveCartToLocalStorage(cart)

}
const removeFromLS = id => {
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export { AddToLocalStorage, getStoredCard, removeFromLS }