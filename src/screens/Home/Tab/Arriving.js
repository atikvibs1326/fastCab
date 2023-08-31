import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, Linking } from 'react-native';
import { ArrivingScreenStyle } from '../../../styles';
import { useTranslation } from "react-i18next";
import { Spacing, Container, VectorIcon } from '../../../components';
import { SH, SF } from '../../../utils';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import images from '../../../index';
import MapViewDirections from 'react-native-maps-directions';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../../routes';

const Arriving = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { Colors } = useTheme();
  const ArrivingScreenStyles = useMemo(() => ArrivingScreenStyle(Colors), [Colors]);

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const chibaRegion = {
    latitude: 22.299017,
    longitude: 70.7967285,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

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


  const arrayList = {
    locationSearch: ''
  }
  const [change, setOnChange] = useState(arrayList);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <View style={ArrivingScreenStyles.minstyleviewphotograpgy}>
        <View style={ArrivingScreenStyles.mapviewstyle}>
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
            style={ArrivingScreenStyles.mapstyleset}
            provider={PROVIDER_GOOGLE}
          >
            <Marker             
              coordinate={{ latitude: 22.3010000, longitude: 70.7920280, }}>
              <Image resizeMethod='resize'
                source={images.CarIcon}
                style={ArrivingScreenStyles.SetImahMapStyle}
                resizeMode="contain"
              />
            </Marker>
            <Marker            
              coordinate={{ latitude: 22.299017, longitude: 70.7937285, }}>
              <Image resizeMethod='resize'
                source={images.CarIcon}
                style={ArrivingScreenStyles.SetImahMapStyle}
                resizeMode="contain"
              />
            </Marker>
            <Marker            
              coordinate={{ latitude: 22.299017, longitude: 70.7967285, }}>
              <Image resizeMethod='resize'
                source={images.CarIcon}
                style={ArrivingScreenStyles.SetImahMapStyle}
                resizeMode="contain"
              />
            </Marker>
            <MapViewDirections
              origin={chibaRegion}
              destination={position}
              apikey="ADD_API_KEY" 
              strokeWidth={5}
              strokeColor={Colors.blue_color}
            />
          </MapView>
          <View style={ArrivingScreenStyles.WhereAreYouBoxWrap}>
            <View style={ArrivingScreenStyles.WhereAreYouBox}>
              <View style={ArrivingScreenStyles.FlexRoWSpBtn}>
                <Text style={ArrivingScreenStyles.ArrivingTitle}>{t("Arriving_Label")}</Text>
                <Text style={ArrivingScreenStyles.ArrivingTime}>{t("Arriving_Time_Label")}</Text>
              </View>
              <Spacing />
              <View style={ArrivingScreenStyles.FlexRow}>
                <View style={ArrivingScreenStyles.width60}>
                  <View style={ArrivingScreenStyles.FlexRow}>
                    <View style={ArrivingScreenStyles.CarDriverAvtarWrap}>
                      <Image source={images.CarDriverTwo} style={ArrivingScreenStyles.CarDriverAvtar} />
                    </View>
                    <View>
                      <Text style={ArrivingScreenStyles.DriverAvtarName}>{t("Driver_Selected_Name")}</Text>
                      <View style={ArrivingScreenStyles.FlexRow}>
                        <VectorIcon  icon="FontAwesome5" name='car' size={SF(20)} color={Colors.theme_background_topaz} /><Text style={ArrivingScreenStyles.Taxi_Modal}>{t("Taxi_Modal_Name")}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={ArrivingScreenStyles.width40}>
                  <View style={ArrivingScreenStyles.FlexRow}>
                    <VectorIcon icon="AntDesign" name='star' size={SF(15)} color={Colors.theme_background_topaz} /><Text style={ArrivingScreenStyles.RateStyle}>4.1</Text>
                  </View>
                  <View style={ArrivingScreenStyles.TaxiNumberWrap}>
                    <Text style={ArrivingScreenStyles.TaxiNumber}>{t("Taxi_Number_Plate")}</Text>
                  </View>
                </View>
              </View>
              <Spacing space={SH(30)} />
              <View style={[ArrivingScreenStyles.FlexRoWSpBtn, ArrivingScreenStyles.SpaceHori]}>
                <TouchableOpacity style={ArrivingScreenStyles.TaxiOptionBox} onPress={() => navigation.navigate(RouteName.CANCEL_TRIP_SCREEN)}>
                <VectorIcon icon="AntDesign" name='close' size={SF(20)} color={Colors.black_text_color} />
                </TouchableOpacity>
                <TouchableOpacity style={ArrivingScreenStyles.TaxiBgOptionBox} onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}>
                  <VectorIcon  icon="Ionicons" name='chatbox' size={SF(20)} color={Colors.black_text_color} />
                </TouchableOpacity>
                <TouchableOpacity style={ArrivingScreenStyles.TaxiBgOptionBox} onPress={() => Linking.openURL(`tel:${9426362297}`)}>
                  <VectorIcon  icon="Ionicons" name='call' size={SF(20)} color={Colors.black_text_color} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};
export default Arriving;

