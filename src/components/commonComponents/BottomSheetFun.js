import React from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Dimensions } from 'react-native';

function BottomSheetFun(props) {
    const { children, } = props;
    return (
        <BottomSheet isOpen>
            {children}
        </BottomSheet>
    );
};
export default BottomSheetFun;