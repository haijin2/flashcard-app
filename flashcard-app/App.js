import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react"
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity 
} from "react-native"



export default function SignIn1() {
  //declaration
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
 

  const handleLogin = () => {
    //admin thingzzzzz 8-))
    const user1 = "vhilly";
    const pass1 = "pogi";

    if (username === user1 && password === pass1) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <View style={styles.SignInUI}>
      <View style={styles.LoginUI}>
        <Text style={styles.SignIn}>Sign In</Text>

        <View style={styles.Component1}>
          <TextInput
            style={styles.Username1}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholderTextColor="rgba(0,0,0,0.45)"
          />
        </View>

        <View style={styles.Component1}>
          <TextInput
            style={styles.Password1}
            placeholder="Password"
            value={password}
            placeholderTextColor="rgba(0,0,0,0.45)"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

      {username === '' || password === '' ? (
        <TouchableOpacity disabled style={styles.LoginButton} onPress={handleLogin}>
          <Text style={styles.LogIn}>Log In</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
          <Text style={styles.LogIn}>Log In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

//stylesheet
const styles = StyleSheet.create({
SignInUI: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  width: '100%',
  height: 500,
  padding: 10,
  borderWidth: 2, 
  borderColor: "rgba(0,0,0,0.71)",
  margin: 25,
  },
  //LOGIN UI
  LoginUI: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "80%",
    boxSizing: "border-box",
    
  },
  //font
  SignIn: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "21px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  // username/password componejnt
  Component1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },

  Username1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 49,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.45)",
    boxSizing: "border-box",
    marginVertical: 10,
  },
  //font
  Username: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "21px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  Password1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 49,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.45)",
    boxSizing: "border-box",
    marginVertical: 10, 

  },
  //font
  Password: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "21px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
  //style for login buttom
  LoginButton: {
    width: "25%",
    alignItems: "center",
    height: 45,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    boxSizing: "border-box",
    backgroundColor: "rgba(217,217,217,1)",
    
  },
  //font
  LogIn: {
    color: "rgba(0,0,0,1)",
    fontSize: "21px",
    lineHeight: "21px",
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
  },
})

