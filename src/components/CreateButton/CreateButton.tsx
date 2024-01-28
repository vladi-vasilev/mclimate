import { Button, ButtonProps } from "@chakra-ui/react"
import { AddIcon } from "../Icons/Icons"

type Props = { label: string, onClickHandler: () => void } & ButtonProps

const CreateButton = ({ label, onClickHandler }: Props) => {
  return (
    <Button onClick={onClickHandler} color="white" colorScheme="blue" leftIcon={<AddIcon />} borderRadius="24">
      {label}
    </Button>
  )
}

export default CreateButton