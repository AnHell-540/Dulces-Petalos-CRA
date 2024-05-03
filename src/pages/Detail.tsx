import { useNavigate } from 'react-router-dom';
import Image from '../components/Image';
import Description from '../components/Description';
import { useFetchPlantDetail } from '../hooks';
import { URL } from '../assets/URL';

function Detail() {
    const { plant, errorFetch, loading } = useFetchPlantDetail(URL);

    const navigate = useNavigate();

    return (
        <div id='item-container-detail'>
            {!errorFetch &&
                (!loading ? (
                    <>
                        <div id='itemName-back'>
                            <h1 id='title'>{plant.name}</h1>
                            <button id='btn-back' onClick={() => navigate('/home')}>
                                &lt; Volver
                            </button>
                        </div>
                        <div id='item-detail'>
                            <Image plant={plant} detail={true}></Image>
                            <Description plant={plant}></Description>
                        </div>
                    </>
                ) : (
                    <span className='loader'></span>
                ))}

            {errorFetch && (
                <div id='error-message'>
                    <p>Ha ocurrido un error</p>
                </div>
            )}
        </div>
    );
}

export default Detail;
