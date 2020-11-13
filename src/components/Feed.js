import React, { Component } from 'react';
import {
    Image,
    View
} from 'react-native';
import {Card, 
    CardItem, 
    Thumbnail,
    Text, 
    Button, 
    Icon, 
    Left, 
    Body, 
    Right 
} from 'native-base';

class Feed extends Component {
    state = {
        feeds: [
            {
                profpic: 'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
                name: 'Bowo', 
                status: 'Sponsored',
                post: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                profpic: 'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
                name: 'Michael', 
                status: null,
                post: 'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
        ],
    }

    renderFeed = () => {
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
        return this.state.feeds.map((val, index) => {
            return (
                <View key={index}>
                    <CardItem style={{backgroundColor: bgColor}} >
                        <Left>
                            <Thumbnail 
                                source={{
                                    uri:val.profpic
                                }}
                            />
                            <Body>
                                <Text style={{color: textColor}}>{val.name}</Text>
                                <Text note>{val.status}</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon name='more-vertical' type="Feather" />
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image 
                            source={{
                                uri:val.post
                            }}
                            style={{
                                height:300,
                                flex: 1,
                                width: null
                            }}
                        />
                    </CardItem>
                    <CardItem style={{backgroundColor: bgColor}} >
                        <Icon name="hearto" style={{fontSize: 20, color: textColor}} type="AntDesign" />
                        <Icon type="AntDesign" name="message1" style={{fontSize: 20, color: textColor}} />
                        <Icon type="Ionicons" name="paper-plane-outline" style={{fontSize: 23, color: textColor}} />
                    </CardItem>
                    <CardItem style={{marginTop:-10,backgroundColor: bgColor,padding:-10}}>
                        <Left>
                            <Text style={{fontSize:12,marginLeft:-4,color: textColor}}>5 likes</Text>
                        </Left>
                    </CardItem>
                    <CardItem style={{marginTop:-10,backgroundColor: bgColor}}>
                        <Text style={{fontWeight:'bold',marginRight:5,color: textColor}}>
                            {val.name} 
                        </Text>
                        <Text style={{color: textColor}}>
                            deskripsi
                        </Text>
                    </CardItem>
                </View>
            )
        })
    }

    render() { 
        return ( 
            <View>
                {this.renderFeed()}
            </View>
        );
    }
}
 
export default Feed;