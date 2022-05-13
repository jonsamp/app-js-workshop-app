import { Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import Modal from 'react-native-modal';

import { Text, View } from '../components/Themed';
import React, { useState } from 'react';

export function HomeScreen() {
  const tailwind = useTailwind();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={tailwind('flex-1')}>
      <Button title='Show modal' onPress={toggleModal} />

      <Modal isVisible={isModalVisible} style={tailwind('flex-1')}>
        <View style={tailwind('rounded-lg p-6')}>
          <Text>Compose</Text>
          <Button title='Hide modal' onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
