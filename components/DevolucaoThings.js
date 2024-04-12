import { View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import React from 'react'

export default function DevolucaoThings({ titulo1, subtitulo, texto1, texto2, texto3, texto4, texto5,
texto6, texto7, texto8, texto9, texto10, texto11, outrotitulo, text1, text2, text3, text4 }) {
  return (
    <View>
      <View style={css.pai}>
            <View style={css.caixa}>
                <Text style={css.titulo}>{titulo1}</Text>
                <Text style={css.subtitulo}>{subtitulo}</Text>
                <Text style={css.texto}>{texto1}</Text>
                <Text style={css.texto}>{texto2}</Text> 
                <Text style={css.texto}>{texto3}</Text>
                <Text style={css.texto}>{texto4}</Text>                                                                                             
                <Text style={css.texto}>{texto5}</Text>
                <Text style={css.textoum}>{texto6}</Text>
                <Text style={css.aviso}>{texto7}</Text>
                <Text style={css.subtitulo}>{texto8}</Text>
                <Text style={css.texto}>{texto9}</Text>
                <Text style={css.texto}>{texto10}</Text> 
                <Text style={css.texto}>{texto11}</Text>
                <Text style={css.obstitulo}>{outrotitulo}</Text>
                <Text style={css.textoblack}>{text1}</Text>
                <Text style={css.textoblack}>{text2}</Text>
                <Text style={css.textoblack}>{text3}</Text>
                <Text style={css.textoblack}>{text4}</Text>
            </View>
        </View>
    </View>
  )
}
const css = StyleSheet.create({
    titulo:{
        color:"#8E44AD",
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 60,
    },
    subtitulo:{
        color:"#8E44AD",
        fontSize: 15,
        marginTop: 5,
    },
    texto:{
        color:"#8E44AD",
        fontSize: 13,
    
    },
    textoum:{
        color: "#623476",
        fontSize: 13,
    },
    aviso:{
        color:"#8E44AD",
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
    },
    obs:{
        color:"#8E44AD",
        fontSize: 15,
    },
    textoblack:{
        fontSize: 13,
    },
    obstitulo:{
        marginTop: 5,
        marginBottom: 5,
        fontWeight: 'bold',
        
    },
    caixa:{
        width: '90%',
        marginTop: 10,
        textAlign: 'justify',
    },
    pai:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})