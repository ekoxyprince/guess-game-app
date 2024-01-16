import styles from '../styles/guesslog.styles'
import {Text,View} from 'react-native';

const GuessLogItem = ({roundNum,guess})=>{
 return (
    <View style={styles.container}>
        <Text>#{roundNum}</Text>
        <Text>Opponent's Guess : {guess}</Text>
    </View>
 )
}

export default GuessLogItem