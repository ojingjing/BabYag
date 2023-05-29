import { auth } from "./Firebase.js";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  CheckBox,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/FontAwesome5";
import { RadioButton } from "react-native-paper";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";

const Signup = () => {
  const auth = getAuth();

  const Univ = [
    "문과대학",
    "사회과학대학",
    "상경대학",
    "산학혁신융합대학",
    "공과대학",
    "약학대학",
    "예술종합대학",
    "생명보건대학",
    "글로벌학부",
  ];
  const [checked, setChecked] = React.useState("여");
  const [isErr, setIsErr] = React.useState(false);
  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsErr(errorMessage);
        // ..
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>

      <TextInput
        style={styles.input}
        placeholder="Email" //hint
        keyboardType="email-address"
        autoCapitalize="none" //대소문자 여부
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput
        style={styles.input}
        placeholder="Password OK"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="NiceName" //hint
      />
      <TextInput
        style={styles.input}
        placeholder="학번" //hint
      />
      <View>
        <SelectDropdown
          data={Univ}
          buttonStyle={styles.dropdown2BtnStyle} // 부모 스타일
          buttonTextStyle={styles.dropdown2BtnTxtStyle} //부모 텍스트 스타일
          renderDropdownIcon={(isOpened) => {
            return (
              <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#FFF"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"rigth"}
          dropdownStyle={styles.dropdown2DropdownStyle} //자식을 감싸고 있는 목록 스타일
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle} //textStyle
          defaultButtonText="선택해 주세요." //선택된게 없을때의 기본텍스트
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }} //옵션 선택시 호출되는 콜백 함수 설정
          buttonTextAfterSelection={(selectedItem, index) => {
            //선택한 것을 화면에 나타낼때 바꾸어줌
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            //옵션목록에 대해 설정해줌
            return item;
          }}
        />
      </View>

      <TextInput style={styles.input} placeholder="BirthDate" />
      <View style={styles.RadioButton}>
        <View style={styles.RadioButton_girl}>
          <Text style={{ fontSize: 28 }}>여</Text>
          <RadioButton
            backgroundColor="orange"
            value="여"
            status={checked === "여" ? "checked" : "unchecked"}
            onPress={() => setChecked("여")}
          />
        </View>
        <View style={styles.RadioButton_boy}>
          <Text>남</Text>
          <RadioButton
            backgroundColor="orange"
            value="남"
            status={checked === "남" ? "checked" : "unchecked"}
            onPress={() => setChecked("남")}
          />
        </View>
      </View>
      <Button title="Singup" color="#FFA500"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 25,
    fontWeight: 800,
    marginBottom: 30,
  },
  input: {
    width: "80%",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#FFA500",
    borderRadius: 30,
    padding: 15,
    marginBottom: 10,
  },
  RadioButton: {
    flexDirection: "row",
  },
  RadioButton_girl: {
    padding: 10,
  },
  RadioButton_boy: {
    padding: 10,
  },
});

export default Signup;
