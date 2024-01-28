export const routes = {
    buildings: "buildings",
    building: "building",
    create: "create",
} as const

export const navigateRoutes = {
    buildings: "/buildings",
    createBuilding: "/create/building"
    
} as const

export const LOCAL_STORAGE_KEY = "buildingsData" as const