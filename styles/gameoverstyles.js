import { StyleSheet,Dimensions } from "react-native";
import colors from "../constants/colors";

const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    rootContainer:{
        flex:1,
        marginVertical:40,
        paddingHorizontal:10,
        alignItems:"center",
        justifyContent:'center'
    },
    titleContainer:{
        width:"100%",
        alignItems:'center'
    },
    imageContainer:{
      overflow:'hidden',
      width:deviceWidth-90,
      height:deviceWidth-90,
      borderRadius:(deviceWidth-90)/2,
      borderWidth:3,
      borderColor:colors.primaryDarkest,
      marginBottom:20
    },
    imageContainerWide:{
     overflow:'hidden',
     width:150,
     height:150,
     borderRadius:75,
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