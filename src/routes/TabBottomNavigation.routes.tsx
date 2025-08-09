import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { SkillsScreen } from "../screens/Skills/SkillsScreen";
import { ProjectsScreen } from "../screens/Projects/ProjectsScreen";

const Tab = createBottomTabNavigator();

const TabBottomNavigation = () => {
    return (
        <Tab.Navigator 
        initialRouteName="home" 
        screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: {
                fontSize:12
            }
            
        }}
        >
            <Tab.Screen
                name="projects"
                component={ProjectsScreen}
                options={{
                    title: 'Projects',
                    tabBarLabel: 'Projects',
                    tabBarIcon: ({color, focused}) => <MaterialCommunityIcons name="view-dashboard" size={focused ? 26: 18} color={color} />
                }}
            />
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, focused}) => <MaterialCommunityIcons name="home" size={focused ? 26: 18} color={color} />
                }}
            />
            <Tab.Screen
                name="skills"
                component={SkillsScreen}
                options={{
                    title: 'Skills',
                    tabBarLabel: 'Skills',
                    tabBarIcon: ({color,focused}) => <MaterialCommunityIcons name="tools" size={focused ? 26: 18} color={color} />
                }}
            />

        </Tab.Navigator>
    )
}

export default TabBottomNavigation;