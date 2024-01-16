import { View, Text,Pressable } from "react-native";
import styles from '../styles/button.styles.js'
import colors from "../../constants/colors.js";
function PrimaryButton({children,onPress}){
  return (
    <View style={styles.containerOuter}>
      <Pressable 
      style={({pressed})=>pressed?[styles.containerInner,styles.pressedItem]:styles.containerInner} 
      onPress={onPress} 
      android_ripple={{color:colors.primaryDarker}}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
    </View>
  )
}
export default PrimaryButton