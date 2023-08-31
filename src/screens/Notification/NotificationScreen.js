import React, { useMemo } from "react";
import { Text, View, Image, KeyboardAvoidingView, TouchableOpacity, StatusBar} from "react-native";
import { HelpScreenStyles } from '../../styles';
import images from '../../index';
import { Container, Spacing } from '../../components';
import { SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';

const NotificationScreen = () => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HelpScreenStyless = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <View style={HelpScreenStyless.MinViewScreen}>
        <ScrollView nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={HelpScreenStyless.contentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={HelpScreenStyless.MinFlexView}>
              <View style={HelpScreenStyless.MinContentView}>
                <Spacing space={SH(20)} />
                <TouchableOpacity style={HelpScreenStyless.FlexDiractionRow}>
                  <View>
                    <Image style={HelpScreenStyless.ImageSet} resizeMode='cover' source={images.Notification_1} />
                  </View>
                  <View style={HelpScreenStyless.ParegraphWidth}>
                    <Text style={HelpScreenStyless.TextParegraph}>{t("Notification_Paregraph")}</Text>
                    <Text style={HelpScreenStyless.TwoNavemBerScreen}>{t("Notification_date")}</Text>
                  </View>
                </TouchableOpacity>
                <Spacing space={SH(20)} />
                <TouchableOpacity style={HelpScreenStyless.FlexDiractionRow}>
                  <View>
                    <Image style={HelpScreenStyless.ImageSet} resizeMode='cover' source={images.Notification_2} />
                  </View>
                  <View style={HelpScreenStyless.ParegraphWidthTwo}>
                    <Text style={HelpScreenStyless.TextParegraph}>{t("Notification_Paregraph_Two")}</Text>
                    <Text style={HelpScreenStyless.TwoNavemBerScreen}>{t("Notification_Date_Two")}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default NotificationScreen;
