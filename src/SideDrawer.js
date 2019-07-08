import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";

import Logo from './images/logo-animal.png';
import { NavigationActions } from "react-navigation";

class SideMenu extends Component {

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.navImageContainer}>
                            <Image 
                                source={Logo} 
                                style={{
                                    width: 70,
                                    height: 70,
                                }}
                            /> 
                        </View>
                        <Text style={styles.sectionHeadingStyle}>Section 1</Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemSectionStyle}
                                onPress={this.navigateToScreen('Home')}
                            >
                                Home
                            </Text>
                            <Text style={styles.navItemSectionStyle}
                                onPress={this.navigateToScreen('Users')}
                            >
                                Users
                            </Text>
                            <Text style={styles.navItemSectionStyle}
                                onPress={this.navigateToScreen('Home')}
                            >
                                Contact
                            </Text>
                            <Text style={styles.navItemSectionStyle}
                                onPress={this.navigateToScreen('Users')}
                            >
                                Update
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style= {styles.footerContainer}>
                    <Text>Copyrigth@Yuslianto</Text>
                </View>
            </View>
        );
    }
}
export default SideMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : 40,
    },
    navImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    sectionHeadingStyle: {
        backgroundColor: '#04b6ff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: '#fff'
    },
    navSectionStyle:{
        backgroundColor: '#2e2e2e',
    },
    navItemSectionStyle: {
        padding: 10,
        color: '#fff',
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    }
});