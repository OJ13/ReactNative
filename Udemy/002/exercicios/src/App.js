import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
// import CompPadrao, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio';

// function App() {
//     return <SafeAreaView><Primeiro></Primeiro></SafeAreaView>;
// }

// export default App;

export default () => (
    <SafeAreaView style={style.App}>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        {/*<MinMax min="3" max="20" />
        <MinMax min={1} max={200} />
        <CompPadrao/>
        <Comp1 />
        <Comp2 />
        <Text>
            { 1 + 1}
        </Text>
        <Primeiro /> */}
    </SafeAreaView>
);

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})