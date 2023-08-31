import React, { useEffect, useMemo } from "react";
import { Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from "react-native";
import { Payment, Style } from '../../styles';
import images from '../../index';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';
import { useTranslation } from "react-i18next";
import { Container, AppHeader } from '../../components';
import { useTheme } from '@react-navigation/native';
import { Colors } from "../../utils";


const PaytmSuccessFully = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { Colors } = useTheme();
  const Payments = useMemo(() => Payment(Colors), [Colors]);
  const Styles = useMemo(() => Style(Colors), [Colors]);


  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      navigation.navigate(RouteName.ARRIVING);
      clearInterval(interval);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <AppHeader Iconname={true} headerTitle={t("Card_SCREEN_Label")} onPress={() => navigation.navigate(RouteName.ARRIVING)} />
      <View style={Payments.minstyleviewphotograpgy}>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={Styles.contentContainerStyle}>
          <View style={Payments.keybordtopviewstyle}>
            <View style={Payments.minflexview}>
              <View style={Payments.minviewsigninscreen}>
                <TouchableOpacity style={Payments.imagecebter}>
                  <Image source={images.Pymentsuceeful_img} resizeMode='cover' style={Payments.paymentsuccesfullimg} />
                </TouchableOpacity>
                <View style={Payments.textcenterview}>
                  <Text style={[Payments.textcenterpayment, { color: colorrdata }]}>{t("PAYMENT_SUCCESSFULL")}</Text>
                </View>
                <Text style={Payments.textcenterpaymenttwo}>{t("Payment_Scucessfull_Massage")}</Text>

                <TouchableOpacity style={Payments.flexrowcoffitext}>
                  <Text style={Payments.totalamountpaid}>{t("PAYED_BY")}</Text>
                  <Text style={Payments.proicetextset}>{t("Paytm_Label")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Payments.flexrowcoffitexttwo}>
                  <Text style={Payments.totalamountpaid}>{t("TRANCATION_DATE")}</Text>
                  <Text style={Payments.proicetextset}>{t("Transaction_Date")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
export default PaytmSuccessFully;
