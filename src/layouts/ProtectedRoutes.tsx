
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { RootState } from "../redux/strore"
import { useLayoutEffect } from "react"

const ProtectedRoutes = () => {
  const navigate = useNavigate()
  const userAuthData = useSelector((state: RootState) => state.userAuth)

  useLayoutEffect(() => {
    if (userAuthData.userAuth.access_token == "") {
      navigate("/", {replace: true})
    }
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}

export default ProtectedRoutes