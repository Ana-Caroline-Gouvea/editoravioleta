import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ProdutoLista({nome, preco, imagem, setCarrinho,},) {
    return( 
            <View style={css.container}>
                <Image style={css.img} source={imagem} />
                    <Text style={css.bookName}>{nome}</Text>
                <View style={css.boxCart}>
<<<<<<< HEAD
                    <Text style={css.preco}>{preco}</Text>
                    <Image style={css.imgCart} source={ require ("../assets/carrinho.png")}/>
                    {/* Navegar para o carrinho */}
=======
                    <Text>{preco}</Text>
                    <TouchableOpacity  onPress={ () => setCarrinho( true )}>
                        <Image style={css.imgCart} source={ require ("../assets/carrinho.png")}/>
                    </TouchableOpacity>
>>>>>>> ddb30b6aee0475bb3112171adb499dab0f19e5cf
                </View>
            </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "85%",
        height: 280,
        margin: 14,
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOpacity: 0.4,
        elevation: 8,
        shadowOffset: {
        width: 0,
        height: 4
        },
        marginTop: 8
    },
    img: {
        width: "100%",
        height:220,
        marginBottom: 8,
        resizeMode: "contain",
    },
    boxCart: {
        flexDirection: 'row',
        gap: 65,
    },
    imgCart: {
<<<<<<< HEAD
        width: 24,
        height: 24,
        marginTop: -10,
        marginRight: 5,
=======
        width: 25,
        height: 25,
>>>>>>> ddb30b6aee0475bb3112171adb499dab0f19e5cf
    },
    bookName: {
        width: 120,
        marginRight: 23,
    },
    preco: {
        color: "#8E44AD",
    }
})
