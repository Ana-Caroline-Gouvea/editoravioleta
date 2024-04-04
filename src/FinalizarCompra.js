import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native"

export default function FinalizarCompra(){
    return(
        <View style={css.avo}>
            <View style={css.pai}>
                <View>
                    <Text style={css.texto}>Dados de contato ___________</Text>
                    <TextInput placeholder="E-mail" style={css.email} placeholderTextColor={"#9D81BB"} />
                </View>
                <View style={css.filho}>
                    <View style={css.neto}>
                        <Text style={css.bold}>Subtotal:</Text>
                        <Text style={css.naobold}> R$144,00</Text>
                    </View>
                    <View style={css.neto}>
                        <Text style={css.bold}>Frete:</Text>
                        <Text style={css.naobold1}>R$30,00</Text>
                    </View>
                    <View>
                        <Text style={css.linha}>______________________</Text>
                    </View>
                    <View style={css.neto}>
                        <Text style={css.bold}>Total:</Text>
                        <Text style={css.naobold2}> R$174,00</Text>
                    </View>
                </View>
            </View>
            <Text style={css.texto}>Dados para entrega _________________________________________</Text>
            <TextInput placeholder="Nome" style={css.nome} placeholderTextColor={"#9D81BB"}/>
            <TextInput placeholder="Sobrenome" style={css.nome} placeholderTextColor={"#9D81BB"}/>
            <View style={css.mae}>
                <Text style={css.textodois}>Rua: *****************</Text>
                <Text style={css.textotres}>CEP: 17250-474 -- Jardim Industrial II</Text>
                <Text style={css.textodois}>Bariri - São Paulo</Text>
                <View style={css.irmao}>
                    <TextInput placeholder="Número" style={css.numero} placeholderTextColor={"#9D81BB"}/>
                    <TextInput placeholder="Complemento (Opcional)" style={css.casa} placeholderTextColor={"#9D81BB"}/>
                </View>
            </View>
            <Text style={css.titulo}>Dados para nota fiscal _____________________________________</Text>
            <TextInput placeholder="CPF/CPNJ" style={css.nome} placeholderTextColor={"#9D81BB"}/>
            <Text style={css.tituloum}>Formas de Pagamento _____________________________________</Text>
            <View style={css.pagamento}>
                <Image style={css.cartao} source={ require( "../assets/cartao.png" )}/>
                <Text style={css.textoquatro}>Cartão de Crédito</Text>
                <Text style={css.textoqua}>Até 2 parcelas sem juros </Text>
            </View>
            <View style={css.pagamento}>
                <Image style={css.boleto} source={ require( "../assets/boleto.png" )}/>
                <Text style={css.textoquatro}>Boleto Bancário</Text>
            </View>
            <View style={css.pagamento}>
                <Image style={css.pix} source={ require( "../assets/pix.png" )}/>
                <Text style={css.textoquatro}>PIX</Text>
            </View>
            <View style={css.pagamento}>
                <Image style={css.mercado} source={ require( "../assets/mercado.png" )}/>
                <Text style={css.textoquaq}>Até 2 parcelas sem juros </Text>
            </View>
            <TouchableOpacity style={css.botao} >
                <Text style={css.textobotao}>Finalizar Pedido</Text>
            </TouchableOpacity>
        </View>
    )
}
const css = StyleSheet.create({
    pai:{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 15,
    },
    filho:{
        backgroundColor: "#A15BBF",
        width: 150,
        height: 75, 
        marginLeft: 33,
        justifyContent: "center",
    },
    avo:{
        alignItems: "center"
    },
    texto:{
        fontSize: 14,
        color: "#8E44AD",
        fontWeight: "bold",
    },
    email:{
        borderColor: "#DDCCEF",
        borderWidth: 1,
        marginTop: 15,
        paddingLeft: 5,
        paddingRight: 5,
        height: 35,
    },
    nome:{
        borderColor: "#DDCCEF",
        borderWidth: 1,
        marginTop: 5,
        paddingLeft: 5,
        width: "90%",
        paddingRight: 5,
        height: 35,
    },
    mae:{
        width: "90%",
        height: 70,
        borderColor: "#DDCCEF",
        borderWidth: 1,
        marginTop: 5,
        paddingLeft: 5,
        paddingTop: 9,
    },
    textodois:{
        color: "#8E44AD",
        fontSize: 13,
    },
    textotres:{
        color: "#674B86",
        fontWeight: "bold",
        fontSize: 13,
    },
    irmao:{
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
    },
    casa:{
        width: "50%",
        height: 35,
        borderColor: "#DDCCEF",
        borderWidth: 1,
        paddingLeft: 5,
        marginLeft: 76,
        marginTop: 10,
    },
    numero:{
        width: "30%",
        height: 35,
        borderColor: "#DDCCEF",
        borderWidth: 1,
        paddingLeft: 5,
        marginLeft: -5.5,
        marginTop: 10,
    },
    titulo:{
        fontSize: 14,
        color: "#8E44AD",
        fontWeight: "bold",
        marginTop: 45,
    },
    tituloum:{
        fontSize: 14,
        color: "#8E44AD",
        fontWeight: "bold",
        marginTop: 10,
    },
    pagamento:{
        borderColor: "#DDCCEF",
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        height: 35,
        width: "90%",
        display: "flex",
        flexDirection: "row",
    },
    cartao:{
        resizeMode: "contain",
        width: "10%",
        marginTop: -233,
    },
    boleto:{
        resizeMode: "contain",
        width: "10%",
        marginTop: -233,
    },
    pix:{
        resizeMode: "contain",
        width: "10%",
        marginTop: -233,
    },
    mercado:{
        resizeMode: "contain",
        width: "25%",
        marginTop: -233,
    },
    textoquatro:{
        color: "#8E44AD",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 5,
    },
    textoqua:{
        fontSize: 11,
        color: "#8E44AD",
        marginTop: 10,
        marginLeft: 100,
    },
    textoquaq:{
        fontSize: 11,
        color: "#8E44AD",
        marginTop: 10,
        marginLeft: 143,
    },
    botao:{
        backgroundColor: "#A368BC",
        marginTop: 30,
        marginLeft: 175,
        width: "45%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
    },
    textobotao:{
        color: "white",
        fontWeight: "bold"
    },
    neto:{
        display: "flex",
        flexDirection: "row",
    },
    bold:{
        color: "white",
        fontWeight: "bold",
        marginLeft: 10,
    },
    linha:{
        color: "white",
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: -10,
    },
    naobold:{
        color: "white",
        fontSize: 11,
        marginTop: 3,
        marginLeft: 30,
    },
    naobold1:{
        color: "white",
        fontSize: 11,
        marginTop: 3,
        marginLeft: 58,
    },
    naobold2:{
        color: "white",
        fontSize: 11,
        marginTop: 3,
        marginLeft: 50,
    }
})