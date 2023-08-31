import React, { useState, useMemo } from "react";
import { Text, View, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { PaymentStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@react-navigation/native';
import {  PaymentListView } from "../../components";
import { ScrollView } from 'react-native-virtualized-view';

const PaymentScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);
  const [show, setShow] = useState(null);
  const toggleHandler = (index) => {
    (index === show) ? setShow(null) : setShow(index)
  };
 const Paymentdata = [
    {
      "id": 1,
      "paymentparegraph": "Payment_screen_Paragraph_One",
      "image": images.gpay_upi_img,
      "smalltext": "Pay_Via_UPI_Label",
      "walletstextset": "Wallets_Lebal",
    },
    {
      "id": 2,
      "paymentparegraph": "Payment_screen_Paragraph_Two",
      "image": images.paytem_img,
      "smalltext": "Paytm_Label",
    },
    {
      "id": 3,
      "paymentparegraph": "Payment_screen_Paragraph_Three",
      "image": images.Mobikwikimage_img,
      "smalltext": "MobikWik_Label",
    },
    {
      "id": 4,
      "paymentparegraph": "Payment_screen_Paragraph_Four",
      "image": images.Mobikwikimage_img,
      "smalltext": "Freecharge_Label",
    },
  ]
  return (
    <View style={PaymentStyles.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgwhite} />
      <ScrollView nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={PaymentStyles.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={PaymentStyles.minflexview}>
            <View style={PaymentStyles.minviewsigninscreen}>
              <View>
                <Text style={PaymentStyles.cardtextstyletwo}>{t("UPI_Label")}</Text>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.paytem_img} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Paytm_UPI_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.gpay_upi_img} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("Google_Pay_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.flexrowcreditcardtwo} onPress={() => navigation.navigate(RouteName.PATMENT_SUCCESSFULL_SCREEN)}>
                  <View style={PaymentStyles.iconsetborderwidth}>
                    <Image source={images.Mobikwikimage_img} resizeMode='center' style={PaymentStyles.setbgimage} />
                  </View>
                  <Text style={PaymentStyles.creditcardtext}>{t("MobikWik_Label")}</Text>
                </TouchableOpacity>
                <Text style={PaymentStyles.cardtextstylethree}>{t("Wallets_Label")}</Text>
                <FlatList
                  data={Paymentdata}
                  renderItem={({ item, index }) => (<PaymentListView item={item} index={index} show={show} setShow={setShow} onPress={() => toggleHandler(index)} />)}
                  keyExtractor={item => item.id}
                  style={PaymentStyles.flatelist}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
