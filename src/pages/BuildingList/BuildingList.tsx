import { Flex, Heading, Text } from "@chakra-ui/react"
import BuildingListItem from "../../components/BuildingListItem/BuildingListItem"
import { BuildingType } from "../../types/BuildingTypes"
import { useLoaderData, useNavigate } from "react-router-dom"
import CreateButton from "../../components/CreateButton/CreateButton"
import { navigateRoutes } from "../../constants/constants"

const BuildingList = (): JSX.Element => {
  const buildings = useLoaderData() as BuildingType[]
  const navigate = useNavigate()

  const handleCreateNewBuildingClick = () => {
    navigate(navigateRoutes.createBuilding)
  }

  return (
    <Flex flexDirection="column" gap="8" width="100%">

      <Flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <Heading fontSize="24px" color="gray.500">{`Buildings (${buildings.length})`}</Heading>

        <CreateButton label="Create new building" onClickHandler={handleCreateNewBuildingClick} />
      </Flex>

      {!!buildings.length ? <Flex flexDirection="column" gap="8">
        {buildings.map((building: BuildingType) => <BuildingListItem key={building.id} {...building} />)}
      </Flex> : <Text>There are no created buildings.</Text>}
    </Flex>
  )
}

export default BuildingList