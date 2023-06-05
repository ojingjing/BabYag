import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, View, Text, Button } from "react-native";
import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import RestNav from "./RestNav";

const Map = () => {
    return (
        // <View style={styles.screen}>
        <View style={styles.MainSpace}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 35.1377,
                    longitude: 129.1005,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    coordinate={{
                        latitude: 35.1377,
                        longitude: 129.1005,
                    }}
                    pinColor="#2D63E2"
                    title="경성대부경대역"
                    description="지하철역"
                    pinColor={"green"}
                />
            </MapView>
            <NavigationContainer independent={true}>
                <RestNav />
            </NavigationContainer>
        </View>

        // {/* 메인공간 */}
        // {/* </View> */}
    );
};

export default Map;

const styles = StyleSheet.create({
    MainSpace: {
        flex: 1,
        backgroundColor: "pink",
    },
    map: {
        width: "100%",
        height: "55%",
    },
});
