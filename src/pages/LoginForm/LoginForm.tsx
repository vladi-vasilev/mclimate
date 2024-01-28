import { Flex, Heading, FormControl, FormLabel, Text, Input, Button } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { useNavigate, useFetcher } from "react-router-dom"
import { saveUserAuth } from "../../redux/Slices/userAuthSlice"
import { useEffect } from "react"
import { navigateRoutes } from "../../constants/constants"

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting"
  

  useEffect(() => {
    if (!fetcher.data) return

    if (!fetcher.data?.isError) {
      dispatch(saveUserAuth(fetcher.data.data))

      navigate(navigateRoutes.buildings)
    }
  }, [JSON.stringify(fetcher)])


  return (
    <Flex width="480px" flexDirection="column" gap="8" bgColor="white" boxShadow="lg" px="6" py="8">

      <Heading>Login</Heading>

      <Flex as={fetcher.Form} method="post" gap="8" flexDirection="column">
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input autoComplete="current-email" type="email" name="email" required />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input autoComplete="current-password" type="password" name="password" required />
        </FormControl>

        {!!fetcher.data?.error && <Text color="red.500">{fetcher.data.error}</Text>}
        
        <Button colorScheme="blue" type="submit" disabled={isSubmitting}>Login</Button>
      </Flex>
    </Flex>
  )
}

export default LoginForm