import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';
let screenWidth = Dimensions.get('window').width;
const SLIDER_WIDTH = Dimensions.get('window').width + 80
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// export default StyleSheet.create({
export default SelectAddressStyle = (Colors) => StyleSheet.create({

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
    // BottomSheet
    MapDataShowBox: {
        position: 'absolute',
        bottom: 0,
        // top: '92%',
        left: 0,
        zIndex: 9,
        width: '100%',
        backgroundColor: '#fff',
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: SH(10),
        paddingHorizontal: SH(20),
        paddingBottom: SH(10)
    },
    Toplineopen: {
        width: SW(38),
        height: SH(6),
        backgroundColor: Colors.black_text_color,
        position: 'absolute',
        left: '50%',
        top: SH(5),
        borderRadius: SH(60)
    },

    Padd20: {
        paddingHorizontal: SH(20),
        position: 'relative',
        zIndex: 99999,
        width: '100%'
    },
    SavedPlaceText: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(17),
        color: Colors.black_text_color,
        paddingLeft: SH(15)
    },
    FlexRowOnly: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    FlexRowSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SH(15)
    },
    DirectionArrowBox: {
        width: SW(40),
        height: SH(40),
        backgroundColor: Colors.light_gray_text_color,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SH(7),
    },
    SavedIconWidth: {
        width: widthPercent(10)
    },
    SavedEditIconWidth: {
        width: widthPercent(10)
    },
    SavedAddWidth: {
        width: widthPercent(62)
    },
    AddLabelName: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(17),
        color: Colors.black_text_color,
        // lineHeight: SH(18)
    },
    AddDistanceTime: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        color: Colors.gray_text_color,
        paddingLeft: SH(10)
    },
    AddressText: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(17),
        color: Colors.gray_text_color,
    },
    AddBox: {
        paddingHorizontal: SH(15),
        borderWidth: SH(1),
        borderColor: Colors.light_gray_text_color,
        paddingVertical: SH(5),
        borderRadius: SH(10)
    },
    PaddHor: {
        paddingHorizontal: SH(10)
    },
    RecentText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        color: Colors.gray_text_color,
        paddingHorizontal: SH(10)
    },
    Line: {
        backgroundColor: Colors.light_gray_text_color,
        width: SW(70),
        height: SH(1),
        borderRadius: SH(20)
    },
    FlexRowJuCen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RecentAddText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(17),
        color: Colors.gray_text_color,
        lineHeight: SH(20),
        paddingLeft: SH(10)
    },
    PaddHor30: {
        paddingHorizontal: SH(30)
    }

});