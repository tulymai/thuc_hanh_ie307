// 23520912_Từ Lý Mai_Lab 1.2: App.js với React Navigation
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Social Media Feed",
            headerStyle: {
              backgroundColor: "#1877F2",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
