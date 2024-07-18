import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PageTurner from '../../../../components/PageTurner';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PageTurner />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
