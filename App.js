import React, { Component } from "react";
import { 
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from "react-navigation";

import HomeScreen from "./src/home";
import UserScreen from "./src/user";
import LogoTitle from "./src/logo";
import SideMenu from "./src/SideDrawer";

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