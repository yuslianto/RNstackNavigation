import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
} from "react-native";

class UserScreen extends Component {
    
    static navigationOptions = {
        title : 'User',
        headerStyle : {
            backgroundColor : 'red',
        },
        //headerTintColor : 'blue',
        headerTitleStyle : {
            fontWeight : 'bold',
            flex : 1,
            color : 'green',
            textAlign : 'center',
        }
    }

    render() {

        const UserId = this.props.navigation.getParam('userId', 'No Id')
        const UserName = this.props.navigation.getParam('userName', 'No User Name')
        const UserLastName = this.props.navigation.getParam('userLastName', 'No User Last Name')

        //console.warn(this.props);

        return (
            <View style={styles.container}>
                <Text>User Screen</Text>
                <Text>User Id : {UserId}</Text>
                <Text>User Name : {UserName}</Text>
                <Text>User Last Name : {UserLastName}</Text>
                <Button
                    title="Go to home screen"
                    onPress={ ()=> this.props.navigation.navigate('Home',{
                        message : 'Hello Yuslianto',
                    }) }
                />
                <Button
                    title="Go to back to home"
                    onPress={ ()=> this.props.navigation.goBack() }
                    color="#841584"
                />
            </View>
        );
    }
}
export default UserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});