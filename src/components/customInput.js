import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {Card} from 'react-native-shadow-cards';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function CustomInput({placeholder, logo, isPassword = null}) {
  return (
    <View
      style={{
        height: heightPercentageToDP('9%'),
      }}>
      <Card
        style={{
          width: '100%',
          overflow: 'hidden',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '100%',
            width: '20%',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{height: 20, width: 20}}>
            <Image
              source={logo}
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
        <TextInput
          secureTextEntry={isPassword ? true : false}
          placeholder={placeholder}
          style={{flex: 1, paddingRight: 10}}
        />
      </Card>
    </View>
  );
}
