import { Image, StyleSheet, Text, View } from "react-native";

export default function BannerLista({imagem}) {
    return( 
        <View style={css.container}>
            <Image style={css.img} source={imagem} />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        marginTop: -20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    img: {
        width: '100%',
        height: 400,
        resizeMode: "contain",
    }
})