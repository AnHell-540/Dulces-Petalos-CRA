import { useEffect, useState } from 'react';
import { IPlant } from '../interfaces/plant.interface';
import { useSearchParams } from 'react-router-dom';

const emptyPlant = {
    id: '',
    name: '',
    binomialName: '',
    price: 0,
    imgUrl: '',
    wateringsPerWeek: 0,
    fertilizerType: '',
    heightInCm: 0,
};

export const useFetchPlantDetail = (APIUrl: string) => {
    const [plant, setPlant] = useState<IPlant>(emptyPlant);
    const [errorFetch, setErrorFetch] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [params] = useSearchParams();

    const fetchPlant = async () => {
        try {
            setLoading(true);
            const data = await fetch(APIUrl + params.get('id'));
            const json: IPlant = await data.json();
            setErrorFetch(false);
            setPlant(json);
            setLoading(false);
        } catch (e) {
            setErrorFetch(true);
            console.error('La llamada de la información de las plantas ha fallado', e);
        }
    };

    useEffect(() => {
        fetchPlant();
    }, []);

    return { plant, errorFetch, loading };
};
