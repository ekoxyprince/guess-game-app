import { useState } from "react"
import { View,TextInput,Alert,useWindowDimensions,KeyboardAvoidingView,ScrollView } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import startscreenstyles from "../styles/startscreenstyles"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
function StartGameScreen(props){
const {width,height} = useWindowDimensions()
  const [input,setInput] = useState('')
  function handleInput(text){
   setInput(text)
  }
  function handleSubmit(){
    const number = Number(input)
   if(number <= 0 || number > 99){
    Alert.alert('Invalid Number','Number must be greater than zero and not more than 99',[{text:'Okay',style:'destructive',onPress:handleReset}])
   }
   props.addNumber(number)
  }
  function handleReset(){
    setInput(prev=>{
      return ''
    })
  }
  return (
     <ScrollView style={startscreenstyles.screen}>
    <KeyboardAvoidingView style={startscreenstyles.screen} behavior="position">
    <View style={[startscreenstyles.rootContainer,{marginTop:height>400?90:40}]}>
      <Title>Guess My Number</Title>
    <Card>
      <InstructionText>Enter a number</InstructionText>
       <TextInput style={startscreenstyles.textInput} 
       maxLength={2} keyboardType="numeric" 
       autoCapitalize="none" value={input} onChangeText={handleInput}/>
       <View style={startscreenstyles.buttonsContainer}>
        <View style={startscreenstyles.buttonContainer}>
       <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
       </View>
       <View style={startscreenstyles.buttonContainer}>
       <PrimaryButton onPress={handleSubmit}>Confirm</PrimaryButton> 
       </View>
       </View>
    </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen