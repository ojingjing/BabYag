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
import StarRating from "react-native-star-rating-widget";

const Upload = () => {
    const [rating, setRating] = useState(0);
    console.log(setRating);

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
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    추천하고싶은 맛집을 등록해주세요!
                </Text>
            </View>
            <View style={styles.reviewName}>
                <Text style={styles.reviewText}>가게 이름 : </Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.reviewName}>
                <Text style={styles.reviewText}>가게 주소 : </Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.reviewType}>
                <Text style={styles.reviewText}>가게 종류 : </Text>
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
                    defaultButtonText="select option" //선택된게 없을때의 기본텍스트
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
            <View style={styles.reviewStar}>
                <Text style={styles.reviewText}>가게 평점 : </Text>
                {/* <TextInput style={styles.input} /> */}
                <StarRating
                    rating={rating}
                    onChange={setRating}
                    color={"rgb(255,169,70)"}
                />
            </View>
            <View style={styles.reviewBox}>
                <Text style={styles.reviewText}>가게 리뷰 : </Text>
                <TextInput
                    style={styles.input_circle}
                    placeholder="음식점의 한줄평을 작성해주세요."
                    multiline
                    numberOfLines={5}
                />
            </View>
            <View style={styles.registration}>
                <Text style={styles.registrationText}>등록하기</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        width: "90%",
        height: "15%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5%",
        marginRight: "5%",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
    },
    titleText: {
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    reviewName: {
        width: "90%",
        height: "10%",
        marginLeft: "5%",
        marginRight: "5%",
        // backgroundColor: "pink",
        justifyContent: "flex-start",
        paddingLeft: "5%",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    reviewText: {
        fontSize: 20,
        // fontWeight: "bold",
        letterSpacing: 1.5,
    },
    input: {
        width: "70%",
        height: "40%",
        borderBottomWidth: 2, // 밑줄의 두께 설정
        borderBottomColor: "rgb(255,229,204)", // 밑줄의 색상 설정
    },
    reviewType: {
        width: "90%",
        height: "15%",
        marginLeft: "5%",
        marginRight: "5%",
        // backgroundColor: "pink",
        justifyContent: "flex-start",
        paddingLeft: "5%",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    input_circle: {
        width: "70%",
        height: "80%",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "rgb(255,229,204)",
    },

    dropdown2BtnStyle: {
        width: "70%",
        height: "50%",
        backgroundColor: "rgb(255,169,70)",
        borderRadius: 30,
    },
    dropdown2BtnTxtStyle: {
        color: "white",
        textAlign: "center",
        // fontWeight: "bold",
        letterSpacing: 1,
    },
    dropdown2DropdownStyle: {
        //자식목록의 뒷배경
        backgroundColor: "rgb(255,169,70)",
        borderRadius: 30,
        // fontWeight: "bold",

        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
    },
    dropdown2RowStyle: {
        backgroundColor: "rgb(255,169,70)",
        borderBottomColor: "rgba(255,255,255,0.5)",
    }, //자식목록 색과 선색
    dropdown2RowTxtStyle: {
        //글씨
        color: "white",
        textAlign: "center",
        // fontWeight: "bold",
        letterSpacing: 1,
    },
    reviewStar: {
        width: "90%",
        height: "15%",
        marginLeft: "5%",
        marginRight: "5%",
        justifyContent: "flex-start",
        paddingLeft: "5%",
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    reviewBox: {
        width: "90%",
        height: "25%",
        marginLeft: "5%",
        marginRight: "5%",
        justifyContent: "flex-start",
        paddingLeft: "5%",
        paddingTop: "8%",
        // borderBottomColor: "lightgrey",
        // borderBottomWidth: 1,
        flexDirection: "row",
        // alignItems: "center",
    },
    registration: {
        width: "100%",
        height: "10%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255,169,70)",
    },
    registrationText: {
        fontSize: 25,
        fontWeight: "bold",
        letterSpacing: 1,
    },
});

export default Upload;
