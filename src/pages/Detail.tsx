import { useNavigate } from "react-router-dom"
import Image from "../components/Image"
import Description from "../components/Description"
import { useFetchItemDetail } from "../hooks/useFetchItemDetail"

function Detail() {

    const APIUrl = 'https://dulces-petalos.herokuapp.com/api/product/'
    const { item, errorFetch, loading } = useFetchItemDetail(APIUrl)

    const navigate = useNavigate()

    return (

        <div id="item-container-detail">
            {!errorFetch && (
                !loading ? (
                    <>
                        <div id="itemName-back">
                            <h1 id="title">{item.name}</h1>
                            <button id="btn-back" onClick={() => navigate('/home')}>&lt; Volver</button>
                        </div>
                        <div id="item-detail">
                            <Image plant={item} detail={true}></Image>
                            <Description plant={item}></Description>
                        </div>
                    </>

                ) : (
                    <span className="loader"></span>
                ))}

            {errorFetch && (
                <div id="error-message">
                    <p>Ha ocurrido un error</p>
                </div>
            )}
        </div>
    )
}

export default Detail