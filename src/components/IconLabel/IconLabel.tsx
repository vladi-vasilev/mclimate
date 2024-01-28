import { Flex, FlexProps, Text } from "@chakra-ui/react"

type Props = { icon: React.ReactElement, label: string } & FlexProps

const IconLabel = ({ icon, label, ...rest }: Props) => {
    return (
        <Flex gap="2px" alignItems="center" {...rest}>
            {icon}<Text>{label}</Text>
        </Flex>
    )
}

export default IconLabel