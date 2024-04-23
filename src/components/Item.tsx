import { useNavigate } from "react-router-dom"
import { IPlant } from "../interfaces/plant.interface"
import Image from "./Image"

interface plantInfo {
    plant: IPlant
}

function Item({ plant }: plantInfo) {

    const navigate = useNavigate()

    return (
        <>
            <div className="plant-card" onClick={() => navigate(`/home/detail?id=${plant.id}`)}>
                <Image plant={plant} detail={false} />

                <div className="plant-info-container">
                    <h3>
                        {plant.name === 'Elecho' ?
                            'Helecho' : plant.name}
                    </h3>
                    <p>{plant.binomialName}</p>
                    <p>{plant.price}€</p>
                </div>
            </div>
        </>
    )
}

export default Item