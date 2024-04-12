import React, { useState } from 'react'
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Cadastro from './Cadastro';

export default function Login({ setLogado, setCadastro }) {

const[ email, setEmail ]= useState("");
const[ senha, setSenha ]= useState("");

function Login()
{
    Keyboard.dismiss();
    if( email == "Carol" && senha == "1234") {
        setLogado(true);
        alert('Bem-Vindo(a)!')
    }
    else( alert('Email ou senha inválidos! Tente novamente') )
}

function Cadastrar() {
    setLogado( true );
    setCadastro( true );
}

  return (
    <View style={css.View}>
        <View style={css.boxLogin}>
            <View style={css.boxImg}>
                <Image style={css.imgLogo} source={ require ('../assets/violeta-logo.png')}/>
            </View>
            <Text style={css.title} >Login</Text>
            <TextInput 
                style={css.input} 
                onChangeText={ (digitado) => setEmail(digitado) }
                value={email}
                placeholder="email"
            />
            <TextInput
                style={css.input} 
                onChangeText={ (digitado) => setSenha(digitado) }
                value={senha}
                placeholder="senha"
            />
            <TouchableOpacity style={css.buttonLogin} onPress={Login}>
                <Text style={css.textLogin} >INICIAR SESSÃO</Text>
            </TouchableOpacity>
            <View style={css.boxCadastro}>
                <Text>Ainda não tem uma conta?</Text>
                <TouchableOpacity style={css.buttonCadastrar} onPress={Cadastrar}>
                    <Text style={css.textCadastro}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const css = StyleSheet.create({
    View: {
        alignItems: "center",
        marginTop: 200,
    },
    title: {
        fontSize: 17,
        color: '#9347B7',
        fontWeight: 'bold',
        marginTop: 10,
    },
    boxLogin: {
        width: 340,
        height: 450,
        backgroundColor: "#F1CEFF",
        borderRadius: 15,
        borderColor: '#DC4EFF',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '90%',
        height: 45,
        borderWidth: 1,
        marginTop: 25,
        padding: 10,
        borderRadius: 3,
        borderColor: '#8E44AD',
        backgroundColor: '#ffff',
        opacity: 0.5,
        borderWidth: 0,
        borderBottomWidth: 1,
        
    },
    buttonLogin: {
        width: "90%",
        height: 40,
        backgroundColor: '#D87CFF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        borderRadius: 3,
    },
    textLogin: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonCadastrar: {
        height: 18,
        borderBottomWidth: 0.5,
        borderColor: '#CC02DE'
    },
    textCadastro: {
        color: '#B221BE',
        fontSize: 16,
    },
    boxCadastro: {
        flexDirection: 'row',
    },
    imgLogo: {
        resizeMode: 'contain',
        width:  700,
        height: 100,
    },
    boxImg: {
        width: '72%',
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    }

})