import { StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';

import { Text, View } from '../components/Themed';

export function HomeScreen() {
  const tailwind = useTailwind();
  return (
    <View style={[styles.container]}>
      <Text style={tailwind('text-blue-500 dark:text-blue-dark-500')}>
        Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
