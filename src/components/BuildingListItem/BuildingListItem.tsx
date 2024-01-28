import { Divider, Flex, IconButton, Text } from "@chakra-ui/react"
import { AppartmentIcon, BuildingIcon, CircleIcon, ComputerChipIcon, DoorIcon, EditIcon, FloorIcon, LocationIcon, RightArrowIcon } from "../Icons/Icons"
import { BuildingType } from "../../types/BuildingTypes"
import IconLabel from "../IconLabel/IconLabel"
import { useNavigate } from "react-router-dom"

const BuildingListItem = ({ id, name, address, type, floors, offices, rooms, devices }: BuildingType): JSX.Element => {
  const navigate = useNavigate()
  
  const handleBuildingDetailsClick = (id: string) => {
    navigate(id)
  }

  const numberOfOnlineDevices = devices.filter(device => device.isOnline).length

  return (
    <Flex bgColor="white" px="4" py="6" boxShadow="md" gap="3">

      <BuildingIcon color="blue.200" height="110px" width="100px" />

      <Flex flexDirection="column" width="100%" gap="3">
        <Flex justifyContent="space-between">
          <Flex flexDirection="column" gap="3">
            <Text fontSize="20px" lineHeight="1" fontWeight="bold">{name}</Text>

            <IconLabel color="gray.500" icon={<LocationIcon />} label={`${address}, ${type}`} />
          </Flex>

          <IconButton bgColor="transparent" isRound aria-label={`Change the details for building ${name}`} icon={<EditIcon boxSize="6" />} />
        </Flex>

        <Divider />

        <Flex alignItems="flex-start" justifyContent="space-between">
          <Flex gap="3">
            <IconLabel color="gray.500" icon={<FloorIcon />} label={`Floors: ${floors.length}`} />
            <IconLabel color="gray.500" icon={<AppartmentIcon />} label={`Offices: ${offices.length}`} />
            <IconLabel color="gray.500" icon={<DoorIcon />} label={`Rooms: ${rooms.length}`} />
            <IconLabel color="gray.500" icon={<ComputerChipIcon />} label={`Devices: ${devices.length}`} />
            <IconLabel color="green.500" icon={<CircleIcon boxSize="3" />} label={`Online devices: ${numberOfOnlineDevices}`} />
          </Flex>

          <IconButton onClick={() => handleBuildingDetailsClick(id)} bgColor="transparent" isRound aria-label={`See more details for building ${name}`} icon={<RightArrowIcon boxSize="6" />} />
        </Flex>

      </Flex>
    </Flex>
  )
}

export default BuildingListItem