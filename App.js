import React, { Component } from "react";
import { 
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import { Image } from 'react-native';

import HomeScreen from "./src/home";
import UserScreen from "./src/user";
import LogoTitle from "./src/logo";
import SideMenu from "./src/SideDrawer";

import IconAnimal from "./src/images/logo-animal.png";
import SettingScreen from "./src/setting";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Users: UserScreen,
});

const SettingStack = createStackNavigator({
  Setting: SettingScreen,
  Users: UserScreen,
});

/**
 * this is example if you combine stack navigator wit tab navigator
 */
/**
 
const AppNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Setting: SettingStack,
});
*/

/**
 * this is example if want combine stack with drawer navigation
 */

const AppNavigator = createDrawerNavigator({
  Home: HomeStack,
  Setting: SettingStack,
})



/**
 * 
const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Users: UserScreen,
},{
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: 'grey',
    activeBackgroundColor: 'yellow',
    inactiveBackgroundColor: 'blue',
    style: {

    },
    labelStyle: {
      fontSize: 20,
    }
  },
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ({})=>{
      return <Image
        source={IconAnimal}
        style={{
          width: 20,
          height: 20
        }}
      />
    },
    tabBarOnPress: ({navigation, defaultHandler})=>{
      if (navigation.state.key=='Users') {
        navigation.navigate('Users')
      } else {
        defaultHandler();
      }
    },
  }),
});
 */

/**
const AppNavigator = createDrawerNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions : ({navigation})=>({
      //drawerLabel : 'Super',
    })
  },
  Users : UserScreen,
},{
  contentComponent: SideMenu,
  drawerBackgroundColor: '#fff',
  drawerPosition: 'right',
  drawerWidth: 200,

});
 */

//const AppNavigator = createStackNavigator({
//  Home : {
//    screen : HomeScreen,
//    navigationOptions:({navigation})=>({
//      title: 'Home',
//      headerTitle:LogoTitle,
//    }),
//  },
//  Users : {
//    screen : UserScreen,
//  }
//},{
//  initialRouteName : "Home",
//  defaultNavigationOptions : {
//    headerStyle : {
//      backgroundColor : 'green',
//    },
//    headerTintColor : 'white',
//    headerTitleStyle : {
//      fontWeight : 'bold',
//    }
//
//  }
//});

export default createAppContainer(AppNavigator);