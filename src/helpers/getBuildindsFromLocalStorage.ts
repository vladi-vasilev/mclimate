import data from "../../data/Buildings.json"
import { BuildingType } from "../types/BuildingTypes"

export const getBuildindsFromLocalStorage = (key: string): BuildingType[] => {
    const buildingsData = localStorage.getItem(key)

    if(!!buildingsData){
        return JSON.parse(buildingsData)
    } else {
        localStorage.setItem(key, JSON.stringify(data))
        return data
    }
}