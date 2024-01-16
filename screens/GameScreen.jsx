import { View,Text,Alert,FlatList } from "react-native"
import { useState,useEffect } from "react"
import styles from "../styles/gamescreen"
import Title from "../components/ui/Title"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import {Ionicons} from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem"

function GameScreen(props){
 function generateNumberBetween(min,max,exclude){
        const rnd_num = Math.floor(Math.random()*(max-min))+min
        if(rnd_num === exclude){
            generateNumberBetween(min,max,exclude)
        }else{
            return rnd_num
        }
    }
    let minBoundary = 1
    let maxBoundary = 99
function handlenextGuess(direction){
    if((direction === 'lower'&& props.userNumber>guess)||(direction==='higher'&&props.userNumber<guess)){
        return Alert.alert("Don't lie",'You know that this is wrong',[{text:'Sorry',style:'cancel'}])
    }
    minBoundary = direction === 'higher'?parseInt(guess)-1:minBoundary
    maxBoundary = direction === 'lower'?parseInt(guess)+1:maxBoundary
    const newRndNum = generateNumberBetween(minBoundary,maxBoundary,guess)
    setGuess(newRndNum)
    setGuessRounds(prev=>[newRndNum,...prev])
    props.setGameRound()
}
    const initialGuess = generateNumberBetween(minBoundary,maxBoundary,props.userNumber)
    const [guess,setGuess] = useState(initialGuess)
    const [guessRounds,setGuessRounds] = useState([guess])
    useEffect(()=>{
        if(props.userNumber === guess){
            props.gameOver()
        }
        if(isNaN(guess)){
            const newRandomNum = generateNumberBetween(1,99,0)
            setGuess(newRandomNum)
            setGuessRounds(prev=>[newRandomNum,...prev])
        }
    },[props.userNumber,guess])
       
    return(
        <>
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handlenextGuess.bind(this,'higher')}><Ionicons name="md-add" size={20} color={'white'}/></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handlenextGuess.bind(this,'lower')}><Ionicons size={20} color={'white'} name="md-remove"/></PrimaryButton>
                    </View>
                </View>
                <View style={styles.roundContainer}>
                    <Text style={styles.roundText}>Rounds: ({props.rounds}) </Text>
                    <Text style={styles.roundText}>Last Random Number Guessed: ({guessRounds[0]}) </Text>
                </View>
            </Card>
            <View style={styles.roundListContainer}>
              <FlatList data={guessRounds} renderItem={(guessRound)=>{
                return   <GuessLogItem roundNum={(guessRounds.length)-guessRound.index} guess={guessRound.item}/>
              }} keyExtractor={(items,index)=>index} />
              </View>
        </View>
        </>
    )
}

export default GameScreen