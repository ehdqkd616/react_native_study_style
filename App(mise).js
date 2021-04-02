/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, Component } from 'react';
import
{
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

class App extends Component
{

    render()
    {
        return (
            <View>
                <View style={styles.container}>
                    <Image source={require('./assets/sample_image3.jpg')} style={{ width: 100, height: 100 }}></Image>


                    <View style={{ flexDirection: 'column' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>활동연대</Text>
                            <Text style={styles.detail}>2000, 2010</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title, styles.point}>출생</Text>
                            <Text style={styles.detail}>1997.02.16 | 한국</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>활동유형</Text>
                            <Text style={styles.detail}>남성 | 솔로 | 보컬, 피아노</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>활동장르</Text>
                            <Text style={styles.detail}>가요 {'>'} 발라드, R&B, 소울</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.title}>데뷔</Text>
                            <Text style={styles.detail}>2021 | with you | 동행</Text>
                        </View>
                    </View>
                </View >
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
                <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}></View>
                <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20,
        flexDirection: 'row'
    },

    title: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 15
    },

    point: {
        color: 'red'
    },

    detail: {
        marginLeft: 10
    },

});

export default App;
