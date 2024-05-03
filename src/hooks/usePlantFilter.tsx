import { useState, ChangeEvent } from 'react';
import { IPlant } from '../interfaces/plant.interface';

export function usePlantFilter(initialItems: IPlant[]) {
    const [filter, setFilter] = useState<string>('');

    function filterItems({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
        setFilter(value);
    }

    const filteredItems = initialItems.filter(
        (item: IPlant) =>
            item.name.toLowerCase().includes(filter.toLowerCase()) ||
            item.binomialName.toLowerCase().includes(filter.toLowerCase())
    );

    return { filterItems, filteredItems };
}
