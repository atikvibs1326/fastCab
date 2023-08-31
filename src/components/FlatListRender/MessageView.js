import React, { useMemo } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ChatStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

function MessageView(props) {
    const { onPress,item } = props;
    const { Colors } = useTheme();
    const ChatStyless = useMemo(() => ChatStyles(Colors), [Colors]);
    const { t } = useTranslation();

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={ChatStyless.SetWhiteBox}>
                <View style={ChatStyless.FlexRowSetImage}>
                    <View style={ChatStyless.ImageCenterStyleTop}>
                        <Image style={ChatStyless.imagsetstyle} resizeMode="cover" source={item.image} />
                    </View>
                    <View style={ChatStyless.ListDotViewStyle}>
                        {item.icon}
                    </View>
                    <View style={ChatStyless.ImageCenterStyle}>
                        <Text style={ChatStyless.textsetdoctore}>{t(item.text)}</Text>
                        <View style={ChatStyless.setflextimeroe}>
                            <Text style={ChatStyless.textsetdoctoretwo}>{t(item.texttwoset)}</Text>
                            <Text style={ChatStyless.textsetdoctoretwo}>{t(item.settime)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default MessageView;