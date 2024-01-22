import {View,Text,Platform} from 'react-native'
import styles from '../styles/title'


function Title({children}){
    return <View>
        <Text style={styles.title}>{children}</Text>
       </View>
}

export default Title