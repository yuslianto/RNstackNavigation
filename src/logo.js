import React, { Component } from "react";
import { 
    Image,
} from "react-native";

import Logo from './images/logo-animal.png';

class LogoTitle extends Component {
    render() {
        return (
            <Image
                source={Logo}
                style={{
                    width:30, 
                    height:30,
                    marginHorizontal: 5
                }}
            />
        );
    }
}
export default LogoTitle;