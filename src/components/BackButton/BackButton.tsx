import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { LeftArrowIcon } from "../Icons/Icons"

const BackButton = () => {
    const navigate = useNavigate()

    const handleBackClick = () => navigate(-1)

    return (
        <Button onClick={handleBackClick} colorScheme="gray" borderRadius="24" leftIcon={<LeftArrowIcon />}>Back</Button>
    )
}

export default BackButton