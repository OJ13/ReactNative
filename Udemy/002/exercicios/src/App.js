/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
// import { Text } from 'react-native';
import CompPadrao, { Comp1, Comp2 } from './components/Multi'
import  Primeiro from './components/Primeiro';

// function App() {
//     return <SafeAreaView><Primeiro></Primeiro></SafeAreaView>;
// }

// export default App;

export default () => (
    <SafeAreaView>
        <CompPadrao/>
        <Comp1 />
        <Comp2 />
        <Text>
            { 1 + 1}
        </Text>
        <Primeiro />
    </SafeAreaView>
);
