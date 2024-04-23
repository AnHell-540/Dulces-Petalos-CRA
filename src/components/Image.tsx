import { ImgPlantInterface } from "../interfaces/plant.interface"



function Image({ plant, detail }: ImgPlantInterface) {
    return (
        <div className={detail ? "detail-plant-img-container" : "plant-img-container"}>
            <img src={plant.imgUrl}
                alt={'Nombre: ' + plant.name + ', nombre científico: ' + plant.binomialName}
                className="plant-img"
            />
        </div>
    )
}

export default Image