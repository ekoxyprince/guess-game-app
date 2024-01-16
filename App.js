import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, ImageBackground,SafeAreaView } from 'react-native';
import colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import bgrdImg from "./assets/images/background.png"
import {useState} from "react"
import {useFont} from 'expo-font'
export default function App() {
  const [userNumber,setUserNumber] = useState(null)
  const [gameOver,setGameOver] = useState(false)
  const [rounds,setRounds] = useState(0)
  // useFont({
  //   'open-sans':require('path/to/open-sans')
  // })

  function userNumberHandler(number){
   setUserNumber(number)
  }
  function gameOverHandler(){
    setGameOver(true)
  }
  function handleRounds(){
    setRounds(prev=>{
      return Number(prev)+1
    })
  }
  function resetGame(){
    setGameOver(false)
    setRounds(0)
    setUserNumber(null)
  }
  return (
    <LinearGradient
    colors={[colors.primaryDarkerPlus,colors.accentLight]}
    style={styles.rootScreen}>
      <ImageBackground source={bgrdImg}
      resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}
      >
      <SafeAreaView style={styles.rootScreen}>
     {gameOver?<GameOverScreen reset={resetGame} gameRounds={rounds} guess={userNumber}/>:userNumber?<GameScreen userNumber={userNumber} rounds={rounds} setGameRound={handleRounds} gameOver={gameOverHandler}/> : <StartGameScreen addNumber={userNumberHandler}/>}
    </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
 rootScreen:{
  flex:1
 },
 backgroundImage:{
  opacity:0.15
 }
});
