import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet'

export default function Devolucao(){
    return(
        <View style={css.pai}>
            <View style={css.caixa}>
                <Text style={css.titulo}>Política de Trocas e Devoluções</Text>
                <Text style={css.subtitulo}>Um produto estará apto para troca ou devolução se:</Text>
                <Text style={css.texto}> 1 - O produto recebido não for o produto que você comprou; </Text>
                <Text style={css.texto}>2 - Possuir algum dano interno que prejudique a leitura</Text> 
                <Text style={css.texto}>3 - Capa rasgada;</Text>
                <Text style={css.texto}>4 - Folhas soltas ou descolando;</Text>                                                                                             
                <Text style={css.texto}> 5 - Amassados grosseiros;</Text>
                <Text style={css.textoum}>Todos os nossos livros são embalados com plástico bolha e espuma para reduzir o 
                risco de danos durante o transporte. Mas, em alguns casos, danos podem ocorrer. Se 
                o dano ocasionado for grosseiro, o produto poderá ser trocado. Pequenos amassados 
                nas extremidades não são razões elegíveis para troca.</Text>
                <Text style={css.aviso}>Caso seu livro possua dedicatória não será possível garantir um novo autógrafo.</Text>
                <Text style={css.subtitulo}>Para solicitar a troca ou devolução de um produto danificado, você deve:</Text>
                <Text style={css.texto}>1 - Entrar em contato com a equipe de atendimento em até 7 sete dias após o 
                recebimento do seu pedido;</Text>
                <Text style={css.texto}>2 - Informar os dados da compra, número do pedido e nome do comprador;</Text> 
                <Text style={css.texto}>3 - Anexar imagens da avaria.</Text>
                <Text style={css.obstitulo}>Observações</Text>
                <Text style={css.textoblack}>Você deverá solicitar a devolução através do Serviço de Atendimento ao Cliente 
                (SAC). As despesas decorrentes de coleta ou postagem do produto serão custeadas pela Violeta.</Text>
                <Text style={css.textoblack}>Após a chegada do produto ao nosso escritório, a Violeta providenciará a 
                restituição no valor total do(s) livro(s) e do frete pago para o envio inicial do pedido.</Text>
                <Text style={css.textoblack}>1. Devolução em compras com cartão de crédito: A administradora do cartão será 
                notificada e o estorno ocorrerá na fatura seguinte ou na posterior, de uma só vez, seja qual for o número de 
                parcelas utilizado na compra. O prazo de devolução e, ainda, a cobrança das parcelas remanescentes após o 
                estorno integral do valor do produto no cartão de crédito do Cliente realizado pela loja, é de responsabilidade 
                da administradora do cartão.</Text>
                <Text style={css.textoblack}>2.Devolução em compras pagas com boleto bancário ou débito em conta: A devolução será feita por meio de depósito 
                bancário, em até 10 (dez) dias úteis, somente na conta corrente do(a) comprador(a), que deve ser individual. É 
                necessário que o cliente forneça a conta através dos nossos canais de atendimento.</Text>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    titulo:{
        color:"#8E44AD",
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 60,
    },
    subtitulo:{
        color:"#8E44AD",
        fontSize: 15,
        marginTop: 5,
    },
    texto:{
        color:"#8E44AD",
        fontSize: 13,
    
    },
    textoum:{
        color: "#623476",
        fontSize: 13,
    },
    aviso:{
        color:"#8E44AD",
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5,
    },
    obs:{
        color:"#8E44AD",
        fontSize: 15,
    },
    textoblack:{
        fontSize: 13,
    },
    obstitulo:{
        marginTop: 5,
        marginBottom: 5,
        fontWeight: 'bold',
        
    },
    caixa:{
        width: '90%',
        marginTop: 20,
        textAlign: 'justify',
    },
    pai:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})
