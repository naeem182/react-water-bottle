
import './cart.css'
const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div >
                {cart.map(bottle => <div key={bottle.name}>
                    <h2>{bottle.name}</h2>

                </div>)}
            </div>
        </div>
    );
};

export default Cart;
