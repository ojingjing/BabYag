import { auth } from "./Firebase.js";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import SelectDropdown from "react-native-select-dropdown";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Upload = () => {
  const foodoptions = [
    "양식",
    "한식",
    "중식",
    "일식",
    "패스트푸드",
    "술집",
    "카페",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>upload</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="가게 이름" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="키워드" />
      </View>
      <View>
        <SelectDropdown
          data={foodoptions}
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
          defaultButtonText="카테고리" //선택된게 없을때의 기본텍스트
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
        <Text>Selected option</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="사진첨부" />
      </View>
      <View>
        <Text>
          평점:
          <Icon name="star" size={20} />
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input_circle}
          placeholder="한줄평"
          multiline
          numberOfLines={5}
        />
      </View>
    </SafeAreaView>
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
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    borderBottomWidth: 2, // 밑줄의 두께 설정
    borderBottomColor: "orange", // 밑줄의 색상 설정
  },
  input_circle: {
    height: 100,
    width: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "orange",
  },

  dropdown2BtnStyle: {
    width: "30%",
    height: 50,
    backgroundColor: "orange",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    //자식목록의 뒷배경
    backgroundColor: "orange",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {
    backgroundColor: "orange",
    borderBottomColor: "#C5C5C5",
  }, //자식목록 색과 선색
  dropdown2RowTxtStyle: {
    //글씨
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Upload;
