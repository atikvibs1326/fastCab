import React, { useState, useMemo } from "react";
import { Text, View, Image, ScrollView, TextInput,StatusBar } from "react-native";
import { Creditcard, Style } from '../../styles';
import { Button, Container, AppHeader, Input, Spacing } from '../../components';
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { Colors } from "../../utils";

const CreditcardsScreen = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const Creditcards = useMemo(() => Creditcard(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);

  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [mobileNumber, setMobileNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const [CardNumber, setCardNumber] = useState('');

  const onChangeText = (text, type) => {
    if (type === 'mobile') setMobileNumber(text);
    if (type === 'password') setPassword(text);
    if (type === 'CvvNumber') setCvvNumber(text);
    if (type === 'CardNumber') setCardNumber(text);
  };
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <AppHeader Iconname={true} headerTitle={t("Card_SCREEN_Label")} onPress={() => navigation.replace(RouteName.PAYMENT_SCREEN)} />
      <View style={Creditcards.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={Styles.contentContainerStyle}
        >
          <View style={Creditcards.keybordtopviewstyle}>
            <View style={Creditcards.minflexview}>
              <View style={Creditcards.minviewsigninscreen}>
                <View style={Creditcards.setwidthimage}>
                  <Image source={images.creditcard_img} resizeMode='cover' style={Creditcards.Creditcards} />
                </View>
                <View style={Creditcards.setstyleinputtext}>
                  <Text style={Creditcards.textstyle}>{t("Name_Label")}</Text>
                  <Spacing />
                  <Input
                    placeholder="John Doi"
                    onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                    inputStyle={Creditcards.inputstyle}
                  />
                </View>
                <Text></Text>
                <View style={Creditcards.setstyleinputtext}>
                  <View>                    
                      <Text style={Creditcards.textstyle}>{t("Card_Number")}</Text>
                      <Spacing />
                      <Input
                        placeholder="8644 4356 8243 8070"
                        keyboardType="numeric"
                        maxLength={16}
                        onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                        inputStyle={Creditcards.inputstyle}
                      />                   
                  </View>
                </View>
                <View style={Creditcards.flexrowsetinput}>
                  <View style={Creditcards.setstyleinputtexttwo}>
                    <Text style={Creditcards.textstyle}>{t("mm_yy_Label")}</Text>
                    <Input
                      placeholder="02/24"
                      onChangeText={(text) => onChangeText(text, 'mobile')}
                      value={mobileNumber}
                      maxLength={4}
                      keyboardType="numeric"
                      inputStyle={Creditcards.inputstyleData}
                    />
                  </View>
                  <View style={Creditcards.setstyleinputtexttwo}>
                    <Text style={Creditcards.textstyle}>{t("cvv_Label")}</Text>

                    <Input
                      placeholder="502"
                      onChangeText={(text) => onChangeText(text, 'CvvNumber')}
                      value={CvvNumber}
                      maxLength={3}
                      keyboardType="numeric"
                      inputStyle={Creditcards.inputstyleData}
                    />
                  </View>
                </View>
                <View style={Creditcards.setbuttonstyle}>
                  <Button title={t("Pay_with_Card")}
                    onPress={() => navigation.replace(RouteName.PATMENT_SUCCESSFULL_SCREEN)}
                    buttonStyle={Creditcards.setbuttonCreditcardsavecard}
                    buttonTextStyle={Creditcards.setbuttontextstyle}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>

  );
};

export default CreditcardsScreen;
