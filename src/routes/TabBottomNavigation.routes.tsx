import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";

const Tab = createBottomTabNavigator();

const TabBottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen  name="home" component={HomeScreen}/>
        </Tab.Navigator>
    )
}

export default TabBottomNavigation;