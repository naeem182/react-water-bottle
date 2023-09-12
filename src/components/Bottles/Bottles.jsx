import { useEffect, useState } from "react"


const Bottles = () => {

    const [bottles, setbottles] = useState([]);
    useEffect(() => {

        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setbottles(data))


    }, [])
    return (
        <div>
            <h2>Bottles here:{bottles.length}</h2>
        </div>
    )
}

export default Bottles
