
import { StyleSheet } from 'react-native';
import {  SH,  SF, Fonts, widthPercent } from '../../utils';

export default CancelTripScreenStyle = (Colors) => StyleSheet.create({
    MinViewScreen: {
        width: '100%',
        height: '100%',
    },
    ProceedPaymentBtn: {
        position: 'absolute',
        bottom: SH(30),
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    ProceedPayment: {
        width: widthPercent(100),
        marginHorizontal:SH(20),
    },
    ProceedPaymentcansle: {
        width: widthPercent(90),
        marginHorizontal:SH(20),
    },
    CancelTitleWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    CancelTitle: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.black_text_color,
        fontSize: SF(20),
        width: widthPercent(80),
        textAlign: 'center'
    },
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    CancelReason: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(17),
        paddingLeft: SH(20)
    },
    PadHori: {
        paddingLeft: SH(30),
        paddingRight: SH(10)
    }
});
