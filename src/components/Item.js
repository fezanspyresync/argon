import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Item({image, label}) {
  return (
    <Pressable
      style={({pressed}) => [pressed ? styles.active : styles.unactive]}>
      <View
        style={{height: hp('6%'), flexDirection: 'row', alignItems: 'center'}}>
        <View style={{height: 40, width: 40}}>
          <Image
            source={image}
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          />
        </View>

        <Text>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: '#5E72E4',
    color: 'white',
    borderRadius: 20,
    marginBottom: 3,
  },
  unactive: {
    backgroundColor: '#ffffff',
    color: 'gray',
    borderRadius: 2,
    marginBottom: 3,
  },
});
