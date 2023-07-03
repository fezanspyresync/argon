import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Container({children, bg = null}) {
  return (
    <View
      style={{
        paddingHorizontal: wp('3%'),
        paddingBottom: hp('2%'),
        backgroundColor: bg,
      }}>
      {children}
    </View>
  );
}
