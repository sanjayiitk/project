import react ,{ useState }from 'react'

import {
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet
} from 'react-native'

function App(){
  return(<SafeAreaView style={styles.container}>

    <View> 
      <View style={styles.welcome}>
    <Text > STUDENT LOGIN </Text>
    </View>
  
      <TextInput
       style={styles.input}
       placeholder="Enter Student id"
       />
    

      <TextInput
       style={styles.input}
       placeholder="Enter Password"
       secureTextEntry={true}
       />
    
      <Button
       title="login"
       color="black"
       />
       </View>
  

  </SafeAreaView>
  )
}

const styles=StyleSheet.create({

container :{
  flex : 1,
  justifyContent : 'center',
  marginHorizontal :20,
},



input : {
  height : 40,
  margin : 14,
  fontSize:15,
  borderWidth :2,
  borderRadius :10,
  padding :10,
},
welcome :{
  fontSize :60,
  fontWeight:300,
  textDecorationColor:"blue",
  justifyContent:"center",
  alignItems:"center",
  

},

})
export default App;