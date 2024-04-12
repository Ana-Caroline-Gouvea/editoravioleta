import { FlatList, Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProdutoLista from "../components/ProdutoLista";
import BannerLista from "./BannerLista";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { useRef } from "react";
import Carousela from 'react-native-snap-carousel';
import Carrinho from "./Carrinho";
import IniciarCompra from "./IniciarCompra";
import FinalizarCompra from "./FinalizarCompra";
import Obrigada from "./Obrigada";

const Baloo2 = fonts['Baloo2-Regular.ttf'];

const produtosDestaque = [
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
    {
        id: 9,
        nome: "O Khaos",
        preco: "R$71,00",
        imagem: require( "../assets/o-khaos.png")
    },
    {
        id: 10,
        nome: "Pelo Quinto Andar",
        preco: "R$65,00",
        imagem: require( "../assets/pelo-quinto-andar.jpg")
    },
]

const banner = [
    {
        id: 1,
        imagem: require("../assets/banner.webp")
    },
    {
        id: 2,
        imagem: require("../assets/banner02.webp")
    },
    {
        id: 3,
        imagem: require("../assets/banner04.webp")
    },
    {
        id: 4,
        imagem: require("../assets/banner05 (2).webp")
    },
    {
        id: 5,
        imagem: require("../assets/banner06.webp")
    },
    {
        id: 6,
        imagem: require("../assets/banner07.webp")
    },
    {
        id: 7,
        imagem: require("../assets/banner08.webp")
    },
]

export default function Home({ navigation }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScroll, setIsAutoScroll] = useState(true);
    const carouselRef = useRef(null);
    const [ carrinho, setCarrinho ] = useState(false);
    const [ iniciarCompra, setIniciarCompra ] = useState(false);
    const [ finalizarCompra, setFinalizarCompra ] = useState(false);
    const[ obrigado, setObrigado] =useState(false);

    if( carrinho ) {
        return ( <Carrinho setCarrinho={setCarrinho} setIniciarCompra={setIniciarCompra}  setFinalizarCompra={setFinalizarCompra} setObrigado={setObrigado}/> )
    }

    if( iniciarCompra ){
        return( <IniciarCompra setCarrinho={setCarrinho} setIniciarCompra={setIniciarCompra}  setFinalizarCompra={setFinalizarCompra} setObrigado={setObrigado}/> )
    }

    if( finalizarCompra ){
        return( <FinalizarCompra setCarrinho={setCarrinho} setIniciarCompra={setIniciarCompra} setFinalizarCompra={setFinalizarCompra} setObrigado={setObrigado}/> )
    }

    if( obrigado ){
        return( <Obrigada setCarrinho={setCarrinho} setIniciarCompra={setIniciarCompra} setFinalizarCompra={setFinalizarCompra} setObrigado={setObrigado} navigation={navigation}/> )
    }


    return(
        <View>
            <View>
                <Carousela
                    data={banner}
                    renderItem={({ item }) => (
                        <BannerLista
                            imagem={item.imagem}
                        />
                    )}
                    sliderWidth={413}
                    itemWidth={400}
                    autoplay={true}
                    loop={true}
                    onSnapToItem={(index) => setCurrentIndex(index)}
                />
                <Text style={css.title}>Produtos em destaque ___________________</Text>
                <FlatList
                    contentContainerStyle={{ height: 2100 }}
                    data={produtosDestaque}
                    renderItem={({item}) => 
                    <ProdutoLista
                        setCarrinho={setCarrinho} 
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
        </View>
    )
}

const css = StyleSheet.create({
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