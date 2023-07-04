import {View, Text} from 'react-native';
import React from 'react';

import CheckBox from 'react-native-check-box';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default function CustomCheckBox() {
  const [check, setCheck] = React.useState(false);
  const changeHandler = () => {
    console.log('fsdfsdfysydg');
    setCheck(!check);
  };
  return (
    <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
      <CheckBox
        onClick={() => {
          changeHandler();
        }}
        isChecked={check}
        checkBoxColor={check ? '#5E72E4' : 'gray'}
      />
      <Text style={{marginLeft: 10}}>
        I agree with the <Text style={{color: '#5E72E4'}}>Privacy Policy</Text>{' '}
      </Text>
    </View>
  );
}
