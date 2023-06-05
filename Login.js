import { auth } from "./Firebase.js";
import { Button, StyleSheet, Text, View,TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';



const Login = ({navigation}) => {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async() => {
      try {
        
        await auth.createUserWithEmailAndPassword(email,password);
        alert('Success','회원가입이 완료되었습니다.',[{text:'OK',onPress:()=>navigation.navigate('Home')},
      ]);
      } catch (error) {
        alert('Error', error.message);
      }
    };

    // const handleSignup = () => {
    //   try {
    //       auth.createUserWithEmailAndPassword(email,password);
    //       alert('Success','회원가입이 완료되었습니다.',[{text:'OK',onPress:()=>navigation.navigate('Home')},
    //   ]);
    //   } catch (error) {
    //     alert('Error', error.message);
    //   }
    //   // console.log(3);
    // };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Babyag!</Text>
        <TextInput
            style={styles.input}
            value ={email}  //현재 값 설정 
            placeholder="Email"  //hint 
            onChangeText ={setEmail}  //사용자가 입력한 값 실시간으로 처리
            keyboardType="email-address" 
            autoCapitalize="none" //대소문자 여부
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        <Button title="Login" onPress={handleSignup} color='#FFA500'/>
            <View>
                <Button onPress={() =>navigation.navigate('signup')} title='Sign up' color='#FFA500'></Button>
            </View>
      </View>
    );
};

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent : 'center',
    alignItems:'center',
    backgroundColor:'white',
  },
  title:{
    fontSize:25,
    fontWeight:800,
    marginBottom :30,
  },
  input:{
    width :'80%',
    backgroundColor:'#fff',
    borderWidth:2,
    borderColor :'#FFA500',
    borderRadius:30,
    padding :15,
    marginBottom:10,
  },
});



export default Login;