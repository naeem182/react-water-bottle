import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle)
    const { name, img, price } = bottle;

    return (
        <div className="bottle">
            <img src={img}></img>
            <h3>Bottle:{name}</h3>
            <p>price: ${price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    )
}

export default Bottle
