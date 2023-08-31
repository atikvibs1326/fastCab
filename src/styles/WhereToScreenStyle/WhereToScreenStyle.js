import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Colors, SH, SW, SF, Fonts, widthPercent } from '../../utils';


// export default StyleSheet.create({
export default WhereToScreenStyle = (Colors) => StyleSheet.create({

    WhereTOText: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(17),
        color: Colors.black_text_color,
    },
    CustomizeText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(17),
        color: Colors.gray_text_color,
    },
    FlexRowJusBTN: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    NewTrip: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(17),
        color: Colors.gray_text_color,
    },
    BoxAddress: {
        width: SW(150),
        backgroundColor: Colors.light_gray_text_color,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SH(15),
        borderRadius: SH(10),
        shadowColor: '#b5b2b2',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 5,
            minHeight: '100%',
        },
        shadowOpacity: 1,
        shadowRadius: Platform.OS === 'ios' ? 2 : 50,
        elevation: Platform.OS === 'ios' ? 1 : 6,
        marginRight: SH(10),
        marginVertical: SH(10)
    },
    LocationHeadText: {
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(16),
        color: Colors.black_text_color,
    },
    LocationText: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(15),
        color: Colors.gray_text_color,
    },
    BoxAddressIcon: {
        position: 'absolute',
        top: SH(-10),
        zIndex: 10
    }
});