import React, { Component } from 'react';
import {
    Footer,
    FooterTab,
    Button,
    Icon
} from 'native-base';

class Footers extends Component {
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
            <Footer style={{height: 40}}>
                <FooterTab style={{backgroundColor: bgColor}}>
                    <Button>
                        <Icon style={{color: textColor,fontWeight:'bold'}} active name="home" />
                    </Button>
                    <Button>
                        <Icon style={{color: textColor}} name="search" />
                    </Button>
                    <Button>
                        <Icon style={{color: textColor}} name="add" />
                    </Button>
                    <Button>
                        <Icon style={{color: textColor}} name="heart" />
                    </Button>
                    <Button>
                        <Icon style={{color: textColor}} name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
 
export default Footers;