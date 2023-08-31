
import { StyleSheet, Platform } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';

// export default StyleSheet.create({
export default CarSelectScreenStyle = (Colors) => StyleSheet.create({

    TextHeadingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: widthPercent(60)
    },
    HeadingText: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(18),
        color: Colors.black_text_color,
        textAlign: 'center'
    },
    BackArrow: {
        width: SW(48),
        height: SH(48),
        borderRadius: SH(7),
        backgroundColor: Colors.bgWhite,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SelectCarHeadingStyle: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(18),
        color: Colors.black_text_color,
        textAlign: 'center'
    },
    TaxiBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: SH(1),
        borderColor: 'transparent',
        borderRadius: SH(20),
        paddingTop: SH(15),
        width: widthPercent(27),
        marginHorizontal: '1%',
        backgroundColor: Colors.bgWhite,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
    },
    TaxiBoxActive: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: SH(1),
        borderColor: Colors.theme_background_topaz,
        borderRadius: SH(20),
        paddingTop: SH(15),
        width: widthPercent(27),
        marginHorizontal: '1%',
        backgroundColor: Colors.bgWhite,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
    },
    TaxiServiceType: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(18),
        color: Colors.black_text_color,
    },
    TaxiNearby: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(16),
        color: Colors.gray_text_color,
    },
    TaxiPeiceStyle: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(25),
        color: Colors.black_text_color,
        lineHeight: SH(35),
    },
    TaxiPeiceSrcondStyle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(11),
        color: Colors.black_text_color,
    },
    PriceBox: {
        flexDirection: 'row',
        backgroundColor: Colors.theme_background_topaz,
        width: '100%',
        justifyContent: 'center',
        borderRadius: SH(20),
        paddingTop: SH(3),
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        position: 'relative',
        bottom: SH(-1)
    },
    TaxiBoxWrap: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    TaxiDistance: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        color: Colors.black_text_color,
        paddingTop: SH(5),
        paddingLeft: SH(10)
    },
    FlexWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SH(10)
    },
    BorderHpri: {
        borderWidth: SH(1),
        borderColor: Colors.gray_text_color,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    }
});
