import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Chinese from "./Restaurant/Chinese";
import Fast from "./Restaurant/Fast";
import Japanese from "./Restaurant/Japanese";
import Korean from "./Restaurant/Korean";
import Western from "./Restaurant/Western";
import { ScrollView } from "react-native-gesture-handler";

const Tab = createMaterialTopTabNavigator();

function Restaurant() {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "grey",
                // indicatorStyle: {
                //     borderBottomColor: "red",
                //     borderBottomWidth: 2,
                //     borderColor: "red",
                // },
                // labelStyle: {
                //     fontSize: 10,
                // },
            })}
        >
            <Tab.Screen name="한식" component={Korean} />
            <Tab.Screen name="중식" component={Chinese} />
            <Tab.Screen name="일식" component={Japanese} />
            <Tab.Screen name="양식" component={Western} />
            <Tab.Screen name="패스트푸드" component={Fast} />
        </Tab.Navigator>
    );
}

export default Restaurant;

// export default function () {
//     return (
//         <NavigationContainer>
//             <Restaurant />
//         </NavigationContainer>
//     );
// }
