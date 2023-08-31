import React from "react";
import OTPInputView from '@twotalltotems/react-native-otp-input';

function OTPInput(props) {
    const { style, pinCount, autoFocusOnLoad, codeInputFieldStyle,codeInputHighlightStyle } = props;
    return (
        <OTPInputView
            style={style}
            pinCount={pinCount}
            autoFocusOnLoad={autoFocusOnLoad}
            codeInputFieldStyle={codeInputFieldStyle}
            codeInputHighlightStyle={codeInputHighlightStyle}
        />
    );
};
export default OTPInput;