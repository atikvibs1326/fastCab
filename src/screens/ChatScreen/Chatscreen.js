import React, { useState, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import { ChatStyles, Style } from '../../styles';
import images from '../../index';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import { SH, SF } from "../../utils";
import { Spacing } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';

const Chatscreen = (props) => {
    const { Colors } = useTheme();
    const { t } = useTranslation();
    const ChatStyless = useMemo(() => ChatStyles(Colors), [Colors]);
    const Styles = useMemo(() => Style(Colors), [Colors]);

    return (
        <View style={ChatStyless.MinViewScreen}>
            <ScrollView nestedScrollEnabled={true}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Styles.contentContainerStyle}>
                <KeyboardAvoidingView enabled>
                    <View style={ChatStyless.MinFlexView}>
                        <View style={ChatStyless.MinContentView}>
                            <View style={ChatStyless.MarginBottomSpace}>
                                <View style={ChatStyless.FlexRowJustyCenter}>
                                    <View style={ChatStyless.ChatViewBgColor}>
                                        <Text style={ChatStyless.TextColorMessage}>{t("ChatText_Let_Me")}</Text>
                                        <Text style={ChatStyless.TextColorMessageTwo}>03:16</Text>
                                    </View>
                                </View>
                                <Text style={ChatStyless.DataSandTimeColor}>10 Oct,2022</Text>
                                <Spacing space={SH(10)} />
                            </View>
                            <View style={ChatStyless.MarginBottomSpace}>
                                <View style={ChatStyless.FlexRowJustyCentertwo}>
                                    <View style={ChatStyless.LeftImageView}>
                                        <Image source={images.Chat_image_one} style={ChatStyless.ImagStyleandCall} resizeMode={'cover'} />
                                    </View>
                                    <View style={ChatStyless.MessageMinviewOwner}>
                                        <Text style={ChatStyless.TextColorMessage}>{t("Chattext_Actually_I_Have")}</Text>
                                        <View style={ChatStyless.FlexCheckSet}>
                                            <View>
                                                <Text style={ChatStyless.TextColorMessageTwotwo}>03:18</Text>
                                            </View>
                                            <View style={ChatStyless.SetRightIconViewStyle}>
                                                <IconL color={Colors.white_text_color} name="check" />
                                                <IconL color={Colors.white_text_color} style={ChatStyless.SetIconPotion} name="check" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Spacing space={SH(20)} />
                            <View style={ChatStyless.MarginBottomSpace}>
                                <View style={ChatStyless.FlexRowJustyCenter}>
                                    <View style={ChatStyless.ChatViewBgColor}>
                                        <Text style={ChatStyless.TextColorMessage}>{t("Chat_Can_You_Just")}</Text>
                                        <Text style={ChatStyless.TextColorMessageTwo}>03:19</Text>
                                    </View>
                                </View>
                                <Text style={ChatStyless.DataSandTimeColor}>10 Oct,2022</Text>
                            </View>
                            <Spacing space={SH(14)} />
                            <View style={ChatStyless.MarginBottomSpace}>
                                <View style={ChatStyless.FlexRowJustyCentertwo}>
                                    <View style={ChatStyless.LeftImageView}>
                                        <Image source={images.Chat_image_one} style={ChatStyless.ImagStyleandCall} resizeMode={'cover'} />
                                    </View>
                                    <View style={ChatStyless.MessageMinviewOwner}>
                                        <Text style={ChatStyless.TextColorMessage}>{t("Chat_Multipal_Project")}</Text>
                                        <View style={ChatStyless.FlexCheckSet}>
                                            <View>
                                                <Text style={ChatStyless.TextColorMessageTwotwo}>03:19</Text>
                                            </View>
                                            <View style={ChatStyless.SetRightIconViewStyle}>
                                                <IconL color={Colors.white_text_color} name="check" />
                                                <IconL color={Colors.white_text_color} style={ChatStyless.SetIconPotion} name="check" />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Spacing space={SH(23)} />
                            <View style={ChatStyless.MarginBottomSpace}>
                                <View style={ChatStyless.FlexRowJustyCenter}>
                                    <View style={ChatStyless.ChatViewBgColor}>
                                        <Text style={ChatStyless.TextColorMessage}>{t("Chat_Excellent")}</Text>
                                        <Text style={ChatStyless.TextColorMessageTwo}>03:20</Text>
                                    </View>
                                </View>
                                <Text style={ChatStyless.DataSandTimeColor}>10 Oct,2022</Text>
                            </View>
                            <Spacing space={SH(27)} />
                            <View style={ChatStyless.MarginBottomSpace}>
                                <View style={ChatStyless.seticonrevirview}>
                                    <View style={ChatStyless.FlexRowJustyCentertwo}>
                                        <View style={ChatStyless.LeftImageView}>
                                            <Image source={images.Chat_image_one} style={ChatStyless.ImagStyleandCall} resizeMode={'cover'} />
                                        </View>
                                        <View style={ChatStyless.MessageMinviewOwner}>
                                            <Text style={ChatStyless.TextColorMessage}>{t("Chat_Last_Paregraph")}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Spacing space={SH(27)} />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            <View style={ChatStyless.PostionAbsoluTeView}>
                <View style={ChatStyless.TextMessageView}>
                    <View style={ChatStyless.FlexrowSendMesasage}>
                        <View>
                            <TextInput
                                style={ChatStyless.TextInputBorderBottom}
                                placeholder={t("Write_A_Reply")}
                                placeholderTextColor={Colors.gray_text_color}
                            />
                        </View>
                        <View style={ChatStyless.FlexrowImagiNations}>
                            <TouchableOpacity>
                                <IconP name="grin" size={SF(25)} />
                            </TouchableOpacity>
                            <TouchableOpacity style={ChatStyless.MarginRightlikeicon}>
                                <IconO name="send" color={Colors.theme_background_topaz} size={SF(30)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default Chatscreen;
