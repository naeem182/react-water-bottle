import { useEffect, useState } from "react"
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setbottles] = useState([]);
    useEffect(() => {

        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setbottles(data))


    }, [])

    const handleAddToCart = bottle => {
        console.log('bottle going to be added')
    }

    return (
        <div>
            <h2>Bottles here:{bottles.length}</h2>
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
