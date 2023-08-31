import React, { useMemo } from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native';
import { Fonts, SF, SH, SW, Colors } from '../../utils';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';

function CheckBoxset(props) {
    const { value, onValueChange, disabled, status, CheckBoxStyle } = props;

    const styles = useMemo(
        () =>
            StyleSheet.create({
                CheckBoxStyle: {
                    height: SH(20),
                    width: SW(20),
                },

            }),
        [CheckBoxStyle, Colors],
    );
    return (
        <CheckBox
            status={status}
            disabled={disabled}
            style={[styles.CheckBoxStyle, { ...CheckBoxStyle }]}
            value={value}
            onValueChange={onValueChange}
            tintColors={{ true: Colors.theme_background, false: Colors.theme_background }}
        />
    );
};
export default CheckBoxset;