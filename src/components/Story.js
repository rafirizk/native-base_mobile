import React from 'react';
import {
    Card,
    CardItem,
    Content, 
    Thumbnail, 
    Text 
} from 'native-base';

const data = [
    {
        name:'Your Story',
        foto:'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name:'Dessy',
        foto:'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name:'Bobi',
        foto:'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'       
    },
    {
        name:'Nata',
        foto:'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name:'Dzaky',
        foto:'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name:'Aya hacker',
        foto:'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
]

const Story = ({isDarkMode, theme}) => {
    
    const textColor = isDarkMode? theme.darkMode.color : theme.defaultMode.color
    const bgColor = isDarkMode? theme.darkMode.backgroundColor : theme.defaultMode.backgroundColor 

    const renderStory = () => {
        return data.map((val, index) => {
            return (
                <Card key={index} style={{height: 95, marginRight: -16}} transparent>
                    <CardItem style={{flexDirection: "column", backgroundColor: bgColor}}>
                        <Thumbnail
                        source={{
                            uri:val.foto
                        }}
                            style={{
                                borderWidth: 2.5,
                                borderColor: 'lightgray'
                            }}
                        />
                        <Text style={{fontSize:15, color: textColor}}>
                            {val.name}
                        </Text>
                    </CardItem>
                </Card>
            )
        })
    }

    return (
     <Content showsHorizontalScrollIndicator={false} horizontal alwaysBounceHorizontal style={{backgroundColor: bgColor}}>
         {renderStory()}
     </Content>   
    )
}

export default Story