import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Image,
} from "react-native";

import Logo from './images/logo-animal.png';
class HomeScreen extends Component {

    static navigationOptions = {
        drawerLabel : 'Notification',
        drawerIcon : () => (
            
            <Image 
                source={Logo} 
                style={{
                    width: 30,
                    height : 30,
                }}
            />
            
        ),
    }
/** 
static navigationOptions = ({navigation}) => {
        return{
            headerLeft:(
                <Button
                    title="But"
                    onPress = { () => navigation.navigate('Users')}
                    color="green"
                    accessibilityLabel="Learn more anithing"
                />
            )
        }
    }
*/

    render() {

        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to users screen"
                    onPress={ ()=> this.props.navigation.navigate('Users', {
                        userId : '12',
                        userName : 'Yusli',
                        UserLastName : 'Anto',
                    }) }                />
                <Button
                    title="Open Side Drawer"
                    onPress={ ()=> this.props.navigation.openDrawer()}
                />
                <Text>{this.props.navigation.getParam('message','no messages')}</Text>
            </View>
        );
    }
}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});