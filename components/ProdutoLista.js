import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ProdutoLista({nome, preco, imagem, setCarrinho,},) {
    return( 
            <View style={css.container}>
                <Image style={css.img} source={imagem} />
                    <Text style={css.bookName}>{nome}</Text>
                <View style={css.boxCart}>
                    <Text>{preco}</Text>
                    <TouchableOpacity  onPress={ () => setCarrinho( true )}>
                        <Image style={css.imgCart} source={ require ("../assets/carrinho.png")}/>
                    </TouchableOpacity>
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
        width: 25,
        height: 25,
    },
      bookName: {
        width: 120,
        marginRight: 23,
      }
})
