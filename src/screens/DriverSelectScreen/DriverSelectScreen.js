import React, { useState, useMemo, } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { DriverSelectScreenStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { Button, CommonMapView, VectorIcon } from '../../components';
import { SF } from '../../utils';
import { useTheme } from '@react-navigation/native';
import images from '../../index';
import { RouteName } from '../../routes';
import LinearGradient from 'react-native-linear-gradient';

const DriverSelectScreen = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const DriverSelectScreenStyles = useMemo(() => DriverSelectScreenStyle(Colors), [Colors]);
  
    const arrayList = {
        locationSearch: '',
    }
    const [change, setOnChange] = useState(arrayList);

    const [select, setSelect] = useState(1);

    return (
        <View style={DriverSelectScreenStyles.minstyleviewphotograpgy}>
            <View style={DriverSelectScreenStyles.mapviewstyle}>
                <CommonMapView />
                <View style={[DriverSelectScreenStyles.ProfileViewWrap, DriverSelectScreenStyles.TextHeadingBox]}>
                    <TouchableOpacity style={DriverSelectScreenStyles.BackArrow} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                        <VectorIcon icon="AntDesign" name='arrowleft' size={SF(25)} color={Colors.black_text_color} />
                    </TouchableOpacity>
                    <Text style={DriverSelectScreenStyles.HeadingText}>{t("Searching_For_Driver_Label")}</Text>
                </View>
                <View style={DriverSelectScreenStyles.HeadingTitleBox}>
                    <Text style={DriverSelectScreenStyles.HeadingTitle}>{t("Searching_Ride")}</Text>
                    <Text style={DriverSelectScreenStyles.HeadingSubTitle}>{t("Searching_Sub_Ride")}</Text>
                </View>
                <LinearGradient colors={['transparent', Colors.bgWhite]}
                    start={{ x: 0, y: 1 }} end={{ x: 0, y: .5 }}
                    style={DriverSelectScreenStyles.LinearGradient}>
                    <View>
                        <View style={DriverSelectScreenStyles.CircleLow}>
                            <TouchableOpacity style={DriverSelectScreenStyles.DriverProfileLowView}>
                                <Image source={images.HomeProfileImg} style={DriverSelectScreenStyles.DriverProfileImage} />
                            </TouchableOpacity>
                            <View style={DriverSelectScreenStyles.CircleMedium}>
                                <TouchableOpacity style={DriverSelectScreenStyles.DriverProfileViewMedium}>
                                    <Image source={images.CarDriverThree} style={DriverSelectScreenStyles.DriverProfileImage} />
                                </TouchableOpacity>
                                <TouchableOpacity style={DriverSelectScreenStyles.CircleMediumDriverBox}>
                                    <View style={DriverSelectScreenStyles.CircleMediumSubDriverBox}>
                                        <View style={DriverSelectScreenStyles.DriverProfileView}>
                                            <Image source={images.CarDriverTwo} style={DriverSelectScreenStyles.DriverProfileImage} />
                                        </View>
                                        <View>
                                            <Text style={DriverSelectScreenStyles.DriverProfileName}>{t("Driver_Selected_Name")}</Text>
                                            <Text style={DriverSelectScreenStyles.DriverProfileDetails}>{t("Driver_Selected_Details")}</Text>
                                        </View>
                                        <View style={DriverSelectScreenStyles.TrianleStyle}>
                                        </View>
                                        <View style={DriverSelectScreenStyles.TrianleBorderStyle}>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={DriverSelectScreenStyles.CircleStrong}>
                                    <Image source={images.CarIcon} style={DriverSelectScreenStyles.CarIconStyle} resizeMode="contain" />
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                <View style={DriverSelectScreenStyles.ProceedPaymentBtn}>
                    <Button title={t("Proceed_To_Payment")} buttonStyle={DriverSelectScreenStyles.ProceedPayment} onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} />
                </View>
            </View>
            <View>
            </View>
        </View>
    );
};
export default DriverSelectScreen;
