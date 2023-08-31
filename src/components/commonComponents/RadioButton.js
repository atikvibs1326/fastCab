import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { CheckBox } from 'react-native-elements';

function RadioButton({
  onChangeText,
  value,
  errorMessage,
  arrayData
}) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: "100%",
          paddingHorizontal: SW(15)
        },
        radioButtonView: {
          flexDirection: 'row',
          justifyContent: 'flex-start'
        },
        labelStyle: {
          fontSize: SF(15),
          color: Colors.theme_background,
          fontFamily: Fonts.Poppins_Medium,
          paddingVertical: SH(2),
        },
        errorStyle: {
          color: Colors.theme_background,
          margin: SH(5),
          fontSize: SF(12),
        },
        containerStyle: {
          backgroundColor: 'transparent',
          borderWidth: SH(0),
          padding: SH(0),
          marginLeft: SH(0)
        },
      }),
  );
  return (
    <View style={styles.container}>
      <View style={styles.radioButtonView}>
        {arrayData && arrayData.map((item) => {
          return (
            <CheckBox
              key={item.value}
              title={item.label}
              checked={value === item.value}
              onPress={() => onChangeText(item.value)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              textStyle={styles.labelStyle}
              containerStyle={styles.containerStyle}
            />
          )
        })}
      </View>
      <Text style={styles.errorStyle}>{errorMessage}</Text>
    </View>
  );
}

RadioButton.defaultProps = {
  title: '',
  placeholder: '',
  titleStyle: {},
  inputStyle: {},
  onChangeText: () => { },
  onFocus: () => { },
  onBlur: () => { },
  value: '',
  textprops: {},
  inputprops: {},
  inputType: null,
  autoCompleteType: ''
};

RadioButton.propTypes = {
  title: propTypes.string,
  autoCompleteType: propTypes.string,
  placeholder: propTypes.string,
  titleStyle: propTypes.shape({}),
  inputStyle: propTypes.shape({}),
  onChangeText: propTypes.func,
  value: propTypes.string,
  textprops: propTypes.object,
  inputprops: propTypes.object,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  inputType: propTypes.any,
};

export default RadioButton;
