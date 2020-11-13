import React, { Component } from 'react';
import {
    View,
    Image,
    StatusBar,
    TouchableWithoutFeedback,
} from 'react-native'
import {
    Header,
    Left,
    Body,
    Right,
    Icon
} from 'native-base'

class Navbar extends Component {
    state = {  }
    render() {
        const {
            isDarkMode,
            setDarkMode,
            theme
        } = this.props
        const {
            defaultMode,
            darkMode
        } = theme
        const textColor = isDarkMode? darkMode.color : defaultMode.color
        const bgColor = isDarkMode? darkMode.backgroundColor : defaultMode.backgroundColor 
        return (
            <>
                <Header style={{elevation: 2, backgroundColor: bgColor}}>
                    <StatusBar />
                    <Left>
                        <TouchableWithoutFeedback onPress={() => setDarkMode(!isDarkMode)}>
                            <Icon name='camera' type='Feather' style={{color: textColor}}/>
                        </TouchableWithoutFeedback>
                    </Left>
                    <Body>
                        <Image
                            style={{width:100,height:30,tintColor: textColor}}
                            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'}}
                        />
                    </Body>
                    <Right>
                        <Icon name='paper-plane-outline' style={{fontSize:30,color: textColor}}  />
                    </Right>
                </Header>
            </>
        );
    }
}
 
export default Navbar;