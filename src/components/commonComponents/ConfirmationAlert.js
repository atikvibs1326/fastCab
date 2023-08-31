import React, { useMemo } from 'react';
import { Modal, Text, View } from "react-native";
import {Style} from '../../styles';
import IconF from 'react-native-vector-icons/dist/AntDesign';
import { Button } from '../../components';
import propTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { SF } from '../../utils';

function SweetaelertModal(props) {
    const { message, modalVisible, setModalVisible, buttonminview, onPress, onPressCancel, buttonText, cancelButtonText, iconVisible } = props;
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const Styles = useMemo(() => Style(Colors), [Colors]);
    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
    >
        <View style={Styles.setbgcolorgrsay}>
            <View style={Styles.CenteredView}>
                <View style={Styles.ModalView}>
                    {iconVisible &&
                        <View style={Styles.setroundcenter}>
                            <View style={[Styles.checkiconright,{borderColor:Colors.theme_background_topaz}]}>
                                <IconF style={Styles.setbackgroundicon} color={Colors.theme_background_topaz} name="check" size={SF(45)} />
                            </View>
                        </View>
                    }
                    <View style={Styles.registertextset}>
                        <Text style={Styles.settext}>{message}</Text>
                    </View>
                    <View style={[Styles.buttonminview, { ...buttonminview }]} >
                        <View style={Styles.setokbutton}>
                            <Button title={buttonText}
                                onPress={() => { onPress && onPress() }}
                            />
                        </View>
                        {cancelButtonText ?
                            <View style={Styles.setokbutton}>
                                <Button title={cancelButtonText}
                                    onPress={() => { onPressCancel() }}
                                />
                            </View>
                            : null
                        }
                    </View>
                </View>
            </View>
        </View>
    </Modal>;
}

SweetaelertModal.defaultProps = {
    message: '',
    setModalVisible: () => { },
    modalVisible: false,
    onPress: () => { },
    onPressCancel: () => { },
    buttonText: 'Ok',
    cancelButtonText: '',
    iconVisible: false
};

SweetaelertModal.propTypes = {
    message: propTypes.string,
    setModalVisible: propTypes.func,
    onPress: propTypes.func,
    onPressCancel: propTypes.func,
    buttonText: propTypes.string,
    cancelButtonText: propTypes.string,

};

export default SweetaelertModal;
