import { StyleSheet } from "react-native";
import colors from "../constants/colors";

export default StyleSheet.create({
    rootContainer:{
     flex:1,
     marginTop:100,
     alignItems:'center'
    },
    card:{
        padding:16,
        marginVertical:36,
        marginHorizontal:24,
        backgroundColor:colors.primaryDarkest,
        borderRadius:10,
        elevation:15,
        shadowColor:'black',
        shadowOffset:{width:2,height:4},
        shadowRadius:8,
        shadowOpacity:0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    instructionText:{
    color:colors.accentLight,
    fontSize:26,
    textTransform:'capitalize'
    },
    textInput:{
        height:50,
        width:50,
        textAlign:'center',
        fontSize:32,
        borderBottomColor:colors.accentLight,
        borderBottomWidth:2,
        color:colors.accentLight,
        marginVertical:8,
        fontWeight:'bold',
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1,
    }
})