import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    containerOuter:{
        borderRadius:20,
        margin:2,
        overflow:'hidden'
    },
    containerInner:{
    backgroundColor:colors.primaryDark,
    paddingVertical:8,
    paddingHorizontal:16,
    elevation:16,
    shadowOffset:{width:16,height:16},
    shadowRadius:8,
    shadowOpacity:0.5,
    shadowColor:'black',

    },
    text:{
     color:'white',
     textAlign:'center'
    },
    pressedItem:{
        opacity:0.8,
    }
})