import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    rootContainer:{
        flex:1,
        marginVertical:40,
        paddingHorizontal:10,
        alignItems:"center",
        justifyContent:'center'
    },
    titleContainer:{
        width:"100%"
    },
    imageContainer:{
      overflow:'hidden',
      width:380,
      height:380,
      borderRadius:190,
      borderWidth:3,
      borderColor:colors.primaryDarkest,
      marginBottom:20
    },
    image:{
       width:'100%',
       height:'100%'
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.primaryDarker,
        textAlign:'center'
    },
    summary:{
        color:colors.accentLight,
        fontSize:24,
    }
})