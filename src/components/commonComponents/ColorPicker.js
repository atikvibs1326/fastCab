import React, { useState, useMemo } from "react";
import { View, Text, Image, Modal, TouchableOpacity, Platform } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { ColorpickerStyle } from '../../styles';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import Button from './Button';
import RouteName from '../../routes/RouteName';
import images from '../../index';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const ColorPickerset = (props) => {
  
  const { t } = useTranslation();

  const { colorrdata } = useSelector(state => state.commomReducer) || {};
  const { Colors } = useTheme();
  const ColorPickerStyles = useMemo(() => ColorpickerStyle(Colors), [Colors]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState(colorrdata);

  const dispatch = useDispatch();
  const onColorChange = (selectedColor) => {
    setCurrentColor(selectedColor);
    dispatch(color_picker_set_action(selectedColor))
  };
  const navigation = useNavigation();


  return (
    <View>
      <View style={ColorPickerStyles.CenteredViewtwo}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={ColorPickerStyles.CenteredView}>
            <View style={ColorPickerStyles.ModalView}>
              <View style={ColorPickerStyles.SetHeight}>
                <View
                  style={[
                    { backgroundColor: currentColor, borderRadius: 7 },
                  ]}
                >
                  <Text style={ColorPickerStyles.setcolorwhite}>{currentColor}</Text>
                  <ColorPicker
                    color={currentColor}
                    onColorChange={onColorChange}
                    onColorSelected={'red'}
                    thumbSize={50}
                    noSnap={true}
                    defaultProps={true}
                    row={false}
                    gapSize={0}
                    discreteLength={0}
                    sliderHidden={true}
                    discrete={true}
                  />
                </View>
              </View>
              <View style={ColorPickerStyles.setbuttonwidth}>
                <Button title={t("Ok")}
                  buttonStyle={{ backgroundColor: Colors.theme_background_topaz }}
                  onPress={() => { setModalVisible(false);    Platform.OS === 'ios' ? navigation.navigate(RouteName.SIDE_NAVIGATOR) : navigation.replace(RouteName.SIDE_NAVIGATOR)}}
                />
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={ColorPickerStyles.PaddingRight} onPress={() => setModalVisible(true)}>
          <Image style={ColorPickerStyles.colorpickerpickerimagwidth} resizeMode='cover' source={images.Color_picker_image} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ColorPickerset;