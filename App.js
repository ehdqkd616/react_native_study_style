/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import
{
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
} from 'react-native';

class App extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                {/* <View style={{ width: 100, height: 100, backgroundColor: 'red' }}></View> */}
                {/* <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                <View style={{ flex: 2, backgroundColor: 'orange' }}></View>
                <View style={{ flex: 3, backgroundColor: 'yellow' }}></View> */}
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                <View style={{ width: 50, height: 50, backgroundColor: 'orange' }}></View>
                <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
                {/* <View style={{ height: 50, backgroundColor: 'red' }}></View>
                <View style={{ height: 50, backgroundColor: 'orange' }}></View>
                <View style={{ height: 50, backgroundColor: 'yellow' }}></View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-around', // flex-start | center | flex-end,
        // flexDirection: 'column-reverse',
        // flexDirection: 'row-reverse',

        alignItems: 'center', // flex-start | center | flex-end
        justifyContent: 'center' // flex-start | center | flex-end
    },

});

export default App;
