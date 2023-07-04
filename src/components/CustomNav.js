import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export default function CustomNav({currentScreeb = 'mydata'}) {
  const navigation = useNavigation();

  const DrawerOpenHandler = () => {
    navigation.openDrawer();
  };

  return (
    <View style={style.appbar}>
      <View
        style={{
          height: '100%',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={DrawerOpenHandler}
          style={{
            height: 20,
            width: 30,
          }}>
          {/* <MaterialCommunityIcons name="menu" size={40} color="blue" /> */}
          <Image
            source={require('../assets/Menu.png')}
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          />
        </TouchableOpacity>

        <Text style={{marginLeft: 30, color: 'white'}}>{currentScreeb} </Text>
      </View>
      <View
        style={{
          height: '100%',
          flex: 1,

          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            height: '50%',
            width: '20%',

            marginRight: wp('8%'),
            position: 'relative',
            top: 2.5,
          }}>
          {/* <MaterialCommunityIcons name="menu" size={40} color="blue" /> */}
          <Image
            source={require('../assets/Bell.png')}
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          />
          <View style={{height: 10, width: 10, position: 'absolute', right: 2}}>
            <Image
              source={require('../assets/Oval.png')}
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'cover',
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: '50%',
            width: '20%',
          }}>
          {/* <MaterialCommunityIcons name="menu" size={40} color="blue" /> */}
          <Image
            source={require('../assets/Basket.png')}
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  appbar: {
    height: hp('10%'),
    flexDirection: 'row',
    marginTop: hp('2%'),
  },
});
