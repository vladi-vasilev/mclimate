import { postRequest } from "../utils/queries"

export const loginAction = async ({ request }: { request: Request }) => {
    const data = await request.formData()
    const { email, password } = Object.fromEntries(data)

    const baseUrl = "https://developer-api.seemelissa.com/v1"
    const clientId = "62419ac553304"
    const clientSecret = "62419ac553269"

    const postBody = {
        client_id: clientId,
        client_secret: clientSecret,
        username: email as string,
        password: password as string
        //   username: "interview@mclimate.eu",
        //   password: "interview_mclimate"
    }

    try {
        const response = await postRequest(`${baseUrl}/auth/login`, postBody)

        return { isError: false, data: response.data?.auth }
    } catch (error) {
        return { isError: true, error: "Invalid username and password combination" }
    }
}