import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from './src/components/button';
import {MyDrawer} from './src/navigator/drawer';
import {NativeBaseProvider, Box} from 'native-base';
import {SSRProvider} from '@react-aria/ssr';

const Stack = createStackNavigator();

function Welcome({navigation}) {
  function StartHandler() {
    navigation.replace('myDrawer');
  }

  return (
    <View style={styles.welcomeContainer}>
      <ImageBackground
        style={styles.image}
        source={require('../argo/src/assets/BG.png')}
        resizeMode="cover">
        <View style={styles.content}>
          <Image
            source={require('../argo/src/assets/LOGO.png')}
            height={20}
            width={20}
            style={{position: 'relative', top: 1}}
          />
          <View style={{position: 'relative', top: -10}}>
            <View style={{width: '60%'}}>
              <Text style={{fontSize: 40, fontWeight: '700', color: 'white'}}>
                Design System
              </Text>
            </View>
            <Text style={{fontSize: 14, color: 'white'}}>
              Fully coded React Native components.
            </Text>
          </View>
          <CustomButton pressMe={StartHandler} />
        </View>
      </ImageBackground>
    </View>
  );
}

function App() {
  return (
    <SSRProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="myDrawer"
              component={MyDrawer}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SSRProvider>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
  },
  content: {
    paddingHorizontal: wp('16%'),
    paddingVertical: hp('10%'),
    flex: 1,
    marginTop: hp('13.5%'),
    justifyContent: 'space-between',
  },
});

export default App;
