

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Dimensions
} from 'react-native';
import Header from './Components/Header/header';
import Routes from './routes';


const App = () => {
    return (
        <View>
            <Header />
            <ScrollView style={{ height: '100%', backgroundColor: '#fafafa', width: '98%', marginStart: '1%' }}>
                <SafeAreaView style={{ height: Dimensions.get('window').height - 55 }}>
                    <Routes />
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

export default App;
