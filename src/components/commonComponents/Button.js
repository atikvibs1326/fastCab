import React, { useMemo } from 'react';
import { Button } from 'react-native-elements';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { Fonts, SF, SH, SW, Colors } from '../../utils';

function Buttons(props) {
  const { title, onPress, buttonStyle, disable, buttonTextStyle, icon, spacedImages, linearGradientProps } = props;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        buttonStyle: {
          backgroundColor: Colors.theme_background_topaz,
          borderRadius: SH(7),
          width: '100%'
        },
        buttonTextStyle: {
          color: Colors.white_text_color,
          fontFamily: Fonts.Poppins_Medium,
          fontSize: SF(19),
          fontWeight: '600',
          lineHeight: SH(24),
        },
        buttonViewStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: spacedImages ? 'space-around' : 'center',
          width: '100%'
        },
        LeftImageViewStyle: {
          marginVertical: SW(5)
        }
      }),
    [disable, spacedImages],
  );

  return (
    <TouchableOpacity >
      <Button
        title={title}
        onPress={onPress}
        icon={icon}
        disabled={disable}
        linearGradientProps={linearGradientProps}
        buttonStyle={[styles.buttonStyle, { ...buttonStyle }]}
        titleStyle={[styles.buttonTextStyle, { ...buttonTextStyle }]}
      />
    </TouchableOpacity>
  );
}


export default Buttons;
