import React, { useMemo } from "react";
import { View, KeyboardAvoidingView, FlatList, StatusBar } from "react-native";
import { ChatStyles } from '../../../styles';
import { RouteName } from '../../../routes';
import { SH,SF } from '../../../utils';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconT from "react-native-vector-icons/MaterialIcons";
import IconF from "react-native-vector-icons/Feather";
import IconO from 'react-native-vector-icons/Octicons';
import { Container, Spacing, MessageView } from '../../../components';
import images from '../../../index';
import { ScrollView } from 'react-native-virtualized-view';

const Messagelist = (props) => {
  const { navigation } = props;
  const { Colors } = useTheme();
  const ChatStyless = useMemo(() => ChatStyles(Colors), [Colors]);
  const { t } = useTranslation();

  const Messagelistdata = [
    {
      "id": 1,
      "image": images.Chat_image_saven,
      "text": 'Alastair_Cook',
      "texttwoset": 'Online_Text',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.useronline_color} />,
    },
    {
      "id": 2,
      "image": images.Chat_image_one,
      "text": 'Graham_Gooch',
      "texttwoset": 'Offline_Text',
      "settime": 'Minutes_Ago',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.red} />,
    },
    {
      "id": 3,
      "image": images.Chat_image_two,
      "text": 'Andrew_Flintoff',
      "texttwoset": 'Online_Text',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.useronline_color} />,
    },
    {
      "id": 4,
      "image": images.Chat_image_saven,
      "text": 'Ian_Botham',
      "texttwoset": 'Online_Text',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.useronline_color} />,
    },
    {
      "id": 5,
      "image": images.Chat_image_five,
      "text": 'Sophia_Dunkley',
      "texttwoset": 'Offline_Text',
      "settime": 'Minutes_Ago_41',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.red} />,
    },
    {
      "id": 6,
      "image": images.Chat_image_six,
      "text": 'Lauren_Bell',
      "texttwoset": 'Online_Text',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.useronline_color} />,
    },
    {
      "id": 7,
      "image": images.Chat_image_saven,
      "text": 'Charlie_Dean',
      "texttwoset": 'Offline_Text',
      "settime": 'Minutes_Ago_1',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.red} />,
    },
    {
      "id": 8,
      "image": images.Chat_image_one,
      "text": 'Danni_Wyatt',
      "texttwoset": 'Offline_Text',
      "settime": 'Minutes_Ago_3',
      "icon": <IconO name="dot-fill" size={SF(30)} color={Colors.red} />,
    },
  ];
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgWhite} />
      <View style={ChatStyless.MinViewScreen}>
        <ScrollView nestedScrollEnabled={true}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={ChatStyless.ContentContainerStyle} >
          <KeyboardAvoidingView enabled>
            <View style={ChatStyless.MinFlexViewtwo}>
              <View style={ChatStyless.MinViewSecond}>
                <Spacing space={SH(5)} />
                <FlatList
                  data={Messagelistdata}
                  renderItem={({ item }) => (<MessageView
                    item={item}
                    onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}
                  />)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default Messagelist;
