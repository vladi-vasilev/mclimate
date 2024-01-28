import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Main from "./layouts/Main.js"
import BuildingList from "./pages/BuildingList/BuildingList.js"
import LoginForm from "./pages/LoginForm/LoginForm.js"
import { loginAction } from "./actions/actions.js"
import { allBuildingsLoader, buildingLoader, floorBuildingLoader } from "./loaders/Loaders.js"
import { routes } from "./constants/constants.js"
import BuildingDetails from "./pages/BuildingDetails/BuildingDetails.js"
import FloorDetails from "./pages/FloorDetails/FloorDetails.js"
import ProtectedRoutes from "./layouts/ProtectedRoutes.js"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route
          index
          element={<LoginForm />}
          action={loginAction}
        />

        <Route path={routes.buildings} element={<ProtectedRoutes />}>
          <Route
            index
            element={<BuildingList />}
            loader={allBuildingsLoader}
          />
          <Route
            path=":buildingId"
            element={<BuildingDetails />}
            loader={buildingLoader}
            errorElement={<p>Error getting this building</p>}
          />
          <Route
            path=":buildingId/floors/:floorId"
            element={<FloorDetails />}
            loader={floorBuildingLoader}
            errorElement={<p>Error getting this floor</p>}
          />

        </Route>

        <Route path={routes.create}>
          <Route path={routes.building} element={<p>Create building page</p>} />
        </Route>

        <Route path="*" element={<p>Custom 404 page.</p>} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
