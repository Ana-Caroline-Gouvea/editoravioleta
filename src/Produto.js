import { Image, StyleSheet, Text, View, FlatList, } from "react-native";
import ProdutoLista from "../components/ProdutoLista";



const produtos = [
    {
        id: 1,
        nome: "Cem Chances",
        preco: "R$48,00",
        imagem: require( "../assets/cem-chances.png")
    },
    {
        id: 2,
        nome: "Safira Dourada",
        preco: "R$68,00",
        imagem: require( "../assets/SafiraDourada.png")
    },
    {
        id: 3,
        nome: "Locus",
        preco: "R$70,00",
        imagem: require( "../assets/locus.png")
    },
    {
        id: 4,
        nome: "Diário de Bordo",
        preco: "R$65,00",
        imagem: require( "../assets/diario-de-bordo.png")
    },
    {
        id: 5,
        nome: "Rock Mafia",
        preco: "R$48,00",
        imagem: require( "../assets/rock-mafia.png")
    },
    {
        id: 6,
        nome: "Eros Vol.1",
        preco: "R$68,00",
        imagem: require( "../assets/Eros.png")
    },
    {
        id: 7,
        nome: "Engavetados",
        preco: "R$59,00",
        imagem: require( "../assets/engavetados.png")
    },
    {
        id: 8,
        nome: "O Maestro",
        preco: "R$75,00",
        imagem: require( "../assets/o-maestro.png")
    },
]

export default function Produto({nome, preco, imagem}) {
    return(
        <View>
            <Text style={css.title}>Lista de Produtos ___________________</Text>
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
