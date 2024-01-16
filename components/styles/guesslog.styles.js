
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
        padding:12,
        backgroundColor:colors.accentLight,
        elevation:3,
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3,
        shadowColor:'black',
        borderRadius:40,
        borderWidth:1,
        borderColor:colors.accentLight
    }
})