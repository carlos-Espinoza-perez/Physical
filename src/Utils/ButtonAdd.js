import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Btn = (props) => {
  return (
    <FAB
      style={styles.fab}
      small
      icon="account-arrow-right"
      {...props}
    />
  )
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    color: "#6c6c6c",
    backgroundColor: "rgb(32, 201, 139)"
  },
})

export default Btn;
