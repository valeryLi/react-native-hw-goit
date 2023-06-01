import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {} from "react-native";

import { PostsScreen } from "../PostsScreen/PostsScreen";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

// import Grid from "../../../assets/images/svg/grid.svg";
// import Add from "../../../assets/images/svg/Union.svg";
// import User from "../../../assets/images/svg/user.svg";

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Posts">
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="Create" component={CreatePostsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
