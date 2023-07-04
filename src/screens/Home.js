import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomNav from '../components/CustomNav';
import Container from '../components/Container';
import {useRoute} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function Home({navigation, params}) {
  const [text, onChangeText] = React.useState();
  const [beauty, setBeautyPress] = React.useState(true);
  const [fashion, setFashionPress] = React.useState(false);
  const routing = useRoute();

  const beautyHandler = () => {
    console.log('beauty handler');
    setBeautyPress(true);
    setFashionPress(false);
  };
  const fashionHandler = () => {
    console.log('fashion handler');
    setBeautyPress(false);
    setFashionPress(true);
  };

  return (
    <>
      <Container bg={'white'}>
        <CustomNav currentScreeb={routing.name} />
        <View>
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
          />
          <View
            style={{
              height: 20,
              width: 20,
              position: 'absolute',
              right: 15,
              top: 10,
            }}>
            <Image
              source={require('../assets/search.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </View>
        <View
          style={{
            height: heightPercentageToDP('5%'),
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <Pressable
            onPress={beautyHandler}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',

              paddingRight: widthPercentageToDP('10%'),
              borderRightWidth: 1,
            }}>
            <View
              style={{
                height: beauty ? 40 : 30,
                width: beauty ? 40 : 30,
                marginRight: widthPercentageToDP('2%'),
              }}>
              <Image
                source={require('../assets/Diamond.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'cover',
                }}
              />
            </View>
            <Text style={{fontSize: 18, fontWeight: beauty ? 'bold' : null}}>
              Beauty
            </Text>
          </Pressable>
          <Pressable
            onPress={fashionHandler}
            style={{
              flex: 1,

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingLeft: widthPercentageToDP('10%'),
              borderLeftWidth: 1,
            }}>
            <View
              style={{
                height: fashion ? 30 : 20,
                width: fashion ? 30 : 20,
                marginRight: widthPercentageToDP('2%'),
              }}>
              <Image
                source={require('../assets/bag-17.png')}
                style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              />
            </View>
            <Text style={{fontSize: 18, fontWeight: fashion ? 'bold' : null}}>
              Fashion
            </Text>
          </Pressable>
        </View>
      </Container>
      <View style={{padding: widthPercentageToDP('3%'), flex: 1}}>
        <View
          style={{
            flex: 1,
            marginBottom: 20,
          }}>
          <ScrollView>
            <View
              style={{
                height: heightPercentageToDP('17%'),
                flexDirection: 'row',
                borderRadius: 5,
              }}>
              <View
                style={{
                  height: '100%',
                  width: '40%',
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../assets/photo-1.png')}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '60%',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  backgroundColor: 'white',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  Ice cream is made with carrageenan …
                </Text>
                <Text
                  style={{color: '#5E72E4', fontWeight: 'bold', fontSize: 18}}>
                  View article
                </Text>
              </View>
            </View>
            <View
              style={{
                height: heightPercentageToDP('34%'),
                marginVertical: heightPercentageToDP('1.5%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'transparent',
              }}>
              <View
                style={{
                  height: '100%',
                  width: '47%',
                  backgroundColor: 'white',
                  borderRadius: 5,
                  overflow: 'hidden',
                }}>
                <View style={{height: '50%', backgroundColor: 'purple'}}>
                  <Image
                    source={require('../assets/woman.png')}
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
                <View
                  style={{
                    height: '50%',
                    padding: 10,
                    justifyContent: 'space-between',
                  }}>
                  <Text>Is makeup one of your daily esse …</Text>
                  <Text style={{color: '#5E72E4', fontSize: 18}}>
                    View article
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: '100%',
                  width: '47%',
                  borderRadius: 5,
                  overflow: 'hidden',
                  backgroundColor: 'white',
                }}>
                <View style={{height: '50%', backgroundColor: 'purple'}}>
                  <Image
                    source={require('../assets/makeup.png')}
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
                <View
                  style={{
                    height: '50%',
                    padding: 10,
                    justifyContent: 'space-between',
                  }}>
                  <Text>Is makeup one of your daily esse …</Text>
                  <Text style={{color: '#5E72E4', fontSize: 18}}>
                    View article
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: heightPercentageToDP('17%'),
                flexDirection: 'row',
                borderRadius: 5,
              }}>
              <View
                style={{
                  height: '100%',
                  width: '40%',
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../assets/hero.png')}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '60%',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  backgroundColor: 'white',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  Ice cream is made with carrageenan …
                </Text>
                <Text
                  style={{color: '#5E72E4', fontWeight: 'bold', fontSize: 18}}>
                  View article
                </Text>
              </View>
            </View>
            <View
              style={{
                height: heightPercentageToDP('40%'),
              }}>
              <View
                style={{
                  height: '70%',
                  marginVertical: 10,
                  backgroundColor: 'transparent',
                }}>
                <Image
                  source={require('../assets/mount.png')}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
              <View
                style={{
                  height: '30%',
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                  }}>
                  Argon is a great free UI packag …
                </Text>
                <Text
                  style={{
                    color: '#5E72E4',
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginBottom: 20,
                  }}>
                  View article
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 5,
  },
});
