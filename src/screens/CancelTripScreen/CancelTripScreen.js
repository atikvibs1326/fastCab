import React, { useState, useMemo } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { CancelTripScreenStyle, Style } from '../../styles';
import { useTranslation } from "react-i18next";
import { Button, Container, Spacing, CheckBox, ConfirmationAlert, AppHeader } from '../../components';
import { SH, } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../routes';
import { ScrollView } from 'react-native-virtualized-view';

const CancelTripScreen = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;
    const { Colors } = useTheme();
    const CancelTripScreenStyles = useMemo(() => CancelTripScreenStyle(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);

    const stateArray = {
        toggleCheckBoxCancel_1: false,
        toggleCheckBoxCancel_2: false,
        toggleCheckBoxCancel_3: false,
        toggleCheckBoxCancel_4: false,
        toggleCheckBoxCancel_5: false,
    };
    const [state, setState] = useState(stateArray);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    var alertdata = {
        'logout': t("Cancel_FeedBack"),
    }
    const onoknutton = () => {
        navigation.navigate(RouteName.HOME_SCREEN);
    }

    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
            <AppHeader Iconname={true} headerTitle={t("CancelTrip_Label")} onPress={() => navigation.replace(RouteName.HOME_SCREEN)} />
            <View style={CancelTripScreenStyles.MinViewScreen}>
                <ScrollView nestedScrollEnabled={true}>
                    <Spacing space={SH(50)} />
                    <View style={CancelTripScreenStyles.CancelTitleWrap}>
                        <Text style={CancelTripScreenStyles.CancelTitle}>{t("Cancel_Title")}</Text>
                    </View>
                    <Spacing space={SH(80)} />
                    <View style={CancelTripScreenStyles.PadHori}>
                        <View style={CancelTripScreenStyles.FlexRow}>
                            <CheckBox disabled={false}
                                value={state.toggleCheckBoxCancel_1}
                                tintColors={{ true: Colors.theme_background_topaz, false: Colors.theme_background_topaz }}
                                onValueChange={(text) => setState({ ...state, toggleCheckBoxCancel_1: text })} />
                            <Text style={CancelTripScreenStyles.CancelReason}>{t("CancelReason_One")}</Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={CancelTripScreenStyles.FlexRow}>
                            <CheckBox disabled={false}
                                value={state.toggleCheckBoxCancel_2}
                                tintColors={{ true: Colors.theme_background_topaz, false: Colors.theme_background_topaz }}
                                onValueChange={(text) => setState({ ...state, toggleCheckBoxCancel_2: text })} />
                            <Text style={CancelTripScreenStyles.CancelReason}>{t("CancelReason_Two")}</Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={CancelTripScreenStyles.FlexRow}>
                            <CheckBox disabled={false}
                                value={state.toggleCheckBoxCancel_3}
                                tintColors={{ true: Colors.theme_background_topaz, false: Colors.theme_background_topaz }}
                                onValueChange={(text) => setState({ ...state, toggleCheckBoxCancel_3: text })} />
                            <Text style={CancelTripScreenStyles.CancelReason}>{t("CancelReason_Three")}</Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={CancelTripScreenStyles.FlexRow}>
                            <CheckBox disabled={false}
                                value={state.toggleCheckBoxCancel_4}
                                tintColors={{ true: Colors.theme_background_topaz, false: Colors.theme_background_topaz }}
                                onValueChange={(text) => setState({ ...state, toggleCheckBoxCancel_4: text })} />
                            <Text style={CancelTripScreenStyles.CancelReason}>{t("CancelReason_Four")}</Text>
                        </View>
                        <Spacing space={SH(20)} />
                        <View style={CancelTripScreenStyles.FlexRow}>
                            <CheckBox disabled={false}
                                value={state.toggleCheckBoxCancel_5}
                                tintColors={{ true: Colors.theme_background_topaz, false: Colors.theme_background_topaz }}
                                onValueChange={(text) => setState({ ...state, toggleCheckBoxCancel_5: text })} />
                            <Text style={CancelTripScreenStyles.CancelReason}>{t("CancelReason_Five")}</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={CancelTripScreenStyles.ProceedPaymentBtn}>
                    <Button title={t("Submit_Label")} buttonStyle={CancelTripScreenStyles.ProceedPaymentcansle} onPress={() => {
                        setAlertVisible(true);
                        setAlertMessage(alertdata.logout);
                      
                    }} />
                    <Spacing space={SH(40)} />
                </View>
            </View>
            <ConfirmationAlert
                message={alertMessage}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                buttonText={t("Ok")}
                iconVisible={true}
                buttonminview={Styles.buttonotp}
            />
        </Container>
    );
};
export default CancelTripScreen;
