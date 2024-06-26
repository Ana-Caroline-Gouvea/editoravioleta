import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

export default function CustomHeader({ setCarrinho }){

    return(
        <View style={css.Header}>
            <View style={css.logo}>
                <Image source={ require("../assets/logovioleta.png")} style={css.img}/>
            </View>
            <View style={css.icone}>
                <MaterialCommunityIcons name="account-circle" style={css.conta} />
                <TouchableOpacity>
                    <MaterialCommunityIcons  name="cart-variant" style={css.conta} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    Header:{
        backgroundColor: '#8E44AD',
        width: '100%',
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo:{
        width: '50%',
        resizeMode: 'contain',
        marginLeft: 15,
        justifyContent: 'center',
        marginTop: 25,
    },
    img:{
        resizeMode: 'contain',
        width: '100%',
    },
    icone:{
        resizeMode: 'contain',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginRight: 15,
        marginTop: 30,
    },
    conta:{
        fontSize: 30, 
        color: 'white',
    }
})
