import { useState, ChangeEvent } from "react"
import { IPlant } from "../interfaces/plant.interface"

export function useFilter(initialItems: any) {

    const [filter, setFilter] = useState<string>('')

    function filterItems(event: ChangeEvent<HTMLInputElement>): void {
        setFilter(event.target.value)
    }

    const filteredItems = initialItems.filter((item: IPlant) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.binomialName.toLowerCase().includes(filter.toLowerCase())
    )

    return { filterItems, filteredItems }
}