import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Examples from '../screens/Examples';
import Components from '../screens/Components';
import {CustomDrawerContent} from '../components/CustomDrawer';
import {Image, View, StyleSheet} from 'react-native';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#5E72E4',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <View style={styles.iconStyle}>
              <Image
                source={require('../assets/shop.png')}
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Create account"
        component={Examples}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <View style={styles.iconStyle}>
              <Image
                source={require('../assets/example.png')}
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Components"
        component={Components}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <View style={styles.iconStyle}>
              <Image
                source={require('../assets/component.png')}
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    height: 40,
    width: 40,
  },
});
