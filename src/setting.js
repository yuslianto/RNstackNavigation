import React, { Component } from "react";
import { 
    Image,
    View,
    Text,
    Button
} from "react-native";

class SettingScreen extends Component {
    render() {
        return (
            <View>
                <Text>i 'm setting screen</Text>
                <Button
                    title="Go to users screen"
                    onPress={ ()=> this.props.navigation.navigate('Users', {
                        userId : '12',
                        userName : 'Yusli',
                        UserLastName : 'Anto',
                    }) }                
                />
                <Button
                    title="Go to home screen"
                    onPress={ ()=> this.props.navigation.navigate('Home',{
                        message : 'Hello Yuslianto',
                    }) }
                />
                <Button
                    title="Open Side Drawer"
                    onPress={ ()=> this.props.navigation.openDrawer()}
                />
            </View>
        );
    }
}
export default SettingScreen;