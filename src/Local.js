import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect, useRef } from "react";
import  MapView, {Marker} from "react-native-maps";
import * as Location from 'expo-location';


export default function Local ()
{
    const [ localizacao , setLocalizacao ] = useState(null);
    const mapRef = useRef();
    async function PegarLocalizacao()
    {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if ( granted ) {
            const posicao = await Location.getCurrentPositionAsync({});
            setLocalizacao( posicao );
        }
        
        
    }

    useEffect( () => {
        PegarLocalizacao();

        Location.watchPositionAsync({
            accuracy: Location.LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocalizacao( response );
            mapRef.current?.animateCamera({
                center: response.coords
            })
        }
        );
            
    } , []);
    return(
        <View>
            { localizacao &&
            <MapView 
            style={css.map}
            ref={mapRef}
            initialRegion={{
                latitude: localizacao?.coords.latitude,
                longitude: localizacao?.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            
        
            >
                <Marker coordinate={{
                    latitude: localizacao?.coords.latitude,
                    longitude: localizacao?.coords.longitude
                }}/>
            </MapView>
            }
        </View>
    )
}
const css = StyleSheet.create ({
    map: {
        width: "100%",
        height: "100%"
    }
})