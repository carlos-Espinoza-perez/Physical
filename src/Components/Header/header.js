import * as React from 'react';

import { View } from "react-native";
import { Appbar } from 'react-native-paper';

const Header = () => {

  return (
    <React.Fragment>
      <View>
        <Appbar.Header style={{backgroundColor: 'rgb(20, 28, 58)'}}>
          <Appbar.Action icon="menu" />
          <Appbar.Content title="Physical" />

          <Appbar.Action  icon="account-details" />
        </Appbar.Header>
      </View>
    </React.Fragment>
      
  );
};

export default Header;
