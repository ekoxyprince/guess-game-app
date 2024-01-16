import { View,Text } from "react-native"
import startscreenstyles from "../../styles/startscreenstyles"

const Card = ({children})=>{
    return (
   <View style={startscreenstyles.card}>
    {children}
   </View>
    )
}

export default Card