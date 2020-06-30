import React from "react";
import { Text, TextInput, Button } from "react-native";
import {styles} from './App';
import UserStore from './UserStore';

async function doLogin(username, password){
  console.log("posting! Username: " + username + " Password: " + password);

  try{
    let res = await fetch('/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
    });
  
    let result = await res.json();
    if (result && result.success){
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    }
    else if (result && result.success === false){
      alert(result.msg);
    }
  
  }
  catch (e) {
    console.log(e);
  }
}

export default function LoginForm() {
    
    const [usernameValue, onChangeTextUsr] = React.useState('');
    const [passValue, onChangeTextPass] = React.useState('');
    
    return (
          <>
            <Text style={styles.title}>Login</Text>
           <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder={'Username'}
            placeholderTextColor="#202020"
            onChangeText={text => onChangeTextUsr(text)}
            value={usernameValue}
           />

           <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder={'Password'}
            placeholderTextColor="#202020"
            onChangeText={text => onChangeTextPass(text)}
            value={passValue}
           />
          
          <Button onPress={() => {doLogin(usernameValue, passValue)}} title="Log In" />

        </>
    );
  }
