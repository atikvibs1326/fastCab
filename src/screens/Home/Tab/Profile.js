import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, Modal, ScrollView } from "react-native";
import { ProfileTabStyles, Style } from '../../../styles';
import { Button, Spacing, Input, VectorIcon, ConfirmationAlert, PasswordInput } from '../../../components';
import { SH, SF } from '../../../utils';
import images from "../../../index";
import RouteName from "../../../routes/RouteName";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const ProfileTab = (props) => {
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const { navigation } = props;
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const [passwordVisibilityold, setpasswordVisibilityold] = useState(true);
  const [passwordVisibilitynew, setpasswordVisibilitynew] = useState(true);
  const [passwordVisibilityconfirm, setPasswordVisibilityconfirm] = useState(true);

  const stateArray = {
    Oldpassword: "",
    Newpassword: "",
    email: "",
    Confirmpassword: "",
    number: null,
  };
  const [state, setState] = useState(stateArray);
  const onChangeText = (text) => {
    if (text === 'Oldpassword') setpasswordVisibilityold(!passwordVisibilityold);
    if (text === 'Newpassword') setpasswordVisibilitynew(!passwordVisibilitynew);
    if (text === 'Confirmpassword') setPasswordVisibilityconfirm(!passwordVisibilityconfirm);
  };
  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalVisible(false);
      setmodalcontent(0);
    });
  }, [navigation]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  }
  return (
    <View style={ProfileTabStyle.BackgroundWhite}>
      <View style={ProfileTabStyle.whilistminbody}>
        <ScrollView>
          <Spacing space={SH(30)} />
          <View style={ProfileTabStyle.ImagCenter}>
            <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={images.ProfileImg} />
            <Text style={ProfileTabStyle.profileUserName}>{t("Allison_Perry")}</Text>
          </View>
          <View style={ProfileTabStyle.ProfileDetailesMinview}>
            <Text style={ProfileTabStyle.EditProFile}>
              {t("Edit_Profile")}
            </Text>
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.BgWhiteShadow}>
                <View>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Phone_Number")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>96034 56878</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(1) }}>
                    <View>
                      <VectorIcon
                        icon="EvilIcons"
                        size={SF(30)}
                        name="pencil"
                        color={Colors.gray_text_color}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.BgWhiteShadow}>
                <View style={ProfileTabStyle.setpadiingtext}>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Email_Text")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>{t("Testemail")}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(2) }}>
                    <View>
                      <VectorIcon
                        icon="EvilIcons"
                        size={SF(30)}
                        name="pencil"
                        color={Colors.gray_text_color}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={ProfileTabStyle.PhoneNumberAndIcon}>
              <View style={ProfileTabStyle.BgWhiteShadow}>
                <View>
                  <Text style={ProfileTabStyle.PhoneNumberText}>{t("Password_Text")}</Text>
                  <Text style={ProfileTabStyle.DigitNumberText}>******</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(3) }}>
                    <View>
                      <VectorIcon
                        icon="EvilIcons"
                        size={SF(30)}
                        name="pencil"
                        color={Colors.gray_text_color}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Spacing space={SH(20)} />
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.SETTING_SCREEN)}>
              <View style={ProfileTabStyle.IconAndTextFlex}>
                <Text style={ProfileTabStyle.LogOutView}>{t("Setting_Text")}</Text>
                <VectorIcon
                  icon="AntDesign"
                  size={SF(27)}
                  name="arrowright"
                  color={Colors.theme_background}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setAlertVisible(true);
              setAlertMessage(alertdata.logout);
            }}>
              <View style={ProfileTabStyle.IconAndTextFlex}>
                <Text style={ProfileTabStyle.LogOutView}>{t("Log_Out")}</Text>
                <VectorIcon icon="AntDesign" size={SF(27)} name="arrowright"
                  color={Colors.theme_background}
                />
              </View>
            </TouchableOpacity>

            {/* Modal Start */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => { setModalVisible(!modalVisible) }}
            >
              <View style={ProfileTabStyle.CenteredView}>
                <View style={ProfileTabStyle.ModalView}>
                  <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                    <View style={ProfileTabStyle.AllPaddingModal}>
                      <TouchableOpacity style={ProfileTabStyle.IconClose} onPress={() => setModalVisible(!modalVisible)}>
                        <VectorIcon
                          icon="AntDesign"
                          size={SF(25)}
                          name="close"
                          color={Colors.black_text_color}
                        />
                      </TouchableOpacity>
                      <View>
                        {modalcontent === 1 ?
                          <Text style={ProfileTabStyle.ModalText}>{t("Change_Phone_Number")}</Text>
                          :
                          modalcontent === 2 ?
                            <Text style={ProfileTabStyle.ModalText}>{t("Change_Email")}</Text>
                            :
                            <Text style={ProfileTabStyle.ModalText}>{t("change_Your_Password")}</Text>
                        }
                        <Spacing space={SH(10)} />

                        {modalcontent === 1 ?
                          <Input
                            onChangeText={(text) => setState({ ...state, number: text })}
                            value={state.number}
                            placeholder="9603456878"
                            placeholderTextColor={Colors.gray_text_color}
                            inputType="numeric"
                            inputStyle={Style.Inputplace}
                          />
                          :
                          modalcontent === 2 ?
                            <View>
                              <Input
                                onChangeText={(text) => setState({ ...state, email: text })}
                                value={state.email}
                                placeholder={t("Exam_Email_Text")}
                                placeholderTextColor={Colors.gray_text_color}
                                inputStyle={Style.Inputplace}
                              />
                            </View>
                            :
                            modalcontent === 3 ?
                              <>
                                <View style={Style.InputViewWidth}>
                                  <Spacing space={SH(10)} />
                                  <PasswordInput
                                    name={passwordVisibilityold ? 'eye-off' : 'eye'}
                                    label={t("Old_Password")}
                                    placeholder={t("Old_Password")}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibilityold}
                                    onChangeText={(text) => setState({ ...state, Oldpassword: text })}
                                    value={state.Oldpassword}
                                    onPress={() => { onChangeText("Oldpassword") }}
                                    inputStyle={Style.Inputplace}
                                  />
                                  <Spacing space={SH(5)} />
                                  <PasswordInput
                                    name={passwordVisibilitynew ? 'eye-off' : 'eye'}
                                    label={t("New_Password")}
                                    placeholder={t("New_Password")}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibilitynew}
                                    onChangeText={(text) => setState({ ...state, Newpassword: text })}
                                    value={state.Newpassword}
                                    enablesReturnKeyAutomatically
                                    inputStyle={Style.Inputplace}
                                    onPress={() => { onChangeText("Newpassword") }}
                                  />
                                  <Spacing space={SH(5)} />
                                  <PasswordInput
                                    name={passwordVisibilityconfirm ? 'eye-off' : 'eye'}
                                    label={t("Conform_Password")}
                                    placeholder={t("Conform_Password")}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibilityconfirm}
                                    onChangeText={(text) => setState({ ...state, Confirmpassword: text })}
                                    value={state.Confirmpassword}
                                    enablesReturnKeyAutomatically
                                    inputStyle={Style.Inputplace}
                                    onPress={() => { onChangeText("Confirmpassword") }}
                                  />
                                </View>
                                <Spacing space={SH(10)} />
                              </>
                              :
                              <Text style={ProfileTabStyle.ModalText}>{t("Are_You_Sure")}</Text>
                        }

                        {modalcontent === 1 || modalcontent === 2 || modalcontent === 3 ?
                          <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                            <View style={ProfileTabStyle.Marginright}>
                              <Button onPress={() => setModalVisible(!modalVisible)}
                                buttonTextStyle={{ color: Colors.white_text_color }}
                                title={t("Ok")} />
                            </View>
                            <View style={ProfileTabStyle.Marginright}>
                              <Button buttonStyle={ProfileTabStyle.SingleButtonStyles} buttonTextStyle={ProfileTabStyle.SingleButtonText} title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} />
                            </View>
                          </View>
                          :
                          <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                            <View style={ProfileTabStyle.MarginRightView}>
                              <Button title={t("Log_Out")} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)} />
                            </View>
                            <View style={ProfileTabStyle.MarginRightView}>
                              <Button title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} buttonStyle={ProfileTabStyle.SingleButtonStyles} buttonTextStyle={ProfileTabStyle.SingleButtonText}
                              />
                            </View>
                          </View>
                        }
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <ConfirmationAlert
            message={alertMessage}
            modalVisible={alertVisible}
            setModalVisible={setAlertVisible}
            onPressCancel={() => setAlertVisible(!alertVisible)}
            onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
            cancelButtonText={t("Cancel_Button")}
            buttonText={t("Ok")}
            cancelButtonTextStatus={true}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default ProfileTab;