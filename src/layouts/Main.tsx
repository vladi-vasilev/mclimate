import { Container, Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <Box height="100vh" width="100vw" bgColor="gray.50">
      <Container as="main" centerContent height="100%" maxWidth="6xl" paddingY="12" >
        <Outlet />
      </Container>
    </Box>
  )
}

export default Main