import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

const Mypage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.info_all}>
          <View style={styles.info_picture}>
            {/* <Image
              style={styles.info_profile}
              source={require("../base_info.png")}
            /> */}
            <View style={styles.radius} />
          </View>
          <View style={styles.center}>
            <View>
              <Text style={styles.info_info_name}>NAME</Text>
            </View>
            <View style={styles.info_name_email}>
              <Text>학번</Text>
              <Text> | </Text>
              <Text>이메일</Text>
            </View>
          </View>
          {/* <View style={styles.info_input}>
                            <Text>0 Following</Text>
                        </View> */}
          <View style={styles.info_info}></View>
        </View>
        <View style={styles.sub_all}>
          <View style={styles.info_all}>
            <Text style={styles.sub_info_title}>first</Text>
          </View>
          <View style={styles.info_all}>
            <Text style={styles.sub_info_title}>second</Text>
          </View>
          <View style={styles.info_all}>
            <Text style={styles.sub_info_title}>기타</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => Alert.alert("회원탈퇴 눌러짐")}
            >
              <Text>회원탈퇴</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => Alert.alert("로그아웃 눌러짐")}
            >
              <Text>로그아웃</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  info_all: {
    flex: 1,
    // height: 300,
    // flexDirection: "row"
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "blue",
  },
  info_picture: {
    flex: 1,
    // backgroundColor: "gray",
    // height: 130,
    marginTop: 50,
    marginRight: 10,
    marginLeft: 10,
    // marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  info_info: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    // marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  info_info_name: {
    fontWeight: "700",
    fontSize: 20,
    marginTop: 60,
  },
  info_profile: {
    width: 100,
    height: 100,
    borderRadius: 75,
    borderWidth: 1,
    position: "absolute",
  },
  info_name_email: {
    flexDirection: "row",
    marginTop: 20,
  },
  info_input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sub_all: {
    flex: 1,
  },
  sub_info: {
    flex: 1.2,
    borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: "blue",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  sub_info_title: {
    fontWeight: "700",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  radius: {
    width: 20,
    height: 20,
    left: 35,
    top: 35,
    borderRadius: 20,
    // position: "absoulte", 에러 발생함 이유는 모름....
    zIndex: 1,
    backgroundColor: "green",
  },
});
export default Mypage;
