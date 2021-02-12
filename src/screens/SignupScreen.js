import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {Context} from '../context/AuthContext'
 
const SignupScreen = ({navigation}) => {
  const {state, Signup} = useContext(Context);
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');

    return (
    <View style={{marginTop : 60}}>
            <Text style={{marginBottom: 50, marginTop : 20,textAlign : "center", fontWeight : "bold"}}
            
             h3>Signup for Tracker</Text>

    <Input  
    label='Email'  
     value={email}  
     
    onChangeText={(e) => setEmail(e)}
    autoCapitalize='none'
    autoCorrect={false}/>

        <Input  
        label='Password' 
        secureTextEntry
         value={password}  
         onChangeText = {(e) => setPassword(e)}
         autoCapitalize='none'
         autoCorrect={false}
         />

         {state.errorMessage ? <Text style={{color : 'red', marginBottom : 20}}>{state.errorMessage}</Text> : null }

        <Button  title='Sign Up' onPress={() => Signup({email,password})}/>
         
    </View>
    );
  
         
    
}

SignupScreen.navigationOptions = () => {
    return {
      headerMode: 'none'
    }
  }
const styles = StyleSheet.create({

});

export default SignupScreen;