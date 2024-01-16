import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    container:{
        borderWidth:5,
        borderColor:colors.accentLight,
        margin:24,
        padding:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:'center'
    },
    numberText:{
        color:colors.accentLight,
        fontSize:36,
        fontWeight:'bold'
    }

})