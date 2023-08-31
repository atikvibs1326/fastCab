import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, onPress } from 'react-native';
import { HomeTabStyles } from '../../../styles';
import { useTranslation } from "react-i18next";
import { Input, Container, CommonMapView } from '../../../components';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import images from '../../../index';
import Timeline from 'react-native-timeline-flatlist';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../../routes';

const HomeTab = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);

    const arrayList = {
        locationSearch: ''
    }
    const [change, setOnChange] = useState(arrayList);
  
    const data = [
        {
            title: <View><Text style={HomeTabStyless.WhereAreYouTitle}>{t("Where_Are_You_Place")}</Text>
                <Input  onChangeText={(text) => setOnChange({ ...change, locationSearch: text })}
                    value={change.locationSearch} inputStyle={HomeTabStyless.SearchPlaceStyle} /></View>, icon: <Image source={images.circle} resizeMode="contain" style={HomeTabStyless.DestinationIcon} />
        },
        { description: <TouchableOpacity onPress={() => navigation.navigate(RouteName.SELECTION_ADDRESS_SCREEN)}><Text style={HomeTabStyless.PickOtyle}>{t("Pick_Off")}</Text><Text style={HomeTabStyless.WhereTitle}>{t("where_You-Want_To")}</Text></TouchableOpacity>, icon: <Image source={images.endlocation} resizeMode="cover" style={HomeTabStyless.DestinationIcon} /> },
    ]
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
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
                            }}
                            query={{
                                key: 'ADD_API_KEY',
                                language: 'en',
                            }}
                        />
                    </View>
                </View>
                <View style={HomeTabStyless.WhereAreYouBoxWrap}>
                    <View style={HomeTabStyless.WhereAreYouBox}>
                        <Timeline
                            data={data}
                            circleSize={20}
                            circleColor='#fff'
                            lineColor={Colors.theme_background_topaz}
                            // options={{
                            //     style: { paddingTop: 10, }
                            // }}
                            isUsingFlatlist={true}
                            innerCircle={'icon'}
                            showTime={false}
                            titleStyle={HomeTabStyless.Title}
                            descriptionStyle={HomeTabStyless.DescriptionStyle}
                        />
                    </View>
                </View>
            </View>
        </Container>
    );
};
export default HomeTab;
