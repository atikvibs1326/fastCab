import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing, PasswordInput } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";

const LoginScreen = (props) => {
    const { Colors } = useTheme();
    const Logins = useMemo(() => Login(Colors), [Colors]);
    const { navigation } = props;
    const [mobileNumber, setMobileNumber] = useState('');
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');
    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };
    const { t } = useTranslation();

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    return (
        <Container>
            <View style={Logins.MinViewScreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={Logins.Container}>
                        <View style={Style.MinViewContent}>
                            <View style={Logins.ManViewLogins}>
                                <Image style={Logins.ImageSet} resizeMode='contain' source={images.App_logo} />
                            </View>
                            <Text style={Logins.LoginText}>{t("Login_Text")}</Text>
                            <Spacing space={SH(20)} />
                            <View style={Logins.InputSpaceView}>
                                <Input
                                    title={t("Mobile_Number")}
                                    placeholder={t("Mobile_Number")}
                                    onChangeText={(value) => setMobileNumber(value)}
                                    value={mobileNumber}
                                    inputType="numeric"
                                    maxLength={10}
                                    placeholderTextColor={Colors.gray_text_color}
                                />
                            </View>
                            <PasswordInput
                                name={passwordVisibility ? 'eye-off' : 'eye'}
                                label={t("Password_Text")}
                                placeholder={t("Password_Text")}
                                value={TextInputPassword}
                                onPress={() => { onChangeText("TextInputPassword") }}
                                onChangeText={(text) => setTextInputPassword(text)}
                                secureTextEntry={passwordVisibility}
                            />
                            <Spacing space={SH(10)} />
                            <View style={Logins.ViewTextStyle}>
                                <Text style={Logins.TextStyle}>{t("Dont_Have_Account")} <Text style={Logins.registerTextStyle} onPress={() => OnRegisterPress()}> {t("Register_Text")}</Text></Text>
                            </View>
                            <Spacing space={SH(40)} />
                            <View style={Logins.LoginButton}>
                                <Button
                                    title={t("Login_Text")}
                                    onPress={() => navigation.navigate(RouteName.OTP_VERYFY_SCREEN)}
                                />
                                 <TouchableOpacity onPress={() => navigation.navigate(RouteName.Forget_Password)}>
                                 <Spacing space={SH(10)} />
                                <Text style={Logins.ForgetPasswordStyles}>{t("Forgot_Password")}</Text>
                            </TouchableOpacity>
                            </View>
                           
                           
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}
export default LoginScreen;