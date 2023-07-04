import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import CustomNav from '../components/CustomNav';
import Container from '../components/Container';
import {useRoute} from '@react-navigation/native';
export default function Components() {
  const routing = useRoute();
  return (
    <View style={{flex: 0.5}}>
      <ImageBackground
        source={require('../assets/user.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <CustomNav currentScreeb={routing.name} />
      </ImageBackground>
    </View>
  );
}
