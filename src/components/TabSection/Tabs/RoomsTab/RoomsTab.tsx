import { Button, Flex, Heading } from "@chakra-ui/react"
import { RoomsType } from "../../../../types/BuildingTypes"
import NoDataTab from "../NoDataTab/NoDataTab"
import addFloorImg from "../../../../assets/add-a-floor.png"
import CreateButton from "../../../CreateButton/CreateButton"

type Props = { rooms: RoomsType[] }

const RoomsTab = ({ rooms }: Props) => {
    return (
        <Flex boxShadow="md" flexGrow="1" flexDirection="column" padding="4" gap="6">
            <Flex justifyContent="space-between" alignItems="center">
                <Heading fontSize="16px">{`Rooms  (${rooms.length})`}</Heading>
                
                <CreateButton label="Create new room" onClickHandler={() => {}} />
            </Flex>

            {!!rooms.length ? <Flex flexDirection="column" gap="6">
                {rooms.map((room: RoomsType) => <Button key={room.id} maxWidth="200px">{room.name}</Button>)}
            </Flex> :
                <NoDataTab imgSrc={addFloorImg} label="There are no floors created for this building." />
            }
        </Flex>
    )
}

export default RoomsTab