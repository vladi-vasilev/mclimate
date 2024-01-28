import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"

type Props = {
    tabNamesArr: {
        id: string,
        label: string
    }[],
    tabElementsArr: {
        id: string,
        element: JSX.Element
    }[]
}

const TabSection = ({ tabNamesArr, tabElementsArr }: Props) => {
    return (
        <Tabs variant="enclosed">
            <TabList>
                {tabNamesArr.map(tabData => <Tab key={tabData.id} _selected={{ bgColor: "white", borderColor: "gray.200", borderBottom: "none" }}>{tabData.label}</Tab>)}
            </TabList>

            <TabPanels bgColor="white" border="1px solid" borderColor="gray.200">
                {tabElementsArr.map(tabElement =>
                    <TabPanel key={tabElement.id} minHeight="300px" boxShadow="md" display="flex" pb="6">
                        {tabElement.element}
                    </TabPanel>
                )}
            </TabPanels>
        </Tabs>
    )
}

export default TabSection