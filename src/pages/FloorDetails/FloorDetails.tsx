import { useLoaderData } from "react-router-dom"
import { BuildingType, FloorsType } from "../../types/BuildingTypes"
import { Button, Flex, Heading } from "@chakra-ui/react"
import BackButton from "../../components/BackButton/BackButton"
import AllDevicesTab from "../../components/TabSection/Tabs/AllDevicesTab/AllDevicesTab"
import ManageDevicesTab from "../../components/TabSection/Tabs/ManageDevicesTab/ManageDevicesTab"
import UserManagementTab from "../../components/TabSection/Tabs/UserManagementTab/UserManagementTab"
import TabSection from "../../components/TabSection/TabSection"
import OfficesTab from "../../components/TabSection/Tabs/OfficesTab/OfficesTab"
import { AppartmentIcon, BuildingIcon, DoorIcon, FloorIcon } from "../../components/Icons/Icons"
import IconLabel from "../../components/IconLabel/IconLabel"

const FloorDetails = () => {
    const { buildingData, floorData } = useLoaderData() as { buildingData: BuildingType, floorData: FloorsType }

    const tabNamesArr = [
        { id: "1", label: "All devices" },
        { id: "2", label: "Offices" },
        { id: "3", label: "Manage Devices" },
        { id: "4", label: "User Management" },
    ]

    const tabElementsArr = [
        { id: "1", element: <AllDevicesTab devices={buildingData.devices} /> },
        { id: "2", element: <OfficesTab /> },
        { id: "3", element: <ManageDevicesTab /> },
        { id: "4", element: <UserManagementTab /> },
    ]

    return (
        <Flex flexDirection="column" width="100%" gap="8">
            <Flex justifyContent="space-between">
                <BackButton />
                <Button colorScheme="blue" borderRadius="24">Edit floor</Button>
            </Flex>

            <Heading fontSize="24px">Floor dashboard</Heading>

            <Flex gap="4">
                <FloorIcon boxSize="100px" color="blue.300" />

                <Flex flexDirection="column">
                    <Heading color="blue.300">{floorData.name}</Heading>
                    <IconLabel color="gray.500" icon={<BuildingIcon />} label={buildingData.name} />
                    <Flex gap="3">
                        <IconLabel color="gray.500" icon={<AppartmentIcon />} label={`Offices: ${buildingData.offices.length}`} />
                        <IconLabel color="gray.500" icon={<DoorIcon />} label={`Rooms: ${buildingData.rooms.length}`} />
                    </Flex>
                </Flex>
            </Flex>

            <TabSection tabNamesArr={tabNamesArr} tabElementsArr={tabElementsArr} />
        </Flex>
    )
}

export default FloorDetails