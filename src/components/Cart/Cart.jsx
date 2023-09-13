
import PropTypes from 'prop-types';
import './cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log(cart)
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {cart.map(bottle => <div key={bottle.index}>
                    <img src={bottle.img}></img>
                    <button onClick={() => handleRemoveFromCart(bottle.name)}>Remove</button>
                </div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.

    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
}

export default Cart;
