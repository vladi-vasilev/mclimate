import { Button, Flex, Heading } from "@chakra-ui/react"
import addFloorImg from "../../../../assets/add-a-floor.png"
import { DeviceType } from "../../../../types/BuildingTypes"
import NoDataTab from "../NoDataTab/NoDataTab"
import CreateButton from "../../../CreateButton/CreateButton"

type Props = { devices: DeviceType[] }

const AllDevicesTab = ({devices}: Props) => {
    return (
        <Flex boxShadow="md" flexGrow="1" flexDirection="column" padding="4" gap="6">

            <Flex justifyContent="space-between" alignItems="center">
                <Heading fontSize="16px">{`Rooms  (${devices.length})`}</Heading>
                <CreateButton label="Create new room" onClickHandler={() => {}} />
            </Flex>

            {!!devices.length ? <Flex flexDirection="column" gap="6">
                {devices.map((room: DeviceType) => <Button key={room.id} maxWidth="200px">{room.name}</Button>)}
            </Flex> :
                <NoDataTab imgSrc={addFloorImg} label="There are no floors created for this building." />
            }

        </Flex>
    )
}

export default AllDevicesTab