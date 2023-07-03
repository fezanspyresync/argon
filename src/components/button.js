import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomButton({pressMe}) {
  return (
    <TouchableOpacity onPress={() => pressMe()}>
      <View
        style={{
          height: hp('4%'),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14}}>
          Get Started
        </Text>
      </View>
    </TouchableOpacity>
  );
}
