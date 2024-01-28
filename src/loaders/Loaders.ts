
import { LOCAL_STORAGE_KEY } from "../constants/constants"
import { getBuildindsFromLocalStorage } from "../helpers/getBuildindsFromLocalStorage"
import { BuildingType } from "../types/BuildingTypes"

export type Params<Key extends string = string> = {
    readonly [key in Key]: string | undefined
}

export const allBuildingsLoader = (): BuildingType[] => getBuildindsFromLocalStorage(LOCAL_STORAGE_KEY)

export const buildingLoader = async ({ params }: { params: Params }): Promise<BuildingType> => {
    const { buildingId } = params

    const buildingsData = getBuildindsFromLocalStorage(LOCAL_STORAGE_KEY)
    const buildingData = buildingsData.find(building => building.id === buildingId)

    if (!buildingData) {
        throw Error("Could not find that building.")
    }

    return buildingData
}

export const floorBuildingLoader = async ({ params }: { params: Params }): Promise<any> => {
    const { buildingId, floorId } = params

    const buildingsData = getBuildindsFromLocalStorage(LOCAL_STORAGE_KEY)
    const buildingData = buildingsData.find(building => building.id === buildingId)
    
    if (!buildingData) {
        throw Error("Could not find that building.")
    }

    const floorData = buildingData?.floors.find(floor => floor.id === floorId)

    if (!floorData) {
        throw Error("Could not find that floor.")
    }

    return { buildingData, floorData  }
}
