import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Item from './Item';

export function CustomDrawerContent(props) {
  return (
    <>
      <View
        style={{
          flex: 0.3,

          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingHorizontal: 10,
        }}>
        <Image source={require('../assets/drawerLogo.png')} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          flex: 1,

          paddingHorizontal: 10,
          marginHorizontal: 10,
          borderTopColor: '0x1a000000',
          borderTopWidth: 1,
        }}>
        <Text style={{marginVertical: 20, fontSize: 13}}>DOCUMENTATION</Text>
        <Item
          image={require('../assets/rocket.png')}
          label={'Getting started'}
        />
        <Item image={require('../assets/logout.png')} label={'logout'} />
      </View>
    </>
  );
}
