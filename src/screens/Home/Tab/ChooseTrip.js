import React, { useState, useMemo, } from 'react';
import { View, Text, TouchableOpacity,StatusBar } from 'react-native';
import { HomeTabStyles, CarSelectScreenStyle } from '../../../styles';
import { useTranslation } from "react-i18next";
import { Spacing, CommonMapView, Button, Container ,VectorIcon,BottomSheet} from '../../../components';
import { SH, SF } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import { ScrollView } from 'react-native-virtualized-view';

const ChooseTrip = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const HomeTabStyless = useMemo(() => HomeTabStyles(Colors), [Colors]);
    const CarSelectScreenStyles = useMemo(() => CarSelectScreenStyle(Colors), [Colors]);

    const arrayList = {
        locationSearch: '',
    }
    const [change, setOnChange] = useState(arrayList);

    const [select, setSelect] = useState(1);

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
            <View style={HomeTabStyless.minstyleviewphotograpgy}>
                <View style={HomeTabStyless.mapviewstyle}>
                   <CommonMapView />
                </View>
                <BottomSheet>
                    {(onScrollEndDrag) => (
                        <ScrollView  nestedScrollEnabled={true} onScrollEndDrag={onScrollEndDrag} showsVerticalScrollIndicator={false}>
                            <View><Text style={CarSelectScreenStyles.SelectCarHeadingStyle}>{t("Select_Car_Lebal")}</Text></View>
                            <Spacing space={SH(25)} />
                            <View style={CarSelectScreenStyles.TaxiBoxWrap}>
                                <TouchableOpacity onPress={() => setSelect(0)} style={select == 0 ? CarSelectScreenStyles.TaxiBoxActive : CarSelectScreenStyles.TaxiBox} >
                                    <VectorIcon  icon="FontAwesome5" name='taxi' size={SF(24)} color={Colors.black_text_color} />
                                    <Spacing />
                                    <Text style={CarSelectScreenStyles.TaxiServiceType}>{t("Normal_Label")}</Text>
                                    <Text style={CarSelectScreenStyles.TaxiNearby}>{t("Normal_Nearby_Label")}</Text>
                                    <Spacing />
                                    <View style={CarSelectScreenStyles.PriceBox}>
                                        <VectorIcon  icon="Foundation" name='dollar' size={SF(18)} color={Colors.black_text_color} /><Text style={CarSelectScreenStyles.TaxiPeiceStyle}>{t("Normal_Price_Label")}</Text><Text style={CarSelectScreenStyles.TaxiPeiceSrcondStyle}>{t("Normal_Price_Second_Label")}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelect(1)} style={select == 1 ? CarSelectScreenStyles.TaxiBoxActive : CarSelectScreenStyles.TaxiBox} >
                                    <VectorIcon  icon="MaterialIcons" name='local-taxi' size={SF(28)} color={Colors.black_text_color} />
                                    <Spacing />
                                    <Text style={CarSelectScreenStyles.TaxiServiceType}>{t("Standard_Label")}</Text>
                                    <Text style={CarSelectScreenStyles.TaxiNearby}>{t("Standard_Nearby_Label")}</Text>
                                    <Spacing />
                                    <View style={CarSelectScreenStyles.PriceBox}>
                                        <VectorIcon  icon="Foundation" name='dollar' size={SF(18)} color={Colors.black_text_color} /><Text style={CarSelectScreenStyles.TaxiPeiceStyle}>{t("Standard_Price_Label")}</Text><Text style={CarSelectScreenStyles.TaxiPeiceSrcondStyle}>{t("Standard_Price_Second_Label")}</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSelect(2)} style={select == 2 ? CarSelectScreenStyles.TaxiBoxActive : CarSelectScreenStyles.TaxiBox}>
                                    <VectorIcon  icon="Fontisto" name='taxi' size={SF(22)} color={Colors.black_text_color} />
                                    <Spacing />
                                    <Text style={CarSelectScreenStyles.TaxiServiceType}>{t("Premium_Label")}</Text>
                                    <Text style={CarSelectScreenStyles.TaxiNearby}>{t("Premium_Nearby_Label")}</Text>
                                    <Spacing />
                                    <View style={CarSelectScreenStyles.PriceBox}>
                                        <VectorIcon  icon="Foundation" name='dollar' size={SF(18)} color={Colors.black_text_color} /><Text style={CarSelectScreenStyles.TaxiPeiceStyle}>{t("Premium_Price_Label")}</Text><Text style={CarSelectScreenStyles.TaxiPeiceSrcondStyle}>{t("Premium_Price_Second_Label")}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Spacing space={SH(35)} />
                            <View style={CarSelectScreenStyles.TaxiBoxWrap}>
                                <View style={CarSelectScreenStyles.FlexWrap}><VectorIcon  icon="FontAwesome5" name='map-marked-alt' size={SF(18)} color={Colors.gray_text_color} /><Text style={CarSelectScreenStyles.TaxiDistance}>{t("Distance_Km_Label")}</Text></View>
                                <View style={[CarSelectScreenStyles.FlexWrap, CarSelectScreenStyles.BorderHpri]}><VectorIcon  icon="MaterialCommunityIcons" name='map-clock-outline' size={SF(23)} color={Colors.gray_text_color} /><Text style={CarSelectScreenStyles.TaxiDistance}>{t("Distance_Km_Label")}</Text></View>
                                <View style={CarSelectScreenStyles.FlexWrap}><VectorIcon  icon="Foundation" name='dollar' size={SF(25)} color={Colors.gray_text_color} /><Text style={CarSelectScreenStyles.TaxiDistance}>{t("Distance_Km_Label")}</Text></View>
                            </View>
                            <Spacing space={SH(30)} />
                            <Button title={t("Book_Label")} onPress={() => navigation.navigate(RouteName.DRIVER_SELECT_SCREEN)} />
                            <Spacing space={SH(20)} />
                        </ScrollView>
                    )}
                </BottomSheet>
                <View>
                </View>
            </View>
        </Container>

    );
};
export default ChooseTrip;

