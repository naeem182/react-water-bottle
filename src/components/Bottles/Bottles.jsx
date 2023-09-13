import { useEffect, useState } from "react"
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { AddToLocalStorage, getStoredCard } from "../../utilities/Utility";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setbottles] = useState([]);
    /////
    const [cart, setcart] = useState([]);
    useEffect(() => {

        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setbottles(data))


    }, []);
    //
    useEffect(() => {
        // console.log('called', bottles.length);
        if (bottles.length) {
            const storedCart = getStoredCard()
            // console.log(storedCart, bottles)

            const savedCart = []
            for (const Bname of storedCart) {
                console.log(Bname)
                const bottle = bottles.map(bottle => bottle.name === Bname)
                // console.log(bottle)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setcart(savedCart)
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        // console.log(bottle)
        const newcart = [...cart, bottle]
        setcart(newcart)
        AddToLocalStorage(bottle.name)
    }

    return (
        <div>
            <h2>Bottles Available:{bottles.length - cart.length}</h2>

            {<Cart cart={cart}></Cart>}
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)

                }
            </div>
        </div>
    )
}

export default Bottles
