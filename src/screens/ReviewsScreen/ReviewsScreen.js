import React, { useState, useMemo } from "react";
import { Text, View, KeyboardAvoidingView, TextInput, StatusBar} from "react-native";
import { HelpScreenStyles } from '../../styles';
import { Button, ConfirmationAlert, Container, Lottie, Spacing } from '../../components';
import { Rating } from 'react-native-ratings';
import images from "../../index";
import { RouteName } from "../../routes";
import { SH } from "../../utils";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';

const ReviewsScreen = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  const { t } = useTranslation();
  const [text, onChangeText] = React.useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  
  var alertdata = {
    'logout': t("Reviews_Submit_Successful"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <View style={HelpScreenStyless.MinViewScreenTwo}>
      <ScrollView nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={HelpScreenStyless.contentContainerStyle}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyless.KeyBordTopViewStyle}>
            <View style={HelpScreenStyless.MinFlexView}>
              <View style={HelpScreenStyless.MinContentView}>
                <Lottie Lottiewidthstyle={HelpScreenStyless.PostionReView} source={images.Reviewsimage_screen} />
                <Text style={HelpScreenStyless.AccountTextTwo}>{t("Please_OnDemand_Service")}</Text>
                <View style={HelpScreenStyless.FlexRowStarSignup}>
                  <Rating
                    type='custom'
                    ratingColor={Colors.amber_color}
                    ratingBackgroundColor={Colors.chinese_silver}
                    ratingCount={5}
                    tintColor={Colors.white_text_color}
                    imageSize={30}
                    startingValue={3.5}
                    isDisabled={false}
                  />
                </View>
                <Text style={HelpScreenStyless.AccountTextSuccessfullyTwo}>{t("Please_OnDemand_Two")}</Text>
                <View style={HelpScreenStyless.InputUnderLineReviews}>
                  <TextInput
                    style={HelpScreenStyless.PositionStyleInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={t("Reviews_Enter_Your_Commenet")}
                    placeholderTextColor={Colors.black_text_color}
                  />
                </View>
                <Spacing space={SH(20)} />
                <View style={HelpScreenStyless.AccountButton}>
                  <Button onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.logout);
                  
                  }} title={t("Reviews_Submit")}
                  />
                </View>
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
        buttonminview={HelpScreenStyless.ButtonView}
        iconVisible={true}
        buttonText={t("Ok")}
      />
    </View>
    </Container>
    
  );
};
export default ReviewsScreen;
