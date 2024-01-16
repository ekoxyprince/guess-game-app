import {View,Text} from 'react-native'
import styles from '../styles/title.style'


function Title({children}){
    return <View>
        <Text style={styles.title}>{children}</Text>
       </View>
}

export default Title