import { FlatList, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import DevolucaoThings from "../components/DevolucaoThings";

const textos = [
    {
        titulo1: "Política de Trocas e Devoluções",
        subtitulo: "Um produto estará apto para troca ou devolução se:",
        texto1: "1 - O produto recebido não for o produto que você comprou;",
        texto2: "2 - Possuir algum dano interno que prejudique a leitura",
        texto3: "3 - Capa rasgada;",
        texto4: "4 - Folhas soltas ou descolando;",
        texto5:"5 - Amassados grosseiros;",
        texto6:"Todos os nossos livros são embalados com plástico bolha e espuma para reduzir o risco de danos durante o transporte. Mas, em alguns casos, danos podem ocorrer. Se o dano ocasionado for grosseiro, o produto poderá ser trocado. Pequenos amassados nas extremidades não são razões elegíveis para troca.",
        texto7: "Caso seu livro possua dedicatória não será possível garantir um novo autógrafo.",
        texto8:"Para solicitar a troca ou devolução de um produto danificado, você deve:",
        texto9:"1 - Entrar em contato com a equipe de atendimento em até 7 sete dias após o recebimento do seu pedido;",
        texto10: "2 - Informar os dados da compra, número do pedido e nome do comprador;",
        texto11: "3 - Anexar imagens da avaria.",
        outrotitulo:"Observações",
        text1: "Você deverá solicitar a devolução através do Serviço de Atendimento ao Cliente (SAC). As despesas decorrentes de coleta ou postagem do produto serão custeadas pela Violeta.",
        text2: "Após a chegada do produto ao nosso escritório, a Violeta providenciará a restituição no valor total do(s) livro(s) e do frete pago para o envio inicial do pedido.",
        text3: "1. Devolução em compras com cartão de crédito: A administradora do cartão será notificada e o estorno ocorrerá na fatura seguinte ou na posterior, de uma só vez, seja qual for o número de parcelas utilizado na compra. O prazo de devolução e, ainda, a cobrança das parcelas remanescentes após o estorno integral do valor do produto no cartão de crédito do Cliente realizado pela loja, é de responsabilidade da administradora do cartão.",
        text4:"2. Devolução em compras pagas com boleto bancário ou débito em conta: A devolução será feita por meio de depósito bancário, em até 10 (dez) dias úteis, somente na conta corrente do(a) comprador(a), que deve ser individual. É necessário que o cliente forneça a conta através dos nossos canais de atendimento.",
    }
]


export default function Devolucao(){
    return(
        <FlatList
        data={textos}
        renderItem={({item}) => 
        <DevolucaoThings 
        titulo1={item.titulo1}
        subtitulo={item.subtitulo}
        texto1={item.texto1}
        texto2={item.texto2}
        texto3={item.texto3}
        texto4={item.texto4}
        texto5={item.texto5}
        texto6={item.texto6}
        texto7={item.texto7}
        texto8={item.texto8}
        texto9={item.texto9}
        texto10={item.texto10}
        texto11={item.texto11}
        outrotitulo={item.outrotitulo}
        text1={item.text1}
        text2={item.text2}
        text3={item.text3}
        text4={item.text4}
        />}/>
    )
}
