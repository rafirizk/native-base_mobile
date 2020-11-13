/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Navbar from './src/components/Navbar'
import Story from './src/components/Story'
import Feed from './src/components/Feed'
import Footer from './src/components/Footer'

const App = () => {
  
  const [isDarkMode, setDarkMode] = useState(false)

  const theme = {
    darkMode: {
      color:'#F5F5f5',
      backgroundColor:'#212121'
    },
    defaultMode: {
      color:'black',
      backgroundColor:'white'
    }
  }

  return (
    <>
      <View style={{flex: 1}}>
          <Navbar isDarkMode={isDarkMode} setDarkMode={setDarkMode} theme={theme} />
          <ScrollView>
            <View>
              <Story isDarkMode={isDarkMode} theme={theme} />
            </View>
            <View>
              <Feed isDarkMode={isDarkMode} theme={theme} />
            </View>
          </ScrollView>
          <Footer isDarkMode={isDarkMode} theme={theme} />
      </View>
    </>
  );
};

export default App;
