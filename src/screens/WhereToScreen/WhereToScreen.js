import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import { HomeTabStyles, WhereToScreenStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { Spacing, Input, Container, CommonMapView, VectorIcon,BottomSheet } from '../../components';
import { SH, SF } from '../../utils';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from '@react-native-community/geolocation';
import images from '../../index';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';

const WhereToScreen = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const WhereToScreenStyles = useMemo(() => WhereToScreenStyle(Colors), [Colors]);
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
            // console.log("crd",crd)
        })
    }, []);


    const arrayList = {
        locationSearch: ''
    }
    const [change, setOnChange] = useState(arrayList);

    const data = [
        {
            title: <View><Text style={HomeTabStyless.WhereAreYouTitle}>{t("Where_Are_You_Place")}</Text>
                <Input onChangeText={(text) => setOnChange({ ...change, locationSearch: text })}
                    value={change.locationSearch} inputStyle={HomeTabStyless.SearchPlaceStyle} /></View>, icon: <Image source={images.circle} resizeMode="contain" style={HomeTabStyless.DestinationIcon} />
        },
        { description: <TouchableOpacity onPress={() => navigation.navigate(RouteName.SELECTION_ADDRESS_SCREEN)}><Text style={HomeTabStyless.PickOtyle}>{t("Pick_Off")}</Text><Text style={HomeTabStyless.WhereTitle}>{t("where_You-Want_To")}</Text></TouchableOpacity>, icon: <Image source={images.endlocation} resizeMode="cover" style={HomeTabStyless.DestinationIcon} /> },
    ]
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
            {/* <View style={HomeTabStyless.minstyleviewphotograpgy}> */}
            <View style={HomeTabStyless.mapviewstyle}>
                <CommonMapView />
                <View style={HomeTabStyless.ProfileViewWrap}>
                    <TouchableOpacity style={HomeTabStyless.ProfileView}>
                        <Image source={images.HomeProfileImg} style={HomeTabStyless.ProfileImage} />
                    </TouchableOpacity>
                    <View style={HomeTabStyless.AutoCompleteWrap}>
                        <GooglePlacesAutocomplete
                            style={HomeTabStyless.Searchbar}
                            placeholder={t("Location_Label")}
                            onPress={(data, details = null) => {
                                // console.log(data, details, "details");
                            }}
                            query={{
                                key: 'ADD_YOUR_API_KEY',
                                language: 'en',
                            }}
                        />
                    </View>
                </View>
            </View>
            <BottomSheet>
                {(onScrollEndDrag) => (
                    <ScrollView onScrollEndDrag={onScrollEndDrag} showsVerticalScrollIndicator={false}>
                        <View>
                            <View style={WhereToScreenStyles.FlexRowJusBTN}>
                                <Text style={WhereToScreenStyles.WhereTOText}>{t("where_To_Label")}</Text>
                                <Text style={WhereToScreenStyles.CustomizeText}>{t("Customize_Label")}</Text>
                            </View>
                            <Spacing />
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style={WhereToScreenStyles.FlexRowJusBTN}>
                                    <TouchableOpacity style={WhereToScreenStyles.BoxAddress} onPress={() => navigation.navigate(RouteName.CHOOSE_TRIP)}>
                                        <View style={WhereToScreenStyles.BoxAddressIcon}><VectorIcon icon="Octicons" name='location' size={SF(25)} color={Colors.theme_background_topaz} /></View>
                                        <Spacing space={SH(10)} />
                                        <Text style={WhereToScreenStyles.LocationHeadText}>{t("New_Trip")}</Text>
                                        <Text style={WhereToScreenStyles.LocationText}>{t("Top_For_Location")}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={WhereToScreenStyles.BoxAddress} onPress={() => navigation.navigate(RouteName.CHOOSE_TRIP)}>
                                        <View style={WhereToScreenStyles.BoxAddressIcon}><VectorIcon icon="AntDesign" name='home' size={SF(25)} color={Colors.black_text_color} /></View>
                                        <Spacing space={SH(10)} />
                                        <Text style={WhereToScreenStyles.LocationHeadText}>{t("Home_Text")}</Text>
                                        <Text style={WhereToScreenStyles.LocationText}>{t("Home_Distance")}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={WhereToScreenStyles.BoxAddress} onPress={() => navigation.navigate(RouteName.CHOOSE_TRIP)}>
                                        <View style={WhereToScreenStyles.BoxAddressIcon}><VectorIcon icon="MaterialIcons" name='work' size={SF(25)} color={Colors.black_text_color} /></View>
                                        <Spacing space={SH(10)} />
                                        <Text style={WhereToScreenStyles.LocationHeadText}>{t("Work_Label")}</Text>
                                        <Text style={WhereToScreenStyles.LocationText}>{t("Work_Distance")}</Text>
                                    </TouchableOpacity>
                                </View>
                                <Spacing space={SH(20)} />
                            </ScrollView>
                            <Spacing space={SH(20)} />
                        </View>
                        <Spacing space={SH(10)} />
                    </ScrollView>
                )}
            </BottomSheet>
            {/* </View> */}
        </Container>
    );
};
export default WhereToScreen;
