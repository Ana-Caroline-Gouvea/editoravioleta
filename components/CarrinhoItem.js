import { Image, StyleSheet, View, Text, TextInput} from "react-native";

export default function CarrinhoItem({imagem, nome, sinopse, preco, check}){
    return(
        <View style={css.pai}>
            <View>
                <Image source={check} style={css.check} />
            </View>
            <Image source={imagem} style={css.imagem}/>
            <View style={css.filho}>
                <Text style={css.text}>{nome}</Text>
                <View style={css.irmao}>
                    <Text style={css.sinopse}>Sinopse</Text>
                    <Text style={css.textosinop}>{sinopse}</Text>
                </View>
                <View style={css.mae}>
                    <TextInput style={css.input}
                    keyboardType="numeric"></TextInput>
                    <Text style={css.preco}>{preco}</Text>
                </View>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    pai:{
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
    },
    imagem:{
        width: 118,
        height: 167,
        marginLeft: 10,
        resizeMode: "contain",
        borderColor: "#8E44AD",
    },
    text:{
        fontSize: 14,
    },
    sinopse:{
        fontSize: 13,
        color:"#C742FF"
    },
    irmao:{
        width: "75%",
        height: 110,
        backgroundColor:"#E7E7E7",
        borderColor: "#8E44AD",
        borderWidth: 1,
        borderRadius: 2,
        padding: 4,
        },
    input:{
        backgroundColor: "#F2F2F2",
        width: "13%",
        height: 25,
        marginTop: 10,
        borderColor: "#8E44AD",
        borderWidth: 1,
        borderRadius: 2,
        textAlign: "center",
    },
    mae:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    preco:{
        marginLeft: 5,
        marginTop: 16,
        color: "#8E44AD",
    },
    filho:{
        width: "70%",
        marginLeft: 10,
    },
    textosinop:{
        fontSize: 12,
    },
    check:{
        width: 25,
        height: 25,
        borderColor: "black",
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 75,
        resizeMode: "contain",
        borderRadius: 5,
    }
})