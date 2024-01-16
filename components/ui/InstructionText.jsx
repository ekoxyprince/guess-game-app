import { Text } from "react-native"
import startscreenstyles from "../../styles/startscreenstyles"

const InstructionText = ({children,style})=>{
  return(
    <Text style={[startscreenstyles.instructionText,style]}>{children}</Text>
  )
}

export default InstructionText