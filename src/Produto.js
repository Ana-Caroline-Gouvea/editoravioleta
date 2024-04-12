import { Image, StyleSheet, Text, View, FlatList, } from "react-native";
import ProdutoLista from "../components/ProdutoLista";
import { useState } from "react";
import Carrinho from "./Carrinho";
import IniciarCompra from "./IniciarCompra";
import FinalizarCompra from "./FinalizarCompra";
import Obrigada from "./Obrigada";



const produtos = [
    {
        id: 1,
        nome: "Cem Chances",
        preco: "R$48,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 2,
        nome: "Safira Dourada",
        preco: "R$68,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 3,
        nome: "Pelo Quinto Andar",
        preco: "R$59,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 4,
        nome: "Incógnito",
        preco: "R$65,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 5,
        nome: "Cem Chances",
        preco: "R$48,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 6,
        nome: "Safira Dourada",
        preco: "R$68,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 7,
        nome: "Pelo Quinto Andar",
        preco: "R$59,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 8,
        nome: "Incógnito",
        preco: "R$65,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
]

export default function Produto({ navigation }) {


    return(
        <View>
            <Text style={css.title}>Lista de Produtos ________________________</Text>
            <FlatList style={css.container} 
                contentContainerStyle={{ height: 1350 }}
                data={produtos}
                renderItem={({item}) => 
                <ProdutoLista 
                nome={item.nome}
                preco={item.preco}
                imagem={item.imagem}
                />}
                keyExtractor={ (item) => item.id }
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    width: "50%",
                    padding: 10,
                    gap: 20
                }}
                numColumns={2}
            />
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#8E44AD",
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
    },
})
