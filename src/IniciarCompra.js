import { StyleSheet, View, Text, Image, TouchableOpacity, } from "react-native"

export default function IniciarCompra(){
      
    return(
        <View style={css.boxFather}>
            <View style={css.box}>
                <Text style={css.boxTitle}>Produtos selecionados</Text>
                <View style={css.boxImg}>
                    <View style={css.boxItem}><Image style={css.Img} source={ require ("../assets/SafiraDourada.png")}/>
                    <Text style={css.bookName}>Safira Dourada</Text>
                    </View>
                    <View style={css.boxItem}><Image style={css.Img} source={ require ("../assets/Eros.png")}/>
                    <Text style={css.bookName}>Eros Vol. 1</Text>
                    </View>
                    <View style={css.boxItem}><Image style={css.Img} source={ require ("../assets/rock-mafia.png")}/>
                    <Text style={css.bookName}>Rock Mafia</Text>
                    </View>
                </View>
                <View>
                    <Text style={css.boxSubTitle}>Subtotal(sem frete): R$144,00</Text>
                </View>
                <View style={css.boxInfo}>
                    <Text style={css.info}>Pedidos que incluem livros em pré-venda têm um prazo de envio estimado
                         de 45 a 65 dias úteis. Esse período se deve ao fato de que, quando um título
                        está em pré-venda, ele ainda precisa passar pelo processo de produção antes
                        de ser enviado.
                    </Text>
                </View>
                <View style={css.boxEntrega}>
                    <Text style={css.CEP}>Entrega par o CEP: 17250-474</Text>
                    <TouchableOpacity style={css.buttonCEP}>
                        <Text style={css.alterarCEP}>Alterar CEP</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.boxFrete}>
                    <Text style={css.Envio}>Envio a domicílio(frete):</Text>
                    <View style={css.freteFixo}>
                        <View style={css.checkList}></View>
                        <Text style={css.desc}>Fixo: Chega entre 20/03 a 27/03</Text>
                        <Text style={css.preco}>R$16,00</Text>
                    </View>
                    <View style={css.Pac}>
                        <View style={css.checkList}></View>
                        <Text style={css.desc}>PAC: Chega entre 15/03 a 20/03</Text>
                        <Text style={css.preco}>R$20,00</Text>
                    </View>
                    <View style={css.Sedex}>
                        <View style={css.checkListSedex}></View>
                        <Text style={css.descSedex}>SEDEX: Chega entre 14/03 a 18/03</Text>
                        <Text style={css.preco}>R$30,00</Text>
                    </View>
                </View>
                <TouchableOpacity style={css.buttonComprar}>
                    <Text style={css.textComprar}>Finalizar Compra</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    boxFather: {
        alignItems: "center",
        marginTop: 18,
    },
    box: {
        width: 370,
        height: 672,
        backgroundColor: "#8E44AD",
        borderRadius: 5,
        marginTop: -10,
    },
    boxTitle: {
        fontSize: 22,
        padding: 16,
        color: "white",
    },
    boxImg: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
    },
    Img: {
        width: "100%",
        height: 100,
        resizeMode: "contain",
    },
    boxItem: {
        width: "30%"
    },
    boxSubTitle: {
        fontSize: 19,
        paddingLeft: 16,
        color: "white",
        fontWeight: 'bold',
    },
    boxInfo: {
        width: 332,
        height:115,
        backgroundColor: "#F9F5EE",
        borderRadius: 4,
        margin: 17,
    },
    info: {
        textAlign: "justify",
        padding: 10,
    },
    bookName: {
        width: 100,
        marginLeft: 20,
        marginTop: 4,
        color: "white",
    },
    boxEntrega: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",

    },
    CEP: {
        marginRight: 12,
        color: 'white',
    },
    buttonCEP: {
        width: 100,
        height: 24,
        marginRight: 5,
        borderRadius: 3,
        backgroundColor: '#F1CEFF',
    },
    alterarCEP: {
        padding: 1.5,
        textAlign: 'center',
    },
    Envio: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    boxFrete: {
        margin: 16,
        gap: 2,
    },
    freteFixo: {
        width: '98%',
        height: 35,
        borderColor: '#BD69E0',
        borderLeftWidth: 6,
        borderWidth: 2,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Pac: {
        width: '98%',
        height: 35,
        borderColor: '#BD69E0',
        borderLeftWidth: 6,
        borderWidth: 2,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    Sedex: {
        width: '98%',
        height: 35,
        borderColor: '#BD69E0',
        borderWidth: 2,
        borderLeftWidth: 6,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    desc: {
        color: 'white',
        padding: 5,
        paddingRight: 20,
    },
    descSedex: {
        color: 'white',
        padding: 5,
        paddingLeft: 5,
    },
    preco: {
        color: 'white',
        padding: 5,
        justifyContent: 'space-between'
    },
    checkList: {
        width: 15,
        height: 15,
        backgroundColor: 'white',
        marginLeft:7,
        marginTop: 8,
    },
    checkListSedex: {
        width: 15,
        height: 15,
        backgroundColor: '#DC97F9',
        marginLeft:7,
        marginTop: 8,
    },
    buttonComprar: {
        width: '90%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1CEFF',
        borderRadius: 3,
        marginLeft: 15,
    },
    textComprar: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#8E44AD',
    }
})