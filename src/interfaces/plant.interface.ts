export interface IPlant {
    id:               string;
    name:             string;
    binomialName:     string;
    price:            number;
    imgUrl:           string;
    wateringsPerWeek: number;
    fertilizerType:   string;
    heightInCm:       number;
}

export interface ImgPlantInterface {
    plant: IPlant,
    detail: boolean
}

export interface plantInfo {
    plant: IPlant
}

