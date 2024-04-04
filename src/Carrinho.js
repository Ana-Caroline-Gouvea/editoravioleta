import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

import CarrinhoItem from '../components/CarrinhoItem'
import FinalizarCompra from "./FinalizarCompra";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const produtos =[
    {
        id: 1,
        check: require( "../assets/check.png"),
        imagem: require( "../assets/cem-chances.png"),
        nome: "Cem Chances",
        sinopse: "Uma vez que dois polos iguais se repelem, talvez esse seja o motivo pelo qual Killian odeia Dominic com todas as suas forças e tem a certeza de que o sentimento...",
        preco: "R$48,90",
    },
    {
        id: 2,
        check: require( "../assets/check.png"),
        nome: "Diário de Bordo - Pré-Venda",
        sinopse: "A Primeira Guerra Mundial havia estourado na Alemanha.Klaus Koussevitzky era apenas um garoto de doze anos perdido em meio àquele caos, um menino que...",
        preco: "R$59,00",
        imagem: require( "../assets/diario-de-bordo.png")
    },  
    {
        id: 3,
        imagem: require( "../assets/sangue-latino.png"),
        nome: "Sangue Latino",
        sinopse: "Na Haneul é o quarterback e capitão do time de futebol americano da escola onde estuda, Northfield, e conta com a chance de ganhar as finais do campeonato estadual...",
        preco: "R$55,00",
        
    },
    {
        id: 4,
        check: require( "../assets/check.png"),
        imagem: require( "../assets/safira-dourada.png"),
        nome: "Safira Dourada",
        sinopse: "O mundo dos humanos era cruel, e Oliver LeClerc sabia muito bem disso. Ele vivia no meio deles todos os dias, disfarçado, assumindo uma identidade que não era a sua...",
        preco: "R$55,00",
    },
    {
        id: 5,
        imagem: require( "../assets/rock-mafia.png"),
        nome: "Safira Dourada",
        sinopse: "O mundo dos humanos era cruel, e Oliver LeClerc sabia muito bem disso. Ele vivia no meio deles todos os dias, disfarçado, assumindo uma identidade que não era a sua...",
        preco: "R$55,00",
    },
    {
        id: 6 ,
        imagem: require( "../assets/locus.png"),
        nome: "Box LOCUS 99",
        sinopse: "O mundo dos humanos era cruel, e Oliver LeClerc sabia muito bem disso. Ele vivia no meio deles todos os dias, disfarçado, assumindo uma identidade que não era a sua...",
        preco: "R$55,00",
    },
]

export default function Carrinho({navigation, FinalizarCompra}){
    return(
        <View>
            <View>
                <FlatList
                data={produtos}
                renderItem={({item}) =>  
                (<View>
                    <CarrinhoItem
                        check={item.check}
                        imagem={item.imagem}
                        nome={item.nome}
                        sinpose={item.sinopse}
                        preco={item.preco}
                    /> 
                </View>)}
                keyExtractor={ (item) => item.id}
                numColumns={1}
                /> 
        </View>
        <View style={css.caixa}>
            <TouchableOpacity style={css.botao} onPress={() => navigation.navigate('Finalizar Compra')  } > 
            <Text style={css.texto}>Iniciar Compra</Text>
            </TouchableOpacity>
        </View>
     </View>
    )
}
const css = StyleSheet.create ({
    botao:{
        backgroundColor: "#B927DE",
        height: 45,
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 105,
        borderRadius: 3,
        marginTop: 20,
    },
    texto:{
        color: "white",
        fontWeight: "bold",
    },
    caixa:{
        marginBottom: -150,
        borderTopColor: "black",
        borderTopWidth: 1,
    }
})