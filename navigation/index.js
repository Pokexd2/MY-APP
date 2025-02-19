import Dashboard from "./Dashboard";
import External from "./External";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
export default function RootNavigation(){
    return (
        <Stack.Navigator initialRouteName='External'>
            <Stack.Screen
            name= 'Dashboard'
            component= {Dashboard}  
            options={{headerShown: false}}
            />

            <Stack.Screen
            name= 'External'
            component= {External}  
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    );
}