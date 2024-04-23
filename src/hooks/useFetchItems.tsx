import { useEffect, useState } from "react";
import { IPlant } from "../interfaces/plant.interface";


export const useFetchItems = (APIUrl: string) => {

    const [items, setItems] = useState<IPlant[]>([])
    const [errorFetch, setErrorFetch] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchPlants = async () => {
        try {
            setLoading(true)
            const data = await fetch(APIUrl)
            const json: IPlant[] = await data.json()
            setErrorFetch(false)
            setItems(json)
            setLoading(false)
        } catch (e) {
            setErrorFetch(true)
            console.log('La llamada de la información de las plantas ha fallado')
        }
    }

    useEffect(() => { fetchPlants() }, []);

    return { items, errorFetch, loading };
}