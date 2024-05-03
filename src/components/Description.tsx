import { plantInfo } from '../interfaces/plant.interface';

export default function Description({ plant }: plantInfo) {
    return (
        <>
            <div id='detail-description'>
                <table id='table'>
                    <tbody>
                        <tr>
                            <td>Nombre científico</td>
                            <td>{plant.binomialName}</td>
                        </tr>
                        <tr>
                            <td>Precio</td>
                            <td>{plant.price}€</td>
                        </tr>
                        <tr>
                            <td>Riegos semanales</td>
                            <td>{plant.wateringsPerWeek}</td>
                        </tr>
                        <tr>
                            <td>Altura</td>
                            <td>{plant.heightInCm}cm</td>
                        </tr>
                        <tr>
                            <td>Tipo de fertilizante</td>
                            <td>
                                {plant.fertilizerType === 'nitrogen' ? 'Nitrogenado' : 'Fosforado'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
