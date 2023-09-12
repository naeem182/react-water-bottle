import { useEffect, useState } from "react"
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { AddToLocalStorage, getStoredCard } from "../../utilities/Utility";

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
        console.log('called', bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCard()
            console.log(storedCart)
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
            <h2>Bottles Available:{bottles.length}</h2>
            <h4>cart:{cart.length}</h4>
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
