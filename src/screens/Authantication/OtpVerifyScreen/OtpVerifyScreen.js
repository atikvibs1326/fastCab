import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, ImageBackground, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { Otpstyle } from '../../../styles';
import images from '../../../index';
import RouteName from '../../../routes/RouteName';
import { Button, ConfirmationAlert, OTPInput } from '../../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const OtpScreenset = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const Otpstyles = useMemo(() => Otpstyle(Colors), [Colors]);
    const { navigation } = props;
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    var alertdata = {
        'logout': t("Resand_Otp_Text_Modal"),
        'loginSuccess': t("Login_Successfull"),
    }
    const onoknutton = () => {
        if (okbutton === false) okbutton;
        if (okbutton === true) navigation.navigate(RouteName.SIDE_NAVIGATOR)
    }
    return (
            <View style={Otpstyles.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Otpstyles.ScrollViewStyle}>
                    <KeyboardAvoidingView enabled>
                        <View style={Otpstyles.MinFlexView}>
                            <View style={Otpstyles.MinViewSecond}>
                                <Text style={Otpstyles.EnterSixDigitText}>{t("Enter_Six_Digit_OTP")}</Text>
                                <Text style={Otpstyles.paregraph}>{t("Enter_The_Otp_Title")}</Text>
                                <OTPInput
                                    style={Otpstyles.OtpViewStyles}
                                    pinnum={6}
                                    autoFocusOnLoad={false}
                                    codeInputFieldStyle={Otpstyles.CodeInputStyles}
                                    codeInputHighlightStyle={Otpstyles.CodeInputStyles}
                                />
                                <View style={Otpstyles.FlexRowText}>
                                    <Text style={Otpstyles.ParegraPhotpBottom}>{t("Didnt_Recevip_Otp")}</Text>
                                    <TouchableOpacity onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton(false);
                                    }}>
                                        <Text style={Otpstyles.ResendTextBold}>{t("Resend")}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Button onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.loginSuccess);
                                        Setokbutton(true);
                                    }} title={t("Verify_Text")} />
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                <ConfirmationAlert
                    message={alertMessage}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                    buttonminview={Otpstyles.buttonotp}
                    iconVisible={true}
                    buttonText={t("Ok")}
                />
            </View>
    );
};
export default OtpScreenset;
