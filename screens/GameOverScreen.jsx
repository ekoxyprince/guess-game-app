import { View,Image,Text,useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import successImg from '../assets/images/success.jpg'
import styles from '../styles/gameoverstyles'
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen(props){
   function resetGame(){
    props.reset()
   }
   const {width,height} = useWindowDimensions()
   return(
     <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
      <Title>Game Over</Title>
      </View>
      <View style={height>420?styles.imageContainer:styles.imageContainerWide}>
      <Image style={styles.image} source={successImg}/>
      </View>
      <Text style={styles.text}>Your phone needed <Text style={styles.summary}>{props.gameRounds}</Text> rounds to guess the value <Text style={styles.summary}>{props.guess}</Text>.</Text>
      <PrimaryButton onPress={resetGame}>Reset Game</PrimaryButton>
     </View>
   )
}

export default GameOverScreen