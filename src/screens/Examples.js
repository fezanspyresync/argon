import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import React from 'react';
import CustomNav from '../components/CustomNav';
import Container from '../components/Container';
import {useRoute} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ColorSpace} from 'react-native-reanimated';
import CustomInput from '../components/customInput';
import CustomCheckBox from '../components/checkBox';

import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {loadConfig} from 'metro-config';

async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccessToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

const googleSignin = async () => {
  try {
    GoogleSignin.configure({
      webClientId:
        '1074496300706-6ut6vc9jvkrqtn9c27aia2fg3r8m813m.apps.googleusercontent.com',
    });
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
};

export default function Examples() {
  const routing = useRoute();

  const googleHandler = async () => {
    const data = await googleSignin();
    console.log(data);
  };

  const facebookHandler = async () => {
    try {
      const data = await onFacebookButtonPress();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/createAccount.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <Container>
          <CustomNav currentScreeb={routing.name} />
        </Container>
        <View
          style={{
            flex: 1,
            padding: widthPercentageToDP('4%'),
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#F4F5F7',
              borderRadius: 5,
              overflow: 'hidden',
            }}>
            <View
              style={{
                height: heightPercentageToDP('20%'),
                backgroundColor: 'white',
                paddingHorizontal: widthPercentageToDP('6%'),
                paddingVertical: heightPercentageToDP('5%'),
              }}>
              <Text style={{textAlign: 'center'}}>Sign up with</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingVertical: widthPercentageToDP(3),
                  marginTop: heightPercentageToDP('.4%'),
                  overflow: 'hidden',
                }}>
                <Card
                  style={{height: heightPercentageToDP('5.5%'), width: '45%'}}>
                  <Pressable
                    onPress={() => facebookHandler()}
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{height: 20, width: 20}}>
                      <Image
                        source={require('../assets/facebook.png')}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'cover',
                        }}
                      />
                    </View>
                    <Text style={{color: '#5E72E4', fontSize: 14}}>
                      FACEBOOK
                    </Text>
                  </Pressable>
                </Card>
                <Card
                  style={{height: heightPercentageToDP('5.5%'), width: '45%'}}>
                  <Pressable
                    onPress={googleHandler}
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 10,
                      paddingHorizontal: 28,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{height: 20, width: 20}}>
                      <Image
                        source={require('../assets/googleicon.png')}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'cover',
                        }}
                      />
                    </View>
                    <Text style={{color: '#5E72E4', fontSize: 14}}>GOOGLE</Text>
                  </Pressable>
                </Card>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                paddingHorizontal: widthPercentageToDP('9.4%'),
                paddingVertical: heightPercentageToDP('5%'),
              }}>
              <View
                style={{
                  marginBottom: heightPercentageToDP('5%'),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  Or sign up with credentials
                </Text>
              </View>
              <CustomInput
                placeholder={'Name'}
                logo={require('../assets/Object.png')}
              />
              <CustomInput
                placeholder={'Email'}
                logo={require('../assets/email.png')}
              />
              <CustomInput
                isPassword={'password'}
                placeholder={'Password'}
                logo={require('../assets/lock.png')}
              />
              <Text>
                password strenght:
                <Text style={{fontWeight: 'bold', color: '#2DCE89'}}>
                  Strong
                </Text>
              </Text>
              <CustomCheckBox />
              <View style={{alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity
                  style={{
                    height: heightPercentageToDP('7%'),
                    backgroundColor: '#5E72E4',
                    width: '70%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white'}}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
