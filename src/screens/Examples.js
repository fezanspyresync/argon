import {View, Text} from 'react-native';
import React from 'react';
import CustomNav from '../components/CustomNav';
import Container from '../components/Container';
import {useRoute} from '@react-navigation/native';

export default function Examples() {
  const routing = useRoute();
  return (
    <Container>
      <CustomNav currentScreeb={routing.name} />
    </Container>
  );
}
