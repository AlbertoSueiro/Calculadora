import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcccc ',
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
      }
    ,boton: {
        color: '#00000',
        width:80,
        textAlign: 'center',
        padding: 14,
        fontSize: 30,
        fontWeight: 300,
        borderWidth:2
       
    },
    pantallaPrincipal: {
        fontSize: 80,
        textAlign: 'right',
        fontWeight:400,
        width: '80%',
        color: '#42426E',
       
    }
    ,fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
      }
    ,boton_operador: {
        backgroundColor: '#996633',
        
    }
    ,boton_normal: {
        backgroundColor: '#ff9933',
    }
    ,boton_especial:{
        backgroundColor: '#ffcc00'
    },
    boton_cero: {
        backgroundColor: '#af7063',
        color: '#00000',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 300,
        borderWidth: 2,
        width: 180,
        height: 70,
        justifyContent: 'center',  
        alignItems: 'center',  
      },
});
