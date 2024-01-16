import { StyleSheet } from "react-native";
import colors from "../constants/colors";


export default StyleSheet.create({
    screen:{
    flex:1,
    padding:12,
    marginTop:25
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.accentLight,
        textAlign:"center",
        borderWidth:2,
        borderColor:colors.accentLight,
        padding:12
      
    },
    container:{
        marginTop:'100',
    },
    instructionText:{
     marginBottom:20
    },
    buttonsContainer:{
      flexDirection:'row',
      gap:8
    },
    buttonContainer:{
        flex:1
    },
    roundContainer:{
        paddingVertical:20
    },
    roundText:{
        fontSize:16,
        color:colors.accentLight
    },
    roundListContainer:{
        flex:1,
    }
})