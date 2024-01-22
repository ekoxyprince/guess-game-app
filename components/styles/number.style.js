import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/colors";

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{
        borderWidth:5,
        borderColor:colors.accentLight,
        margin:deviceWidth<350?12:24,
        padding:deviceWidth<350?12:24,
        borderRadius:8,
        alignItems:"center",
        justifyContent:'center'
    },
    numberText:{
        color:colors.accentLight,
        fontSize:deviceWidth<350?20:36,
        fontWeight:'bold'
    }

})