import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { HomeTabStyles, SelectAddressStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { Spacing, Input, Container, CommonMapView, VectorIcon, BottomSheet } from '../../components';
import { SH, SF } from '../../utils';
import { useTheme } from '@react-navigation/native';
import images from '../../index';
import { RouteName } from '../../routes';
import Timeline from 'react-native-timeline-flatlist';
import { ScrollView } from 'react-native-virtualized-view';

const SelectAddress = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const SelectAddressStyles = useMemo(() => SelectAddressStyle(Colors), [Colors]);

    const arrayList = {
        locationSearch: ''
    }
    const [change, setOnChange] = useState(arrayList);

    const data = [
        {
            title: <View><Text style={HomeTabStyless.WhereAreYouTitle}>{t("Pick_Up_Point")}</Text>
                <Input onChangeText={(text) => setOnChange({ ...change, locationSearch: text })}
                    value={change.locationSearch} inputStyle={HomeTabStyless.SearchPlaceStyle} /></View>, icon: <Image source={images.circle} resizeMode="contain" style={HomeTabStyless.DestinationIcon} />
        },
        { description: <TouchableOpacity onPress={() => navigation.navigate(RouteName.WHERE_TO_SCREEN)}><Text style={HomeTabStyless.PickOtyle}>{t("Pick_Off")}</Text><Text style={HomeTabStyless.WhereTitle}>{t("where_You-Want_To")}</Text></TouchableOpacity>, icon: <Image source={images.endlocation} resizeMode="cover" style={HomeTabStyless.DestinationIcon} /> },
    ]

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
            <View style={HomeTabStyless.minstyleviewphotograpgy}>
                <View style={[HomeTabStyless.mapviewstyle, SelectAddressStyles.PadTop]}>
                    <CommonMapView />
                    <TouchableOpacity style={[HomeTabStyless.ProfileViewWrap, SelectAddressStyles.TextHeadingBox]}>
                        <TouchableOpacity style={SelectAddressStyles.BackArrow} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                            {/* <Image source={images.HomeProfileImg} style={HomeTabStyless.ProfileImage} /> */}
                            <VectorIcon icon="AntDesign" name='arrowleft' size={SF(25)} color={Colors.black_text_color} />
                        </TouchableOpacity>
                        <Text style={SelectAddressStyles.HeadingText}>{t("Select_Address")}</Text>
                    </TouchableOpacity>
                </View>
                
                    <BottomSheet>
                            <ScrollView>
                                <View>
                                    <Timeline
                                        data={data}
                                        circleSize={20}
                                        circleColor='#fff'
                                        lineColor={Colors.theme_background_topaz}
                                        isUsingFlatlist={true}
                                        innerCircle={'icon'}
                                        showTime={false}
                                        titleStyle={HomeTabStyless.Title}
                                        descriptionStyle={HomeTabStyless.DescriptionStyle}
                                    />
                                    <Spacing space={SH(30)} />
                                    <View style={SelectAddressStyles.FlexRowSpBtn}>
                                        <View style={SelectAddressStyles.FlexRowOnly}>
                                            <VectorIcon icon="FontAwesome" name='bookmark' color={Colors.theme_background_topaz} size={SF(20)} /><Text style={SelectAddressStyles.SavedPlaceText}>{t("Saved_Placed_Label")}</Text>
                                        </View>
                                        <TouchableOpacity style={SelectAddressStyles.DirectionArrowBox} onPress={() => navigation.navigate(RouteName.WHERE_TO_SCREEN)}>
                                            <VectorIcon icon="AntDesign" name='arrowright' color={Colors.black_text_color} size={SF(20)} />
                                        </TouchableOpacity>
                                    </View>
                                    <Spacing space={SH(15)} />
                                    <View style={SelectAddressStyles.PaddHor}>
                                        <TouchableOpacity style={[SelectAddressStyles.FlexRowOnly, SelectAddressStyles.AddBox]} onPress={() => navigation.navigate(RouteName.WHERE_TO_SCREEN)}>
                                            <View style={SelectAddressStyles.SavedIconWidth}>
                                                <VectorIcon icon="MaterialIcons" name='work' color={Colors.black_text_color} size={SF(20)} />
                                            </View>
                                            <View style={SelectAddressStyles.SavedAddWidth}>
                                                <View style={SelectAddressStyles.FlexRowOnly}>
                                                    <Text style={SelectAddressStyles.AddLabelName}>{t("Work_Label")}</Text><Text style={SelectAddressStyles.AddDistanceTime}>{t("Distance_Time_Label")}</Text>
                                                </View>
                                                <Spacing space={SH(5)} />
                                                <Text style={SelectAddressStyles.AddressText}>{t("Office_Saved_Address_Label")}</Text>
                                            </View>
                                            <TouchableOpacity style={SelectAddressStyles.SavedEditIconWidth} onPress={() => navigation.navigate(RouteName.WHERE_TO_SCREEN)}>
                                                <VectorIcon icon="Feather" name='edit' color={Colors.black_text_color} size={SF(20)} />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    </View>
                                    <Spacing />
                                    <View style={SelectAddressStyles.PaddHor}>
                                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.WHERE_TO_SCREEN)} style={[SelectAddressStyles.FlexRowOnly, SelectAddressStyles.AddBox]}>
                                            <View style={SelectAddressStyles.SavedIconWidth}>
                                                <VectorIcon icon="MaterialIcons" name='home' color={Colors.black_text_color} size={SF(23)} />
                                            </View>
                                            <View style={SelectAddressStyles.SavedAddWidth}>
                                                <View style={SelectAddressStyles.FlexRowOnly}>
                                                    <Text style={SelectAddressStyles.AddLabelName}>{t("Home_Text")}</Text><Text style={SelectAddressStyles.AddDistanceTime}>{t("Distance_Time_Label")}</Text>
                                                </View>
                                                <Spacing space={SH(5)} />
                                                <Text style={SelectAddressStyles.AddressText}>{t("Home_Saved_Address_Label")}</Text>
                                            </View>
                                            <TouchableOpacity style={SelectAddressStyles.SavedEditIconWidth} onPress={() => navigation.navigate(RouteName.WHERE_TO_SCREEN)}>
                                                <VectorIcon icon="Feather" name='edit' color={Colors.black_text_color} size={SF(20)} />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    </View>
                                    <Spacing space={SH(20)} />
                                    <View style={SelectAddressStyles.FlexRowJuCen}>
                                        <View style={SelectAddressStyles.Line}></View>
                                        <Text style={SelectAddressStyles.RecentText}>{t("Recent_Label")}</Text>
                                        <View style={SelectAddressStyles.Line}></View>
                                    </View>
                                    <Spacing space={SH(20)} />
                                    <View style={SelectAddressStyles.PaddHor30}>
                                        <View style={SelectAddressStyles.FlexRowOnly}>
                                            <VectorIcon icon="Octicons" name='location' color={Colors.gray_text_color} size={SF(20)} />
                                            <Text style={SelectAddressStyles.RecentAddText}>{t("Lorium_Lipsum_Lebal")}</Text>
                                        </View>
                                        <Spacing space={SH(20)} />
                                        <View style={SelectAddressStyles.FlexRowOnly}>
                                            <VectorIcon icon="Octicons" name='location' color={Colors.gray_text_color} size={SF(20)} />
                                            <Text style={SelectAddressStyles.RecentAddText}>{t("Lorium_Lipsum__Two_Lebal")}</Text>
                                        </View>
                                    </View>
                                </View>
                                <Spacing space={SH(20)} />
                            </ScrollView>
                    </BottomSheet>
                <View>
                </View>
            </View>
        </Container>
    );
};
export default SelectAddress;
