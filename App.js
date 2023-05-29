import { Button, StyleSheet, Text, View, button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./Routes";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

const myIcon = <Icon name="rocket" size={30} color="#900" />;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused //focused 현재 활성화 되어있는지 여부 boolen 으로 나타냄
              ? "home"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="home"
        component={routes[0].component}
        options={({ navigation }) => ({
          headerRight: () => (
            <Icon.Button
              name={"user"}
              solid
              size={22}
              backgroundColor="transparent"
              color="orange"
              onPress={() => navigation.navigate("login")}
            ></Icon.Button>
          ),
        })}
      />
      <Tab.Screen
        name="upload"
        component={routes[4].component}
        options={({ navigation }) => ({
          headerRight: () => (
            <Icon.Button
              name={"check"}
              solid
              size={22}
              backgroundColor="transparent"
              color="orange"
              onPress={() => navigation.navigate("login")}
            ></Icon.Button>
          ),
        })}
      />
      <Tab.Screen name="Mypage" component={routes[3].component} options={{}} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        {routes.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
