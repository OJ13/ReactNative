import React  from 'react';
import { Text } from 'react-native';
import Estilo from './estilo'

export default ({ min, max }) => { //destruction na passagem do parametro
    const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
    );
}
// export default (props) => {
//     const { min, max } = props; //destruction
//     const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
//     return (
//         <Text style={Estilo.txtG}>
//             O valor aleatório é {aleatorio}
//         </Text>
//     );
// }
// export default (props) => {
//     const aleatorio = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
//     return (
//         <Text style={Estilo.txtG}>
//             O valor aleatório é {aleatorio}
//         </Text>
//     );
// }