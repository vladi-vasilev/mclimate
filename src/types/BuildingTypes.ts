export type FloorsType = {
    id: string,
    name: string
}
export type OfficesType = {
    id: string,
    name: string
}

export type RoomsType = {
    id: string,
    name: string
}

export type DeviceType = {
    id: string,
    name: string
    isOnline: boolean
}

export type BuildingType = {
    id: string,
    name: string,
    address: string,
    type: string,
    floors: FloorsType[],
    offices: OfficesType[],
    rooms: RoomsType[],
    devices: DeviceType[]
  }