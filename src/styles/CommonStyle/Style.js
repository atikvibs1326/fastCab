import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';

// export default StyleSheet.create({
  export default Style = (Colors) => StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto',
  },
  uri: {
    width: SW(200),
    height: SH(100)
  },
 
  LeftIconLeftStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MinViewContent: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollViewStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 'auto',
  },
  FlexRowPassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    height: SH(50),
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white_text_color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
    position: 'relative'
  },
  InputPassword: {
    width: '80%',
    color: Colors.gray_text_color,
    fontSize: SF(17),
    padding: SH(0),
    paddingTop: SH(5),
    fontFamily: Fonts.Poppins_Medium,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%',
  },
  setbgcolorgrsay: {
    backgroundColor: Colors.gray_text_color,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkiconright: {
    borderWidth: 3,
    height: SH(80),
    width: SW(75),
    borderRadius: SH(100),
    flexDirection: 'row',
    borderColor: Colors.theme_background_topaz,
    alignContent: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(15),
  },
  registertextset: {
    paddingTop: SH(25),
    paddingBottom: SH(0),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    paddingHorizontal: SH(20),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  setokbutton: {
    width: '47%'
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(40),
    paddingTop: SH(20),
  },
  MinViewStyleSplash: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '100%'
  },
  SearchHomeTab: {
    width: '100%',
    backgroundColor: 'transperent',
    shadowColor: "transperent",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
    color: Colors.theme_background_topaz,
    fontFamily: Fonts.Poppins_Regular,
    color: '#fff'
  },
  MinViewScreen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  MinViewScreen: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor:Colors.white_text_color,
  },
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heightset: {
    height: 'auto',
  },
  SplashMinView: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
  },
  ScrollViewTestHeight: {
    width: '100%',
    height: 'auto'
  },
  buttonotp: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});