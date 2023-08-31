
import { StyleSheet, Platform } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';

// export default StyleSheet.create({
export default ArrivingScreenStyle = (Colors) => StyleSheet.create({

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
    SetImahMapStyle: {
        height: SH(50),
        width: SW(50),
    },
    WhereAreYouBoxWrap: {
        width: '100%',
        position: 'absolute',
        bottom: SH(15),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: SH(20)
    },
    WhereAreYouBox: {
        width: '100%',
        backgroundColor: Colors.bgWhite,
        // height: SH(200),
        borderRadius: SH(20),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        paddingHorizontal: SH(20),
        paddingVertical: SH(15)
    },
    ArrivingTitle: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.black_text_color,
        fontSize: SF(17)
    },
    ArrivingTime: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(15)
    },
    FlexRoWSpBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    CarDriverAvtarWrap: {
        width: SW(60),
        height: SH(60),
        marginRight: SH(10)
    },
    CarDriverAvtar: {
        width: '100%',
        height: '100%',
        borderRadius: SW(7)
    },
    DriverAvtarName: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.black_text_color,
        fontSize: SF(16)
    },
    Taxi_Modal: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(15),
        paddingLeft: SH(5),
        marginTop: SH(2)
    },

    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    RateStyle: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.black_text_color,
        fontSize: SF(15),
        marginTop: SH(5),
        paddingLeft: SH(5)
    },
    TaxiNumber: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray_text_color,
        fontSize: SF(14),
    },
    TaxiNumberWrap: {
        paddingHorizontal: SH(5),
        paddingVertical: SH(5),
        backgroundColor: Colors.aliceblue,
        borderRadius: SH(100),
        justifyContent: 'center',
        alignItems: 'center',
        width: widthPercent(30)
    },
    width40: {
        width: '40%',
        marginLeft: SH(15)
    },
    width60: {
        width: '60%'
    },
    TaxiOptionBox: {
        width: SW(50),
        height: SH(50),
        borderRadius: SW(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light_gray_text_color,
    },
    TaxiBgOptionBox: {
        width: SW(50),
        height: SH(50),
        borderRadius: SW(15),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.theme_background_topaz
    },
    SpaceHori: {
        paddingHorizontal: SH(60)
    }
});
