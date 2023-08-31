import React, { useState, useMemo, useEffect } from 'react';
import { Image } from 'react-native';
import { HomeTabStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import images from '../../index';
import { useTheme } from '@react-navigation/native';

const CommonMapView = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
               
            });
        })
    }, []);
   
    return (
        <MapView
            region={{
                latitude: 22.2990017,
                longitude: 70.7945285,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            initialRegion={position}
            showsUserLocation={true}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            style={HomeTabStyless.mapstyleset}
            provider={PROVIDER_GOOGLE}
        >
            <Marker 
                coordinate={{ latitude: 22.3010000, longitude: 70.7920280, }}>
                <Image resizeMethod='resize'
                    source={images.CarIcon}
                    style={HomeTabStyless.SetImahMapStyle}
                    resizeMode="contain"
                />
            </Marker>
            <Marker
                coordinate={{ latitude: 22.299017, longitude: 70.7937285, }}>
                <Image resizeMethod='resize'
                    source={images.CarIcon}
                    style={HomeTabStyless.SetImahMapStyle}
                    resizeMode="contain"
                />
            </Marker>
            <Marker
                coordinate={{ latitude: 22.299017, longitude: 70.7967285, }}>
                <Image resizeMethod='resize'
                    source={images.CarIcon}
                    style={HomeTabStyless.SetImahMapStyle}
                    resizeMode="contain"
                />
            </Marker>
        </MapView>
    );
};
export default CommonMapView;
