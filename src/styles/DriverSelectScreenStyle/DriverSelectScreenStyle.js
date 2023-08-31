import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent, heightPercent } from '../../utils';


// export default StyleSheet.create({
export default DriverSelectScreenStyle = (Colors) => StyleSheet.create({

    minstyleviewphotograpgy: {
        height: '100%',
        width: '100%',
    },
    mapviewstyle: {
        flex: 1,
        justifyContent: 'center',
    
      },
      mapstyleset: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
      },
    ProfileViewWrap: {
        position: 'absolute',
        top: SH(12),
        left: SH(0),
        zIndex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: SH(48),
    },
    TextHeadingBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        // justifyContent: 'space-between',
        // width: widthPercent(60)
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
        alignItems: 'center',
        position: 'absolute',
        top: SH(0),
        left: SH(12),
    },
    HeadingText: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(18),
        color: Colors.black_text_color,
        textAlign: 'center'
    },
    CircleStrong: {
        width: SW(100),
        height: SW(100),
        borderWidth: SH(2),
        borderColor: Colors.theme_background_topaz,
        borderRadius: SH(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    CarIconStyle: {
        width: SW(50),
        height: SH(50)
    },
    LinearGradient: {
        position: 'absolute',
        top: SH(0),
        left: SH(0),
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HeadingTitleBox: {
        position: 'absolute',
        left: SH(0),
        width: '100%',
        top: SH(100),
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    CircleMedium: {
        width: SW(180),
        height: SW(180),
        borderWidth: SH(2),
        borderColor: Colors.theme_background_topaz,
        borderRadius: SH(100),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    CircleLow: {
        width: SW(260),
        height: SW(260),
        borderWidth: SH(2),
        borderColor: Colors.theme_background_topaz,
        borderRadius: SW(200),
        justifyContent: 'center',
        alignItems: 'center',
    },
    DriverProfileImage: {
        width: '100%',
        height: '100%',
        borderRadius: SH(7),
    },
    CircleMediumDriverBox: {
        position: 'absolute',
        top: SH(-20),
        backgroundColor: Colors.bgWhite,
        borderWidth: SW(.5),
        borderColor: Colors.gray_text_color,
        borderRadius: SW(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,

        // transform: [{ rotate: "180deg" }],
    },
    CircleMediumSubDriverBox: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(10),
    },
    DriverProfileView: {
        width: SW(48),
        height: SH(48),
        borderRadius: SH(15),
        backgroundColor: Colors.bgWhite,
        marginRight: SH(10)
    },
    DriverProfileViewMedium: {
        width: SW(48),
        height: SH(48),
        borderRadius: SH(15),
        backgroundColor: Colors.bgWhite,
        marginRight: SH(10),
        position: 'absolute',
        zIndex: 1,
        left: SW(-20),
        top: SH(100)
    },
    DriverProfileLowView: {
        width: SW(48),
        height: SH(48),
        borderRadius: SH(15),
        backgroundColor: Colors.bgWhite,
        marginRight: SH(10),
        position: 'absolute',
        zIndex: 1,
        right: SW(-35),
        top: SH(100)
    },
    DriverProfileName: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(16),
        color: Colors.black_text_color,
    },
    HeadingTitle: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(18),
        color: Colors.black_text_color,
        textAlign: 'center'
    },
    HeadingSubTitle: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(16),
        color: Colors.black_text_color,
        textAlign: 'center'
    },
    DriverProfileDetails: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(14),
        color: Colors.gray_text_color
    },
    TrianleStyle: {
        width: SW(10),
        height: SH(10),
        position: "absolute",
        bottom: SH(-10),
        borderLeftWidth: SW(10),
        borderLeftColor: "transparent",
        borderRightWidth: SW(10),
        borderRightColor: "transparent",
        borderBottomWidth: SW(10),
        borderBottomColor: Colors.gray_text_color,
        transform: [{ rotate: "180deg" }],
        zIndex: 5
    },
    TrianleBorderStyle: {
        width: SW(10),
        height: SH(10),
        position: "absolute",
        bottom: SH(-20),
        borderLeftWidth: SW(9),
        borderLeftColor: "transparent",
        borderRightWidth: SW(9),
        borderRightColor: "transparent",
        borderBottomWidth: SW(9),
        borderBottomColor: Colors.bgWhite,
        transform: [{ rotate: "180deg" }],
        zIndex: 5

    },
    ProceedPaymentBtn: {
        position: 'absolute',
        bottom: SH(30),
        justifyContent: 'center',
        width: widthPercent(100),
        alignItems: 'center'
    },
   
});