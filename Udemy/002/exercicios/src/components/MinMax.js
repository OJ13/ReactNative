import React  from 'react';
import { Text } from 'react-native';
import Estilo from './estilo'

export default (props) => {
    return (
        <Text style={Estilo.txtG}>
            O valor de {props.max} é maior que o valor de {props.min}
        </Text>
    );
}
//mesma coisa que esta em cima
// export default props => (
//         <Text style={Estilo.txtG}>
//             O valor de {props.max} é maior que o valor de {props.min}
//         </Text>
// )