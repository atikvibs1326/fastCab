
import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

// export default StyleSheet.create({
export default HelpScreenStyles = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height:'auto'
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal:SH(0),
    backgroundColor:Colors.white_text_color,
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: Colors.white_text_color
  },
  MinContentView: {
    width: '100%',
    height: '100%',
    paddingBottom: 30,
  },
  MinFlexView: {
    width: '100%',
    height: '100%',
  },
  HelpViewStyles: {
    width: '100%',
    height: '100%',
    paddingHorizontal:SH(20),
  },
  PostionReView: {
    position:'relative',
    right:SH(7)
  },
  TextInputWidth: {
    backgroundColor: Colors.light_gray_text_color,
    borderRadius: 7,
    borderWidth:1,
    borderColor:Colors.gray_text_color,
    paddingBottom: SH(100),
    paddingHorizontal: SH(10),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  TextInputeText: {
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.gray_text_color,
    fontSize: SF(18),
    paddingTop:SH(20),
  },
  ButtonStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: SH(20),
    paddingBottom: SH(5),
  },
  BgColorWhite: {
    backgroundColor: Colors.white_text_color,
    marginBottom: 10,
    width:'100%',
    borderRadius: 10,
    borderBottomWidth:1,
    borderColor:Colors.gray_text_color,
  },
  FlexRowArrowLeftThree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white_text_color,
    borderRadius: 5,
    padding: SH(10),
    paddingTop:SH(0),
  },
  FlexRowCreditCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextWidth: {
    width: '88%',
  },
  CreditCardText: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '600',
    color: Colors.black_text_color,
  },
  ParegraPhViewStyle: {
   paddingVertical:SH(10),
    paddingHorizontal: SH(10),
    width:'88%',
  },
  paddibnglefttextstyle: {
    paddingLeft: SH(10),
    color: Colors.gray_text_color,
    width: SW(260),
    padding: 0,
    fontSize: SF(15),
    fontFamily: Fonts.Poppins_Medium,
  },
  ParegraphTextHelp: {
    fontSize:SF(17),
    fontFamily:Fonts.Poppins_Medium,
  },
  Camerastyleset: {
    width: SW(300),
    height: SH(310),
    borderRadius: SH(15),
    overflow: 'hidden',
    borderWidth: 0,
  },
  Flexrowcentercontain: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Markerstyleset: {
    width: SW(300),
    height: SH(310),
    borderRadius: SH(15),
    borderWidth: 0,
  },
  scanvicolor: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: Colors.white_text_color
  },
  MinViewAllContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlexCenterButton: {
    flexDirection:'row',
    justifyContent:'center'
  },
  ChangeTheameBgColor: {
    height: SH(67),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    borderRadius: 200,
    backgroundColor: Colors.theme_background_topaz,
  },
  SetFileChnage: {
    paddingHorizontal: SH(12),
    width: '95%',
    height: SH(47),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 200,
    backgroundColor: Colors.white_text_color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  InputWidth: {
    width: '90%',
    paddingTop:SH(26)
  },
  InputStyles: {
    backgroundColor: 'transparent',
    borderWidth:0,
    height:SH(50),
  },
  Iconstyles: {
    width: '10%',
  },
  BgWhiteView: {
    position:'absolute',
    paddingTop:SH(10),
    paddingBottom:SH(20),
    width:'100%',
    backgroundColor:Colors.white_text_color
  },
  succefullimgviewsethre: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  succefullyimg: {
    width: SW(330),
    height: SH(230),
  },
  AccountTextTwo: {
    color: Colors.black_text_color,
    fontSize: SF(23),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  FlexRowStarSignup: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SH(15),
  },
  AccountTextSuccessfullyTwo: {
    fontSize: SF(17),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
    paddingBottom: 20,
    color: Colors.gray_text_color
  },
  InputUnderLineReviews: {
    borderWidth: 1,
    width: '100%',
    color: Colors.black_text_color,
    borderRadius: 7,
    fontFamily: Fonts.Poppins_Medium,
    marginBottom: SH(12),
    paddingVertical: SH(20),
    paddingHorizontal: SH(15),
    borderColor: Colors.gray_text_color,
  },
  PositionStyleInput: {
    position: 'relative',
    top: -20,
  },
  AccountButton: {
    width: '100%',
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  MinViewScreenTwo: {
    backgroundColor: Colors.white_text_color,
    height: '100%',
    width:'100%',
    paddingHorizontal: SH(15)
  },
  FlexDiractionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  ImageSet: {
    height: SH(100),
    width: SW(100),
    borderRadius: 20,
    marginRight: SH(20),
  },
  ParegraphWidth: {
    width: '68%'
  },
  TextParegraph: {
    fontSize: SF(13),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    lineHeight: 19,
  },
  TwoNavemBerScreen: {
    fontSize: SF(13),
    color: Colors.theme_background_topaz,
    fontFamily: Fonts.Poppins_Medium,
  },
  ImageSet: {
    height: SH(100),
    width: SW(100),
    borderRadius: 20,
    marginRight: SH(20),
  },
  ParegraphWidthTwo: {
    width: '68%',
    borderBottomColor: Colors.light_gray_text_color,
  },
  TextParegraph: {
    fontSize: SF(13),
    color: Colors.gray_text_color,
    fontFamily: Fonts.Poppins_Medium,
    lineHeight: 19,
  },
  TwoNavemBerScreen: {
    fontSize: SF(13),
    color: Colors.theme_background_topaz,
    fontFamily: Fonts.Poppins_Medium,
  },
});
