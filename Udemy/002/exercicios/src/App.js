/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
// import { Text } from 'react-native';
import CompPadrao, { Comp1, Comp2 } from './components/Multi';
import  Primeiro from './components/Primeiro';

// function App() {
//     return <SafeAreaView><Primeiro></Primeiro></SafeAreaView>;
// }

// export default App;

export default () => (
    <SafeAreaView style={style.App}>
        <CompPadrao/>
        <Comp1 />
        <Comp2 />
        <Text>
            { 1 + 1}
        </Text>
        <Primeiro />
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})