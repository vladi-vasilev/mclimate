import { Button, Flex, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { FloorsType } from "../../../../types/BuildingTypes"
import addFloorImg from "../../../../assets/add-a-floor.png"
import NoDataTab from "../NoDataTab/NoDataTab"
import CreateButton from "../../../CreateButton/CreateButton"

type Props = { floors: FloorsType[] }

const FloorsTab = ({ floors }: Props) => {
    const navigate = useNavigate()

    const handleFloorDetailsClick = (id: string) => {
        navigate(`floors/${id}`)
    }

    return (
        <Flex boxShadow="md" flexGrow="1" flexDirection="column" padding="4" gap="6">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading fontSize="16px">{`Floors (${floors.length})`}</Heading>
                <CreateButton label="Create new floor" onClickHandler={() => {}} />
            </Flex>

            {!!floors.length ? <Flex flexDirection="column" gap="6">
                {floors.map((floor: FloorsType) => <Button key={floor.id} maxWidth="200px" onClick={() => handleFloorDetailsClick((floor.id))}>{floor.name}</Button>)}
            </Flex> :
                <NoDataTab imgSrc={addFloorImg} label="There are no floors created for this building." />
            }
        </Flex>
    )
}

export default FloorsTab