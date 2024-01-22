import { StyleSheet,Dimensions } from "react-native";
import colors from "../constants/colors";

// const deviceHeight = Dimensions.get('screen').height

export default StyleSheet.create({
    screen:{
         flex:1
    },
    rootContainer:{
     flex:1,
    //  marginTop:deviceHeight>400?90:40,
     alignItems:'center'
    },
    card:{
        padding:16,
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