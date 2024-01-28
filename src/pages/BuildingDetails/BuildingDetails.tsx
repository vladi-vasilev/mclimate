import { useLoaderData } from "react-router-dom"
import { BuildingType } from "../../types/BuildingTypes"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import BackButton from "../../components/BackButton/BackButton"
import FloorsTab from "../../components/TabSection/Tabs/FloorsTab/FloorsTab"
import AllDevicesTab from "../../components/TabSection/Tabs/AllDevicesTab/AllDevicesTab"
import ApartmentsTab from "../../components/TabSection/Tabs/ApartmentsTab/ApartmentsTab"
import RoomsTab from "../../components/TabSection/Tabs/RoomsTab/RoomsTab"
import ManageDevicesTab from "../../components/TabSection/Tabs/ManageDevicesTab/ManageDevicesTab"
import UserManagementTab from "../../components/TabSection/Tabs/UserManagementTab/UserManagementTab"
import TabSection from "../../components/TabSection/TabSection"
import IconLabel from "../../components/IconLabel/IconLabel"
import { BuildingIcon, LocationIcon, FloorIcon, AppartmentIcon, DoorIcon, CircleIcon } from "../../components/Icons/Icons"

const BuildingDetails = () => {
    const building = useLoaderData() as BuildingType

    const tabNamesArr = [
        { id: "1", label: "All Devices" },
        { id: "2", label: "Floors" },
        { id: "3", label: "Apartments" },
        { id: "4", label: "Rooms" },
        { id: "5", label: "Manage Devices" },
        { id: "6", label: "User Management" },
    ]

    const tabElementsArr = [
        { id: "1", element: <AllDevicesTab devices={building.devices} /> },
        { id: "2", element: <FloorsTab floors={building.floors} /> },
        { id: "3", element: <ApartmentsTab /> },
        { id: "4", element: <RoomsTab rooms={building.rooms} /> },
        { id: "5", element: <ManageDevicesTab /> },
        { id: "6", element: <UserManagementTab /> },
    ]

    const numberOfOnlineDevices = building.devices.filter(device => device.isOnline).length.toString()

    return (
        <Flex flexDirection="column" width="100%" gap="8">
            <Flex justifyContent="space-between">
                <BackButton />
                <Button colorScheme="blue" borderRadius="24">Edit building</Button>
            </Flex>

            <Heading fontSize="24px">Building dashboard</Heading>

            <Flex gap="4">
                <BuildingIcon boxSize="100px" color="blue.300" />

                <Flex flexDirection="column">
                    <Heading color="blue.300">{building.name}</Heading>
                    <IconLabel color="gray.500" icon={<LocationIcon />} label={building.address} />
                    <Flex gap="3">
                        <IconLabel color="gray.500" icon={<FloorIcon />} label={`Floors: ${building.floors.length}`} />
                        <IconLabel color="gray.500" icon={<AppartmentIcon />} label={`Offices: ${building.offices.length}`} />
                        <IconLabel color="gray.500" icon={<DoorIcon />} label={`Rooms: ${building.rooms.length}`} />
                    </Flex>
                </Flex>
            </Flex>

            <Flex width="100%" gap="6">
                <Flex boxShadow="lg" width="100%" bgColor="white" padding="4" height="120px" flexDirection="column">
                    <Text>Online devices</Text>
                    <IconLabel icon={<CircleIcon color="green.500" boxSize="3" />} label={numberOfOnlineDevices} />
                </Flex>
                <Flex boxShadow="lg" width="100%" bgColor="white" padding="4" height="120px" flexDirection="column">
                    <Text>Total devices</Text>
                    <Text>{building.devices.length}</Text>
                </Flex>
            </Flex>

            <TabSection tabNamesArr={tabNamesArr} tabElementsArr={tabElementsArr} />
        </Flex>
    )
}

export default BuildingDetails