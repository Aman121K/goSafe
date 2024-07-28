
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../Screen/Auth/Splash";
import Signin from "../Screen/Auth/Signin";
import Signup from "../Screen/Auth/Signup";
import OtpScreen from "../Screen/Auth/OtpScreen";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default StackNavigation;