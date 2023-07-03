import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import CustomNav from '../components/CustomNav';
import Container from '../components/Container';
import {useRoute} from '@react-navigation/native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default function Home({navigation, params}) {
  const [text, onChangeText] = React.useState('Useless Text');
  const routing = useRoute();

  return (
    <>
      <Container bg={'white'}>
        <CustomNav currentScreeb={routing.name} />
        <View>
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
          />
        </View>
      </Container>
      <Container>
        <View
          style={{
            height: heightPercentageToDP('100%'),
          }}></View>
      </Container>
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
