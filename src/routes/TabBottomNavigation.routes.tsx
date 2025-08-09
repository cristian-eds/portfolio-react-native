import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/Home/HomeScreen";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { SkillsScreen } from "../screens/Skills/SkillsScreen";
import { ProjectsScreen } from "../screens/Projects/ProjectsScreen";

const Tab = createBottomTabNavigator();

const TabBottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="projects"
                component={ProjectsScreen}
                options={{
                    title: 'Projects',
                    tabBarLabel: 'Projects',
                    tabBarLabelStyle: {
                        color: 'black'
                    },
                    tabBarIcon: () => <MaterialCommunityIcons name="view-dashboard" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        color: 'black'
                    },
                    tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name="skills"
                component={SkillsScreen}
                options={{
                    title: 'Skills',
                    tabBarLabel: 'Skills',
                    tabBarLabelStyle: {
                        color: 'black'
                    },
                    tabBarIcon: () => <MaterialCommunityIcons name="tools" size={24} color="black" />
                }}
            />

        </Tab.Navigator>
    )
}

export default TabBottomNavigation;