import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from '../themes/Styles';
import * as Haptics from 'expo-haptics'; 


interface BotonOperacionProps {
  label: string;
  width: number;
  onPress: () => void;
  type: 'normal' | 'operador' | 'especial' | 'cero';
}


export const BotonOperacion = ({ label, width, onPress, type }: BotonOperacionProps) => {

    const acciones = () => {
        
        Haptics.selectionAsync();  
        onPress();  
      }; 

    return (
    <Pressable
      onPress={acciones}
      style={[{ width }, getButtonTypeStyle(type)]}
    >
      <Text style={GlobalStyles.boton}>
        {label}
      </Text>
    </Pressable>
  );
};

export const BotonCero = ({ label, width, onPress, type }: BotonOperacionProps) => {

    const acciones = () => {
        Haptics.selectionAsync();  
        onPress();  
      }; 

    return (
    <Pressable
      onPress={acciones}
      style={[{ width }, getButtonTypeStyle(type)]}
    >
      <Text style={GlobalStyles.boton_cero}>
        {label}
      </Text>
    </Pressable>
  );
};


const getButtonTypeStyle = (type: 'normal' | 'operador' | 'especial' | 'cero') => {
  switch(type) {
    case 'operador':
      return GlobalStyles.boton_operador;
    case 'especial':
      return GlobalStyles.boton_especial;
    case 'cero':
        return GlobalStyles.boton_cero;
    default:
      return GlobalStyles.boton_normal;
  }
};


