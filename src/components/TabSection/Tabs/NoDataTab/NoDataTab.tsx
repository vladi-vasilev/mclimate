import { Image, Text } from "@chakra-ui/react"

type Props = {
    imgSrc: string,
    label: string
}

const NoDataTab = ({imgSrc, label}: Props) => {
    return (
        <>
            <Image src={imgSrc} boxSize="100px" alt="" />
            <Text>{label}</Text>
        </>
    )
}

export default NoDataTab