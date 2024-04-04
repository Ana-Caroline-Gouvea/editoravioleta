import { Image, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import Home from "./Home";

export default function Obrigada(){
    return(
        <View style={css.caixa}>
            <Image source={ require( "../assets/logo.png")} style={css.imagem}></Image>
            <Text style={css.text}>Obrigado(a) pela preferência!</Text>
            <TouchableOpacity
            style={css.button}
            onPress={Home}>
            <Text style={css.continue}>Ir para a pagina de rastreamento</Text></TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    imagem:{
        width: 150,
        resizeMode: "contain",
        marginTop: -50,
    },
    caixa:{
        alignItems: "center",
    },
    text:{
        marginTop: -170,
        fontSize: 15,
    },
    button:{
        backgroundColor: "#BD69E0",
        width: "60%",
        height: "13%",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 12,
    },
    continue:{
        marginTop: 12,
        fontSize: 15,
        color: "white",
    }

})