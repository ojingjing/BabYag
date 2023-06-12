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
// import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";

const Mypage = () => {
    return (
        // <ScrollView>
        <View style={styles.container}>
            <View style={styles.myInfoBox}>
                <View style={styles.userInfo_1}>
                    <Image
                        style={styles.userPic}
                        resizeMode="contain"
                        source={require("./assets/user_pic.png")}
                    />
                    <View style={styles.userNameArea}>
                        <Text style={styles.userNametxt}>사용자 이름</Text>
                        <Text style={styles.userNicktxt}>사용자 별명</Text>
                    </View>
                </View>
                <View style={styles.userInfo_2}>
                    <Text style={styles.userInfo_2_txt}>학번 : 2018541013</Text>
                    <Text style={styles.userInfo_2_txt}>단과대: 공과대학</Text>
                    <Text style={styles.userInfo_2_txt}>
                        이메일: zpffl6@ks.ac.kr
                    </Text>
                </View>
            </View>
            <View style={styles.otherInfoBox}>
                <Text style={styles.txt}>찜한 가게</Text>
                <View style={styles.blank}></View>
                <TouchableOpacity style={styles.arrowBtn}>
                    <Image
                        resizeMode="center"
                        source={require("./assets/right_arrow.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.otherInfoBox}>
                <Text style={styles.txt}>리뷰 관리</Text>
                <View style={styles.blank}></View>
                <TouchableOpacity style={styles.arrowBtn}>
                    <Image
                        // style={{resizeMode="contain"}}
                        resizeMode="center"
                        source={require("./assets/right_arrow.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.otherInfoBox}>
                <Text style={styles.txt}>로그아웃</Text>
                <View style={styles.blank}></View>
                <TouchableOpacity style={styles.arrowBtn}>
                    <Image
                        // style={{resizeMode="contain"}}
                        resizeMode="center"
                        source={require("./assets/right_arrow.png")}
                    />
                </TouchableOpacity>
            </View>
            {/* <View style={styles.info_all}>
                <View style={styles.info_picture}>
                    <Image
                        style={styles.info_profile}
                        source={require("../base_info.png")}
                    />
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
                <View style={styles.info_input}>
                    <Text>0 Following</Text>
                </View>
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
            </View> */}
        </View>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    myInfoBox: {
        width: "90%",
        height: "40%",
        // backgroundColor: "lightblue",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        marginLeft: "5%",
        marginRight: "5%",
        paddingLeft: "8%",
        paddingRight: "8%",
        paddingTop: "8%",
        alignItems: "center",
        // flexDirection: "row",
        justifyContent: "center",
    },

    userInfo_1: {
        width: "100%",
        height: "40%",
        // backgroundColor: "silver",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    userPic: {
        width: "30%",
        height: "100%",
        // borderRadius: "80%",
        // backgroundColor: "red",
    },
    userNameArea: {
        width: "55%",
        height: "100%",
        justifyContent: "flex-end",
        // backgroundColor: "green",
    },
    userNametxt: {
        height: "40%",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    userNicktxt: {
        height: "40%",
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    userInfo_2: {
        width: "80%",
        height: "50%",
        // backgroundColor: "purple",
        justifyContent: "center",
        padding: "5%",
    },
    userInfo_2_txt: {
        height: "33%",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    otherInfoBox: {
        width: "90%",
        height: "15%",
        // backgroundColor: "olive",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        marginLeft: "5%",
        marginRight: "5%",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        padding: "5%",
    },
    blank: {
        width: "45%",
        height: "100%",
        // backgroundColor: "blue",
    },
    txt: {
        width: "30%",
        // backgroundColor: "orange",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 2,
    },
    arrowBtn: {
        width: "25%",
        height: "100%",
        alignItems: "flex-end",
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
