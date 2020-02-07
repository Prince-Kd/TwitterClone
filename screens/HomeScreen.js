import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

const home = props =>{
  return(
    <View style={
      {
        backgroundColor:"red",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }
    }>
      <Text style={{color:"#fff",fontSize:45}}>
        Hello World
      </Text>
    </View>
  )
}

export default home;