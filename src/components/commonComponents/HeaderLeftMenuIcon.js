import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors, SF } from '../../utils';
import { VectorIcon } from '../../components';

function HeaderLeftMenuIcon(props) {
    const { onPress } = props;
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <VectorIcon
                color={Colors.theme_background_topaz}
                name="navicon"
                icon="EvilIcons"
                size={SF(35)}
            />
        </TouchableOpacity>
    );
};

export default HeaderLeftMenuIcon;